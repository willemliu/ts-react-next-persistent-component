import React from "react";
import Link from "next/link";
import { withAmp, useAmp } from "next/amp";
import handleWebPush from "./WebPush";
import styled from "styled-components";

/**
 * Header component contains description about this App and the navigation links.
 */
function Header() {
    return (
        <>
            <p>
                {process.env.ENVIRONMENT} This is an example project showcasing
                the use of{" "}
                <a rel="noopener" href="https://nextjs.org/" target="_blank">
                    Next.JS
                </a>{" "}
                to create a persistant player which survives navigation.
            </p>
            <p>
                Try it out by playing the video and then using the buttons to
                navigate to another page. The video should keep playing without
                interruptions. Navigating to another page while the video is
                paused or ended will update the video.
            </p>
            <p>
                The player state is being maintained using{" "}
                <a
                    rel="noopener"
                    href="https://github.com/Microsoft/ReSub"
                    target="_blank"
                >
                    ReSub
                </a>
                .
            </p>
            <p>
                Styling done using{" "}
                <a
                    rel="noopener"
                    href="https://www.styled-components.com"
                    target="_blank"
                >
                    styled-components
                </a>
                .
            </p>
            <p>
                ⚡AMP-ed version can be viewed by adding <i>?amp=1</i> to the
                end of the URL.
            </p>
            <p>
                <button onClick={handleWebPush}>Web push</button>
            </p>

            <ButtonContainer>
                {useAmp() ? (
                    <>
                        <a href="/?amp=1">
                            <button>Home</button>
                        </a>
                        <a href="/page1?amp=1">
                            <button>Page 1</button>
                        </a>
                        <a href="/page2?amp=1">
                            <button>Page 2</button>
                        </a>
                        <a href="/section?amp=1">
                            <button>Section</button>
                        </a>
                    </>
                ) : (
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
                        <Link prefetch href="/section">
                            <button>Section</button>
                        </Link>
                    </>
                )}
            </ButtonContainer>
        </>
    );
}

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default withAmp(Header, { hybrid: true });
