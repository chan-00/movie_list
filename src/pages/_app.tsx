import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider, Hydrate} from "@tanstack/react-query";
import {useState} from "react";
import {RecoilRoot} from "recoil";
import "@/basic.css";
// import Component
import { Header } from "@/component/organism/header";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
      <RecoilRoot>
          <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                  <Header title={"Movie Search"}
                          itemArray={["메뉴1", "메뉴2", "메뉴3", "메뉴4"]}/>
                  <Component {...pageProps} />
              </Hydrate>
          </QueryClientProvider>
      </RecoilRoot>
  )
}
