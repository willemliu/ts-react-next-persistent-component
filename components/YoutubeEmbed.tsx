import React, { PureComponent } from "react";

export default class YoutubeEmbed extends PureComponent<any, any> {
    render() {
        return (
            <>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Tyb47Bteohg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </>
        );
    }
}