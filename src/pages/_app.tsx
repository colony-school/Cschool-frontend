import "../styles/base/reset.scss";
import "../styles/base/global.scss";
import type { AppProps } from 'next/app';

function App({ Component, pageProps }:AppProps) {
    return <Component {...pageProps} />;
}
export default App;
