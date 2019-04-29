import React, { PureComponent } from "react";
import YoutubeStore from "../stores/YoutubeStore";

declare var YT: any;
declare var window: any;

export default class YoutubeEmbed extends PureComponent<any, any> {
    private player: any;
    state: any = {
        youtubeId: this.props.youtubeId
    };

    componentDidMount() {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const head = document.querySelector('head');
        if (head) {
            head.appendChild(tag);
        }

        window.onYouTubeIframeAPIReady = () => {
            this.player = new YT.Player('player', {
                events: {
                    'onReady': () => console.log,
                    'onStateChange': this.onPlayerStateChange
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
            <iframe id="player" width="640" height="390" src={`https://www.youtube.com/embed/${this.state.youtubeId}?enablejsapi=1`} frameBorder="0"/>
        );
    }
}
