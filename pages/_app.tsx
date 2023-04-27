import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import network from "../utils/network";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
        <Component {...pageProps} />
      </ThirdwebProvider>
      <ToastContainer />
    </>
  );
}
