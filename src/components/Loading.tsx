import { fadeIn, fadeOut } from '@/styles/fade';
import { LoadProps } from '@/utils/interfaces';
import styled from 'styled-components';

export const Loading = ({ status, themeColor }: LoadProps): JSX.Element => {
  return (
    <LoadingPage status={status} themeColor={themeColor}>
        <TodayFashion>
          <i>
            Today-Fasion
          </i>
        </TodayFashion>
    </LoadingPage>
  )
}

const LoadingPage = styled.div `
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: ${(props: LoadProps) => (props.themeColor ? "#fff" : "#242424")};
  color: ${(props: LoadProps) => (props.themeColor ? "#242424" : "#fff")};
  animation ${(props: LoadProps) => (props.status ? fadeIn : fadeOut)} .75s forwards;
`

const TodayFashion = styled.h1 `
  position: absolute;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
`