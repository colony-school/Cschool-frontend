// External modules import
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

// Internal modules import
import { Layout } from "../components/global/layout";

// Style sheets import
import "../styles/base/global.scss";
import "../styles/base/reset.scss";

// Main component
function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <AnimatePresence
            exitBeforeEnter
            initial={false}
            // onExitComplete={() => window.scrollTo(0, 0)}
        >
            <Layout key={router.route}>
                <Component {...pageProps} />
            </Layout>
        </AnimatePresence>
    );
}

// Exports
export default App;