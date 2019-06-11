import {useAmp, withAmp} from 'next/amp';
import React, { PureComponent, useEffect } from "react";
import YoutubeStore from "../stores/YoutubeStore";

declare var YT: any;
declare var window: any;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'amp-youtube': any
        }
    }
}

/**
 * This component injects the Youtube Iframe API script into the <head/>.
 * And also renders the Youtube embed HTML and handles the state changes (Play/Stop/Pause).
 */
function AmpYoutubeEmbed(props: any) {
    let player: any;

    useEffect(() => {
        window.onYouTubeIframeAPIReady = () => {
            window.player = new YT.Player('player', {
                events: {
                    onReady: () => console.log,
                    onStateChange: onPlayerStateChange
                }
            });
        };
    });

    if (player && !YoutubeStore.getIsPlaying()) {
        player.cueVideoById({videoId: props.youtubeId});
    }

    const onPlayerStateChange = (event: any) => {
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

    return (
        useAmp() ? <amp-youtube data-videoid={props.youtubeId} layout="responsive" width="480" height="270"/> : (
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
                <iframe id="player" width="640" height="390" src={`https://www.youtube.com/embed/${props.youtubeId}?enablejsapi=1`} frameBorder="0"/>
            </div>
        </>)
    );
}

export default withAmp(AmpYoutubeEmbed, { hybrid: true });
