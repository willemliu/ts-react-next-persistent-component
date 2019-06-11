import React, { PureComponent } from "react";
import YoutubeStore from "../stores/YoutubeStore";

declare var YT: any;
declare var window: any;

/**
 * This component injects the Youtube Iframe API script into the <head/>.
 * And also renders the Youtube embed HTML and handles the state changes (Play/Stop/Pause).
 */
export default class YoutubeEmbed extends PureComponent<any, any> {
    state: any = {
        youtubeId: this.props.youtubeId
    };
    private player: any;

    componentDidMount() {
        /**
         * Inject the Youtube iframe API script into the head.
         */
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const head = document.querySelector('head');
        if (head) {
            head.appendChild(tag);
        }

        window.onYouTubeIframeAPIReady = () => {
            this.player = new YT.Player('player', {
                events: {
                    onReady: () => console.log,
                    onStateChange: this.onPlayerStateChange
                }
            });
        };
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.youtubeId !== prevProps.youtubeId && this.player) {
            this.player.cueVideoById({videoId: this.props.youtubeId});
        }
    }

    onPlayerStateChange = (event: any) => {
        switch (event.data) {
            case YT.PlayerState.PLAYING:
                YoutubeStore.setIsPlaying();
                break;
            case YT.PlayerState.PAUSED:
            case YT.PlayerState.ENDED:
                YoutubeStore.setIsPaused();
                break;
            default:
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
                    <iframe id="player" width="640" height="390" src={`https://www.youtube.com/embed/${this.state.youtubeId}?enablejsapi=1`} frameBorder="0"/>
                </div>
            </>
        );
    }
}
