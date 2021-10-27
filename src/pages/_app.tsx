// External modules import
import type { AppProps } from "next/app";
import { NextSeo } from 'next-seo';

// Internal modules import
import { Layout } from "../components/global/layout";

// Style sheets import
import "../styles/base/global.scss";
import "../styles/base/reset.scss";


// Main component
function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextSeo
                title="Colony-School"
                description="Everything about Anything"
                canonical="school.colony.center"
                // openGraph={{
                //     url: 'https://www.colony.heh',
                //     title: 'Colony-School',
                //     description: 'Everything about Anything',
                //     images: [
                //       {
                //         url: 'picture',
                //         width: 800,
                //         height: 600,
                //         alt: 'logo',
                //         type: 'image/jpeg',
                //       },
                // }}
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

// Exports
export default App;
