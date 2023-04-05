import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { appWithTranslation } from "next-i18next";
import { Nunito } from "@next/font/google";

const customFont = Nunito({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <Layout className={customFont.className}>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(App);
