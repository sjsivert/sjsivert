import getYouTubeId from "get-youtube-id";
import React from "react";
import { ImYoutube2 } from "react-icons/im";
import YouTube from "react-youtube";

const Preview = ({ value }) => {
    const { url } = value;
    const id = getYouTubeId(url);
    return <YouTube videoId={id} />;
};

export default {
    type: "object",
    title: "YouTube",
    name: "youtube",
    icon: ImYoutube2,
    fields: [
        {
            name: "title",
            title: "Video title",
            type: "string",
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
            name: "url",
            title: "YouTube video url",
            type: "string",
            description:
                "Paste the url from the youtube video you want to embed (https://www.youtube.com/watch?v=XXXXXXXXXXX)",
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
    ],
    preview: {
        select: {
            url: "url",
        },
        component: Preview,
    },
};
