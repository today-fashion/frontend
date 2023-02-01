import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    z-index: 0;
  }

  100% {
    opacity: 1;
    z-index: 9999;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
    z-index: 9999;
  }

  100% {
    opacity: 0;
    z-index: -9999;
  }
`