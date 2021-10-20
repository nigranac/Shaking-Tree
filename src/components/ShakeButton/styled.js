import styled, { css } from "styled-components";

export const SmallTreeImage = styled.img(
  ({ shakingTree }) => css`
    width: 20px;
    ${
      shakingTree &&
      css`
        animation: miniTreeshaking 3s ease-in;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
        @keyframes miniTreeshaking {
          10%,
          90% {
            transform: translate3d(-1px, 0, 0);
          }

          20%,
          80% {
            transform: translate3d(3px, 0, 0);
          }

          30%,
          50%,
          70% {
            transform: translate3d(-3px, 0, 0);
          }

          40%,
          60% {
            transform: translate3d(3px, 0, 0);
          }
        }
      `
    }
    }
  `
);

export const TreeShakingButton = styled.button(() => {
  return css`
    font-weight: 700;
    font-size: 20px;
    z-index: 2;
    color: #1a510e;
    border: 0;
transparent;
    position: absolute;
    right: 40px;
    top: 40px;
    background: transparent;
    transition: all 300ms;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      border-bottom: 3px solid #5f6caf;
    }
    &:disabled {
      border-bottom: none;
      color: white;
      cursor:default
    }
  `;
});
