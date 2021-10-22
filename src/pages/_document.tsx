import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class CSKDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render(): JSX.Element {
        return (
            <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter&family=Kanit:wght@300&family=Prompt&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        );
    }
}

export default CSKDocument;