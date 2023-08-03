import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider, Hydrate} from "@tanstack/react-query";
import {useState} from "react";
import {RecoilRoot} from "recoil";
import "@/basic.css";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
      <RecoilRoot>
          <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                  <Component {...pageProps} />
              </Hydrate>
          </QueryClientProvider>
      </RecoilRoot>
  )
}
