import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Log } from '../utils/log';
import { getClient, getIsServer } from '../utils/app';

export const config = {
    amp: 'hybrid',
};

export default function Article(props: any) {
    useEffect(() => {
        // Log.info({client: getClient(), view: 'article', articleId: props.articleId});
    });

    return (
        <>
            <Head>
                <title>
                    BNR Article {props.articleId}- persistent component
                </title>
            </Head>
            <Header />
            <div className="body">
                <h1>Article page</h1>
                {props.articleId ? <p>ID: {props.articleId}</p> : null}
                {props.section ? <p>SECTION: {props.section}</p> : null}
                {props.title ? <p>TITLE: {props.title}</p> : null}
            </div>
        </>
    );
}

Article.getInitialProps = async ({ query }: any) => {
    Log.info({
        client: getClient(),
        view: 'article',
        server: getIsServer(),
        articleId: query.articleId,
    });

    return {
        articleId: query.articleId,
        section: query.section,
        title: query.title,
    };
};
