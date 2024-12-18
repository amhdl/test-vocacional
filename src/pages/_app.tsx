import '../index.css'; // Estilos globales
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


function MyApp({ Component, pageProps }: any) {
    return <Component {...pageProps} />;
}

export default MyApp;
