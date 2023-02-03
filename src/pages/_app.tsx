import { ServerError } from '@/components/Error';
import { Head } from '@/components/Head';
import { Loading } from '@/components/Loading';
import { fetcher } from '@/utils/fetcher';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useSWR from 'swr';

import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/globals';
import { useEffect, useReducer } from 'react';
import { themeReducer } from '@/modules/themeReducer';
import { ThemeChanger } from '@/components/ThemeChanger';
import { getCookie } from '@/utils/cookies';

export default function App({ Component, pageProps }: AppProps) {
  const [event, updateEvent] = useReducer(themeReducer, { theme: false })
  useEffect(() => {
    const prefers = window.matchMedia('(prefers-color-scheme: Light)').matches
    const Theme = getCookie("Theme")
    if (!Theme || (Theme !== "Light" && Theme !== "Dark")) updateEvent({ type: (prefers ? "Light" : "Dark")})
    else {
      if (Theme === "Light") updateEvent({ type: "Light" })
      else updateEvent({ type: "Dark" })
    }
  }, [])
  const { data, error } = useSWR('/api/userCheck', fetcher)

  if (!data) {
    <ThemeProvider theme={event.theme ? theme.lightTheme : theme.darkTheme}>
      <>
        <Head />
        <ThemeChanger themeColor={event.theme} onClick={() => updateEvent({ type: "diff" })} />
        <Loading status={true} themeColor={event.theme} />
      </>
    </ThemeProvider>
  } else {
    return (
      <ThemeProvider theme={event.theme ? theme.lightTheme : theme.darkTheme}>
        <>
          <GlobalStyle />
          <Head />
          <ThemeChanger themeColor={event.theme} onClick={() => updateEvent({ type: "diff" })} />
          <Loading status={false} themeColor={event.theme} />
          {!error && data && data.body.success ?
            <Component {...pageProps} themeColor={event.theme} /> 
          :
            <ServerError title='서버가 응답하지 않습니다.' desc='인터넷 상태를 확인해주세요!' themeColor={event.theme} />
          } 
        </>
      </ThemeProvider>
    )
  }

}
