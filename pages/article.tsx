import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Log } from "../utils/log";
import { getClient } from "../utils/app";

function Article(props: any) {
    Log.info({client: getClient(), view: 'article', articleId: props.articleId});

    return (
        <>
            <Head>
                <title>BNR Article {props.articleId}- persistent component</title>
            </Head>
            <Header/>
            <div className="body">
                <h1>Article page</h1>
                <p>ID: {props.articleId}</p>
            </div>
        </>
    );
}

Article.getInitialProps = async ({ query }: any) => {
    return {
        articleId: query.articleId
    };
};

export default Article;
