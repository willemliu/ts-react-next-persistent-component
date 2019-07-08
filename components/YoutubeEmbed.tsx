import React, { PureComponent } from 'react';
import YoutubeStore from '../stores/YoutubeStore';
import { useAmp } from 'next/amp';
import { Log } from '../utils/log';
import { getClient } from '../utils/app';

declare var YT: any;
declare var window: any;

/**
 * This component injects the Youtube Iframe API script into the <head/>.
 * And also renders the Youtube embed HTML and handles the state changes (Play/Stop/Pause).
 */
class YoutubeEmbed extends PureComponent<{ youtubeId: string }, any> {
    state: any = {};
    private player: any;

    componentDidMount() {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag: any = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => {
            Log.info({ client: getClient(), youTubeIframeAPIReady: true });
            this.setState({ youTubeIframeAPIReady: true });
            this.loadPlayer();
        };
    }

    componentDidUpdate(prevProps: any) {
        // When no Youtube player exist we try to initialize it first.
        if (!this.player || typeof this.player.cueVideoById !== 'function') {
            this.initPlayer();
        }

        // When the Youtube player is ready and youtubeId has changed.
        if (
            this.props.youtubeId !== prevProps.youtubeId &&
            this.state.playerReady
        ) {
            if (typeof this.player.cueVideoById === 'function') {
                // If youtubeId is not empty we cue the new video. Otherwise we stop the player.
                if (this.props.youtubeId) {
                    this.player.cueVideoById({ videoId: this.props.youtubeId });
                } else {
                    this.player.stopVideo();
                }
            } else {
                this.initPlayer();
            }
        }
    }

    /**
     * Initialize the Youtube player if conditions are met.
     * - onYouTubeIframeAPIReady must be true
     */
    initPlayer = () => {
        if (
            this.state.youTubeIframeAPIReady ||
            (typeof YT !== 'undefined' && YT.Player)
        ) {
            this.loadPlayer();
        }
    };

    /**
     * Render the Youtube player if conditions are met.
     * - youtubeId must not be empty
     */
    loadPlayer = () => {
        if (!this.props.youtubeId || this.player) {
            return;
        }
        Log.info({
            client: getClient(),
            message: 'Load player',
            videoId: this.props.youtubeId,
        });
        const youtubeId = this.props.youtubeId;
        const player = new YT.Player('player', {
            videoId: youtubeId,
            width: 640,
            height: 390,
            events: {
                onReady: () => {
                    this.setState({ playerReady: true });
                    if (youtubeId !== this.props.youtubeId) {
                        this.player.cueVideoById({
                            videoId: this.props.youtubeId,
                        });
                        Log.info({
                            client: getClient(),
                            youTubePlayerReady: true,
                            videoId: this.props.youtubeId,
                            oldVideoId: youtubeId,
                        });
                    } else {
                        Log.info({
                            client: getClient(),
                            youTubePlayerReady: true,
                            videoId: youtubeId,
                        });
                    }
                },
                onStateChange: (event: any) => {
                    switch (event.data) {
                        case YT.PlayerState.PLAYING:
                            Log.info({
                                client: getClient(),
                                youTubePlayerState: 'PLAYING',
                            });
                            YoutubeStore.setIsPlaying();
                            break;
                        case YT.PlayerState.PAUSED:
                        case YT.PlayerState.ENDED:
                            Log.info({
                                client: getClient(),
                                youTubePlayerState: 'PAUSED/ENDED',
                            });
                            YoutubeStore.setIsPaused();
                            break;
                        default:
                    }
                },
            },
        });
        this.player = player;
    };

    render() {
        return (
            <div className="iframe-container">
                <div id="player" />
            </div>
        );
    }
}

/**
 * Returns either the AMP or regular component depending on the request.
 * @param props
 */
export default function AmpYoutubeEmbed(props: { youtubeId: string }) {
    if (!props.youtubeId) {
        return null;
    }
    return useAmp() ? (
        <amp-youtube
            data-videoid={props.youtubeId}
            layout="responsive"
            width="480"
            height="270"
        />
    ) : (
        <YoutubeEmbed youtubeId={props.youtubeId} />
    );
}

export const config = {
    amp: 'hybrid',
};
