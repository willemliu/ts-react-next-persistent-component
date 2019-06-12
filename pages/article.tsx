import React from "react";
import Head from "next/head";
import Header from "../components/Header";

function Article(props: any) {
    return (
        <>
            <Head>
                <title>BNR Article {props.articleId}- persistent component</title>
            </Head>
            <Header/>
            <div className="body">
                <h1>Article page develop</h1>
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
