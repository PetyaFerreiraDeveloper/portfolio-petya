import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

import Layout from "@/layout/Layout";
import { MyThemeContextProvider } from "@/context/myThemeContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyThemeContextProvider>
       <Layout> 
        {" "}
        <style jsx global>{`
          html {
            font-family: ${montserrat.style.fontFamily};
          }
        `}</style> 
        <Component {...pageProps} />
      </Layout> 
    </MyThemeContextProvider>
  );
}
