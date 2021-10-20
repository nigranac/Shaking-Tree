import styled, { css } from "styled-components";

export const AppleContainer = styled.div(({ imageStyle, index }) => {
  return css`
    position: absolute;
    top: ${imageStyle.didFall ? "20%" : imageStyle.coordY};
    left: ${imageStyle.coordX};

    ${imageStyle.falling &&
    !imageStyle.didFall &&
    css`
        z-index:99999;
        animation: fallingApples 0.5s linear forwards;
        animation-delay: 0.${index + 3}s;
        @keyframes fallingApples {
          from {
            opacity: 0.4;
            top:${imageStyle.coordY};  
          }
          to {
            opacity: 1;
            top:500px;
          }
          ${
            imageStyle.didFall &&
            css`
              z-index: 99999;
              animation: none !important;
              top: 0;
            `
          }
        `}
  `;
});
export const AppleImage = styled.img(
  ({ fallApple, shakingApples, falling }) => {
    return css`
      width: 25px;
      height: 25px;
      ${shakingApples &&
      css`
        animation: shakingApples 2s ease-in;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
        @keyframes shakingApples {
          10%,
          90% {
            transform: translate3d(-1px, 0, 0);
          }
          20%,
          80% {
            transform: translate3d(2px, 0, 0);
          }
          30%,
          50%,
          70% {
            transform: translate3d(-2px, 0, 0);
          }
          40%,
          60% {
            transform: translate3d(2px, 0, 0);
          }
        }
      `}
      ${falling &&
      css`
        z-index: 99999;
        ${fallApple &&
        css`
          z-index: 99999;
          animation: none;
        `}
      `}
    `;
  }
);
