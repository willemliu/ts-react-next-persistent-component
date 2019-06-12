import React from "react";
import Link from 'next/link';
import { withAmp, useAmp } from "next/amp";
import handleWebPush from "./WebPush";

/**
 * Header component contains description about this App and the navigation links.
 */
function Header() {

    return (
        <>
            <p>This is an example project showcasing the use of <a rel="noopener" href="https://nextjs.org/" target="_blank">Next.JS</a> to create a persistant player which survives navigation.</p>
            <p>Try it out by playing the video and then using the buttons to navigate to another page. The video should keep playing without interruptions.</p>
            <p>If the video is not started or is paused again you can navigate to another page then the video url is updated with the one corresponding to that page.</p>
            <p>The player state is being maintained using <a rel="noopener" href="https://github.com/Microsoft/ReSub" target="_blank">ReSub</a>.</p>
            <p>⚡AMP-ed version can be viewed by adding <i>?amp=1</i> to the end of the URL.</p>
            <p><button onClick={handleWebPush}>Web push</button></p>

            <div className="button-container">
                {useAmp() ?
                    <>
                        <a href="/?amp=1"><button>Home</button></a>
                        <a href="/page1?amp=1"><button>Page 1</button></a>
                        <a href="/page2?amp=1"><button>Page 2</button></a>
                    </> :
                    <>
                        <Link prefetch href="/">
                            <button>Home</button>
                        </Link>
                        <Link prefetch href="/page1">
                            <button>Page 1</button>
                        </Link>
                        <Link prefetch href="/page2">
                            <button>Page 2</button>
                        </Link>
                    </>
                }
            </div>

            <style jsx>{`
                .button-container {
                    display: flex;
                    justify-content: space-between;
                }
                button {
                    outline: none;
                    position: relative;
                    min-height: 2rem;
                    display: inline-block;
                    align-items: center;
                    vertical-align: middle;
                    font-size: 1rem;
                    line-height: 1;
                    color: #FFFFFF;
                    text-decoration: none;
                    cursor: pointer;
                    padding: 0 1rem;
                    border: none;
                    text-align: center;
                    background-color: #677381;
                    box-shadow: rgba(0, 0, 0, 0.2) 0px -2px 0px 0px inset;
                    border-radius: 2px;
                    transition: background-color .1s;
                    font-family: 'ProximaNovaBold', sans-serif;
                    font-weight: normal;
                }
                button:hover {
                    background-color: #2e3843;
                }
                button.m {
                    min-height: 2.5rem;
                }
                button.l {
                    font-size: 1.25rem;
                    padding: 0 1.5rem;
                    min-height: 3.5rem;
                }
                button:active {
                    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2) inset;
                }
            `}</style>
        </>
    );
}

export default withAmp(Header, { hybrid: true });
