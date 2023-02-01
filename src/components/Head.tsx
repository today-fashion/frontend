import NextHead from 'next/head';

export const Head = () => {
  return (
    <NextHead>
      <title>Today Fashion</title>
      <meta name="description" content="당신을 위한 패션 커뮤니티" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}