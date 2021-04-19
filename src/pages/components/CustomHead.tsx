import * as React from 'react';
import Head from "next/head";

interface CustomHeadProps {
    title: string;
    description: string;
    ogType: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogUrl: string;
    ogSiteName: string;
}

const CustomHead: React.FunctionComponent<CustomHeadProps> = ({
    description,
    title,
    ogType,
    ogDescription,
    ogImage,
    ogSiteName,
    ogTitle,
    ogUrl,
}) => {
    return (
        <Head>
            {/** 50 - 60 characters for the main part... */}
            <title>{title}</title>

            {/** 150 characters for the description, eye cachy call to action*/}
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

            {/** Social Media Display SERP*/}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:site_name" content={ogSiteName} />

            <meta name="twitter:card" content="summary_large_image" />

            <link rel="preload" href="./public/fonts/inter/Inter-Regular.ttf" as="font" crossOrigin="" />
            <link rel="preload" href="./public/fonts/inter/Inter-Medium.ttf" as="font" crossOrigin="" />
            <link rel="preload" href="./public/fonts/inter/Inter-Bold.ttf" as="font" crossOrigin="" />   
            <link rel="preload" href="./public/fonts/inter/Inter-Black.ttf" as="font" crossOrigin="" />
        </Head>
    );
};

export default CustomHead;
