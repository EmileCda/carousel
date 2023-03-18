import styled, { keyframes } from "styled-components";

/**
 * Container for the open menu
 */
export const SlideContainer = styled.div`
  min-width: 100vw;
  position: relative;
`;

const fade = keyframes`
  from {opacity: .0}
  to {opacity: 1}
`;

export const Slide = styled.div<{display:boolean}>`
  display: ${(props) => (props.display ? "block" : "none")};
  animation: ${fade} 1s;
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 2rem;
  font-size: 0.7rem;
  color: aliceblue;
`;

