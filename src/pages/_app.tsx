// External modules import
import type { AppProps } from "next/app";

// Internal modules import
import { Layout } from "../components/global/layout";

// Style sheets import
import "../styles/base/global.scss";
import "../styles/base/reset.scss";

// Main component
function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

// Exports
export default App;
