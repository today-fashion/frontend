import { ThemeButton } from "@/components/ThemeButton"
import { ErrorProps } from "@/utils/interfaces"
import { useRouter } from "next/router"
import styled from "styled-components"

export const ServerError = ({ title, desc, themeColor }: ErrorProps): JSX.Element => {
  const router = useRouter()
  return (
    <ErrorPage>
      <Error>
        <ErrorLogo>Error!</ErrorLogo>
        <ErrorTitle>{title}</ErrorTitle>
        <ErrorDesc>{desc}</ErrorDesc>
        <ErrorBtns>
          <ThemeButton 
            themeColor={themeColor} 
            active={false}
            fontSize={"18px"}
            fontWeight={600}
            width={"212px"}
            height={"54px"}
            onClick={() => router.back()}
          >
            이전 페이지
          </ThemeButton>          
          <ThemeButton
            themeColor={themeColor} 
            active={true}
            fontSize={"18px"}
            fontWeight={600}
            width={"212px"}
            height={"54px"}
            onClick={() => router.push("/")}
          >
            메인 페이지
          </ThemeButton>
        </ErrorBtns>
      </Error>
      <ErrorBtnsMobile>
        <ThemeButton
          themeColor={themeColor}
          active={false}
          fontSize={"16px"}
          fontWeight={600}
          width={"100%"}
          height={"56px"}
        >
          이전 페이지
        </ThemeButton>
        <ThemeButton
          themeColor={themeColor}
          active={true}
          fontSize={"16px"}
          fontWeight={600}
          width={"100%"}
          height={"56px"}
        >
          메인 페이지
        </ThemeButton>
      </ErrorBtnsMobile>
    </ErrorPage>
  )
}

const ErrorPage = styled.div `
  width: 100vw;
  height: 100vh;
  text-align: center;
`

const Error = styled.div `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const ErrorTitle = styled.h1 `
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`

const ErrorDesc = styled.p `
  font-size: 18px;
  margin-bottom: 80px;
`

const ErrorLogo = styled.h1 `
  font-size: 80px;
  font-style: italic;
`

const ErrorBtns = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    display: none;
    align-items:flex-end;
  }
`

const ErrorBtnsMobile = styled.div `
  display: none;
  @media screen and (max-width: 480px) {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;  
  }
`