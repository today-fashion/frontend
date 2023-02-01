import { ErrorProps } from "@/utils/interfaces"
import styled from "styled-components"

export const ServerError = ({ title, desc }: ErrorProps): JSX.Element => {
  return (
    <ErrorPage>
      <Error>
        <ErrorLogo>Error!</ErrorLogo>
        <ErrorTitle>{title}</ErrorTitle>
        <ErrorDesc>{desc}</ErrorDesc>
        
      </Error>
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
  font-size: 75px;
`

