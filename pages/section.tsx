import React, { useEffect } from 'react';
import Teaser from '@fdmg/fd-teaser';
import SquareTeaser from '@fdmg/fd-square-teaser';
import OpeningTeaser from '@fdmg/fd-opening-teaser';
import styled, { createGlobalStyle } from 'styled-components';
import Router from 'next/router';
import Link from 'next/link';
import { Log } from '../utils/log';
import { getClient, getIsServer } from '../utils/app';
import fetch from 'isomorphic-unfetch';
import pathToRegexp from 'path-to-regexp';

export const config = {
    amp: 'hybrid',
};

export default function Section(props: any) {
    useEffect(() => {
        // Log.info({client: getClient(), view: 'section'});
        [].slice
            .call(document.querySelectorAll('[href]'))
            .forEach((link: HTMLAnchorElement) => {
                link.addEventListener('click', (e: any) => {
                    e.preventDefault();
                    if (e.currentTarget) {
                        const href =
                            e.currentTarget.getAttribute('href') || '/';
                        Log.info({ client: getClient(), href });
                        /**
                         * Make sure we're navigating to a relative URL.
                         */
                        const keys: pathToRegexp.Key[] = [];
                        const regexp = pathToRegexp(
                            '/:section/:articleId(\\d+)/:title(.*)',
                            keys
                        );
                        const match = regexp.exec(href);
                        if (match) {
                            // Create a mapping of keys to values
                            const map: any = keys.reduce(
                                (acc, key, i) => ({
                                    [key.name]: match[i + 1],
                                    ...acc,
                                }),
                                {}
                            );
                            Router.push(
                                `/article?articleId=${map.articleId}&section=${map.section}&title=${map.title}`,
                                href
                            );
                        } else {
                            Router.push(href);
                        }
                    }
                });
            });
    });

    return (
        <StyledSection>
            <GlobalStyle />
            <main>
                {props.teasers.length ? (
                    <OpeningTeaser
                        key={props.teasers[0].show.id}
                        id={props.teasers[0].show.id}
                        baseUrl=""
                        alt={props.teasers[0].show.name}
                        title={props.teasers[0].show.name}
                        description={props.teasers[0].show.summary}
                        date={props.teasers[0].show.permiered}
                        readableAge={props.teasers[0].show.runtime}
                        subject={props.teasers[0].show.type}
                        cardStyle={'default'}
                        image={{
                            src: props.teasers[0].show.image.medium.replace(
                                'http:',
                                'https:'
                            ),
                            alt: props.teasers[0].show.name,
                        }}
                        sourceSets={[
                            {
                                media: '(max-width: 640px)',
                                srcSet: props.teasers[0].show.image.medium.replace(
                                    'http:',
                                    'https:'
                                ),
                            },
                            {
                                media: '(max-width: 860px)',
                                srcSet: props.teasers[0].show.image.medium.replace(
                                    'http:',
                                    'https:'
                                ),
                            },
                            {
                                media: '(min-width: 861px)',
                                srcSet: props.teasers[0].show.image.original.replace(
                                    'http:',
                                    'https:'
                                ),
                            },
                        ]}
                        url={props.teasers[0].show.url.replace(
                            'http://www.tvmaze.com',
                            ''
                        )}
                    />
                ) : null}

                {props.teasers.map((teaser: any, idx: number) => {
                    if (idx === 0) return null;
                    return (
                        <Teaser
                            key={teaser.show.id}
                            id={teaser.show.id}
                            baseUrl=""
                            title={teaser.show.name}
                            description={teaser.show.summary}
                            date={teaser.show.permiered}
                            readableAge={teaser.show.runtime}
                            subject={teaser.show.type}
                            cardStyle={'default'}
                            image={{
                                src: teaser.show.image.medium.replace(
                                    'http:',
                                    'https:'
                                ),
                                alt: teaser.show.name,
                            }}
                            sourceSets={[
                                {
                                    media: '(max-width: 640px)',
                                    srcSet: teaser.show.image.medium.replace(
                                        'http:',
                                        'https:'
                                    ),
                                },
                                {
                                    media: '(max-width: 860px)',
                                    srcSet: teaser.show.image.medium.replace(
                                        'http:',
                                        'https:'
                                    ),
                                },
                                {
                                    media: '(min-width: 861px)',
                                    srcSet: teaser.show.image.original.replace(
                                        'http:',
                                        'https:'
                                    ),
                                },
                            ]}
                            url={teaser.show.url.replace(
                                'http://www.tvmaze.com',
                                ''
                            )}
                        />
                    );
                })}
            </main>
            <aside>
                {props.teasers.map((teaser: any, idx: number) => {
                    if (idx === 0) return null;
                    return (
                        <SquareTeaser
                            key={teaser.show.id}
                            id={teaser.show.id}
                            baseUrl=""
                            title={teaser.show.name}
                            description={teaser.show.summary}
                            date={teaser.show.permiered}
                            readableAge={teaser.show.runtime}
                            subject={teaser.show.type}
                            cardStyle={'default'}
                            image={{
                                src: teaser.show.image.medium.replace(
                                    'http:',
                                    'https:'
                                ),
                                alt: teaser.show.name,
                            }}
                            sourceSets={[
                                {
                                    media: '(max-width: 640px)',
                                    srcSet: teaser.show.image.medium.replace(
                                        'http:',
                                        'https:'
                                    ),
                                },
                                {
                                    media: '(max-width: 860px)',
                                    srcSet: teaser.show.image.medium.replace(
                                        'http:',
                                        'https:'
                                    ),
                                },
                                {
                                    media: '(min-width: 861px)',
                                    srcSet: teaser.show.image.original.replace(
                                        'http:',
                                        'https:'
                                    ),
                                },
                            ]}
                            url={teaser.show.url.replace(
                                'http://www.tvmaze.com',
                                ''
                            )}
                        />
                    );
                })}

                <Link
                    prefetch
                    as="/beurs/1286450/analisten-twijfelen-aan-renteverhoging-ecb"
                    href="/article?articleId=1286450"
                >
                    <button>Article 1286450</button>
                </Link>
            </aside>
        </StyledSection>
    );
}

Section.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const teasers = await res.json();
    Log.info({ client: getClient(), view: 'section', server: getIsServer() });
    return { teasers };
};

const GlobalStyle = createGlobalStyle`
html {
    background-color: #f1ded0;
}
`;

const StyledSection = styled.div`
    display: flex;

    .fd-card {
        margin-bottom: 1rem;
    }
    main {
        flex: 1 1 auto;
        margin-right: 1rem;
    }
    aside {
        flex: 0 0 300px;
    }
`;
