import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import YoutubeStore, { YoutubeState } from '../stores/YoutubeStore';
import { ComponentBase } from 'resub';
import { setClient, getClient } from '../utils/app';
import { createGlobalStyle } from 'styled-components';
import { Log } from '../utils/log';

declare var process: any;

export default class AppContainer extends ComponentBase<any, YoutubeState> {
    state: any = { youtubeId: '' };
    private isBrowser = !!process.browser; // We should use props when rendered on server. Use state when rendered in client.

    constructor(props: any) {
        super(props);
        if (this.isBrowser) {
            if (window.location.search.indexOf('isPwa=true') > -1) {
                setClient('PWA');
            }
        }
    }

    changeYoutubeId = (youtubeId: string) => {
        Log.info({
            client: getClient(),
            newYoutubeId: youtubeId,
            oldYoutubeId: this.state.youtubeId,
        });
        YoutubeStore.setYoutubeId(youtubeId);
    };

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <GlobalStyle />
                <Component
                    {...pageProps}
                    isPlaying={this.state.isPlaying ? true : false}
                    activeYoutubeId={
                        this.state.youtubeId ? this.state.youtubeId : null
                    }
                    onYoutubeIdChange={this.changeYoutubeId}
                />
                <YoutubeEmbed
                    youtubeId={
                        this.isBrowser
                            ? this.state.youtubeId
                            : pageProps.youtubeId
                    }
                />
            </>
        );
    }

    protected _buildState(props: any, initialBuild: boolean): YoutubeState {
        this.isBrowser = initialBuild ? this.state.useState : true;
        return {
            initialYoutubeId: '',
            youtubeId: YoutubeStore.getYoutubeId(),
            isPlaying: YoutubeStore.getIsPlaying(),
        };
    }
}

const GlobalStyle = createGlobalStyle`
    html {
        align-items: center;
    }   
    html, body {
        display: flex;
        justify-content: space-around;
        overscroll-behavior: contain;
        flex-direction: column;
    }
    body {
        margin: 0;
        @media only screen and (min-width: 861px) {
            max-width: 800px;
        }
        @media only screen and (min-width: 1280px) {
            max-width: 1024px;
        }
        a {
            cursor: pointer;
            text-decoration: underline;
        }
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
        &:hover {
            background-color: #2e3843;
        }
        box-shadow: rgba(0, 0, 0, 0.2) 0px -2px 0px 0px inset;
        border-radius: 2px;
        transition: background-color .1s;
        font-family: 'ProximaNovaBold', sans-serif;
        font-weight: normal;
        &.m {
            min-height: 2.5rem;
        }
        &.l {
            font-size: 1.25rem;
            padding: 0 1.5rem;
            min-height: 3.5rem;
        }
        &:active {
            box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2) inset;
        }
    }

    .iframe-container {
        overflow: hidden;
        padding-top: 56.25%;
        position: relative;
        iframe {
            border: 0;
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
        }
    }
`;
