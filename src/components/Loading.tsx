import { fadeIn, fadeOut } from '@/styles/fade';
import { LoadProps } from '@/utils/interfaces';
import styled from 'styled-components';

export const Loading = ({ status }: LoadProps): JSX.Element => {
  return (
    <LoadingPage status={status}>
      <i>
        <TodayFashion>Today-Fasion</TodayFashion>
      </i>
    </LoadingPage>
  )
}

const LoadingPage = styled.div `
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  animation ${(props: LoadProps) => (props.status ? fadeIn : fadeOut)} .75s forwards;
`

const TodayFashion = styled.h1 `
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
`