import { ServerError } from '@/components/Error';
import { Head } from '@/components/Head';
import { Loading } from '@/components/Loading';
import { fetcher } from '@/utils/fetcher';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useSWR from 'swr';

import { lightTheme, darkTheme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/globals';
import { useReducer } from 'react';
import { themeReducer } from '@/modules/themeReducer';

export default function App({ Component, pageProps }: AppProps) {

  const [event, updateEvent] = useReducer(themeReducer, { theme: false })
  const { data, error } = useSWR('/api/userCheck', fetcher)

  return (
    <ThemeProvider theme={event.theme ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Head />
        <Loading status={error ? false : !data ? true : false} themeColor={event.theme ? true : false} />
        {!error && data ?
          <Component {...pageProps} /> 
        :
          <ServerError title='서버가 응답하지 않습니다.' desc='인터넷 상태를 확인해주세요!' />
        } 
      </>
    </ThemeProvider>
  )
}
