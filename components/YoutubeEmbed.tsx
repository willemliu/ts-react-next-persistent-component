import React, { PureComponent } from "react";
import YoutubeStore from "../stores/YoutubeStore";
import { withAmp, useAmp } from "next/amp";

declare var YT: any;
declare var window: any;

/**
 * This component injects the Youtube Iframe API script into the <head/>.
 * And also renders the Youtube embed HTML and handles the state changes (Play/Stop/Pause).
 */
class YoutubeEmbed extends PureComponent<{youtubeId: string, player: any}, any> {
    private player: any;

    componentDidMount() {
        window.onYouTubeIframeAPIReady = () => {
            console.log('componentDidMount.onYouTubeIframeAPIReady');
            this.player = new YT.Player('player', {
                videoId: this.props.youtubeId,
                width: 640,
                height: 390,
                events: {
                    onReady: () => console.log,
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
        };
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.youtubeId !== prevProps.youtubeId && this.player) {
            this.player.cueVideoById({videoId: this.props.youtubeId});
        }
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
function AmpYoutubeEmbed(props: {youtubeId: string, player: any}) {
    if (!props.youtubeId) {
        return null;
    }
    return (useAmp() ? <amp-youtube data-videoid={props.youtubeId} layout="responsive" width="480" height="270"/> : <YoutubeEmbed youtubeId={props.youtubeId} player={props.player}/>);
}

export default withAmp(AmpYoutubeEmbed as any, { hybrid: true }) as any;
