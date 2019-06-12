import React from "react";

function Article(props: any) {
    return (
        <>
            <h1>Article page develop</h1>
            <p>ID: {props.articleId}</p>
        </>
    );
}

Article.getInitialProps = async ({ req, query }: any) => {
    return {
        articleId: query.articleId,
        youtubeId: ''
    }
};

export default Article;
