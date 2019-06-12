import React, { PureComponent } from "react";
import YoutubeStore from "../stores/YoutubeStore";
import { withAmp, useAmp } from "next/amp";

declare var YT: any;
declare var window: any;

/**
 * This component injects the Youtube Iframe API script into the <head/>.
 * And also renders the Youtube embed HTML and handles the state changes (Play/Stop/Pause).
 */
class YoutubeEmbed extends PureComponent<{youtubeId: string}, any> {
    private player: any;
    private playerReady: boolean = false;
    private iframeApiReady: boolean = false;

    componentDidMount() {
        // Initialize Youtube player.
        this.initPlayer();
    }

    componentDidUpdate(prevProps: any) {
        // When no Youtube player exist we try to initialize it first.
        if (!this.player) {
            this.initPlayer();
        }
        // When the Youtube player is ready and youtubeId has changed.
        if (this.props.youtubeId !== prevProps.youtubeId && this.playerReady) {
            // If youtubeId is not empty we cue the new video. Otherwise we stop the player.
            if (this.props.youtubeId) {
                this.player.cueVideoById({videoId: this.props.youtubeId});
            } else {
                this.player.stopVideo();
            }
        }
    }

    /**
     * Initialize the Youtube player if conditions are met.
     * - onYouTubeIframeAPIReady must be true
     */
    initPlayer = () => {
        if (this.iframeApiReady) {
            this.loadPlayer();
        } else {
            window.onYouTubeIframeAPIReady = () => {
                this.iframeApiReady = true;
                this.loadPlayer();
            };
        }
    }

    /**
     * Render the Youtube player if conditions are met.
     * - youtubeId must not be empty
     */
    loadPlayer = () => {
        if (!this.props.youtubeId) { return; }
        console.log('loadPlayer', this.props.youtubeId);
        this.player = new YT.Player('player', {
            videoId: this.props.youtubeId,
            width: 640,
            height: 390,
            events: {
                onReady: () => {
                    this.playerReady = true;
                },
                onStateChange: (event: any) => {
                    switch (event.data) {
                        case YT.PlayerState.PLAYING:
                            console.log('playing');
                            YoutubeStore.setIsPlaying();
                            break;
                        case YT.PlayerState.PAUSED:
                        case YT.PlayerState.ENDED:
                            console.log('paused/ended');
                            YoutubeStore.setIsPaused();
                            break;
                        default:
                    }
                }
            }
        });
    }

    render() {
        return (
            <>
                <style jsx global>{`
                    .iframe-container {
                        overflow: hidden;
                        padding-top: 56.25%;
                        position: relative;
                    }

                    .iframe-container iframe {
                        border: 0;
                        height: 100%;
                        left: 0;
                        position: absolute;
                        top: 0;
                        width: 100%;
                    }
                `}</style>
                <div className="iframe-container">
                    <div id="player"/>
                </div>
            </>
        );
    }
}

/**
 * Returns either the AMP or regular component depending on the request.
 * @param props
 */
function AmpYoutubeEmbed(props: {youtubeId: string}) {
    return (useAmp() ? <amp-youtube data-videoid={props.youtubeId} layout="responsive" width="480" height="270"/> : <YoutubeEmbed youtubeId={props.youtubeId}/>);
}

export default withAmp(AmpYoutubeEmbed as any, { hybrid: true }) as any;
