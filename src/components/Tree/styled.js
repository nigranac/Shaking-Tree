import styled, {css} from "styled-components";

export const TreeContainer = styled.div(
    () => css`
    position: relative;
    z-index: 1;
    width:500px;
    height:500px;
    margin:0 auto;
  `
);
export const TreeImage = styled.img(
    ({shakingTree}) => css`
    width: 500px;
    height: 500px;
    ${
        shakingTree &&
        css`
        animation: animasyonAdi 3s ease-in;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
        @keyframes animasyonAdi {
          10%,
          90% {
            transform: translate3d(-1px, 0, 0);
          }

          20%,
          80% {
            transform: translate3d(10px, 0, 0);
          }

          30%,
          50%,
          70% {
            transform: translate3d(-10px, 0, 0);
          }

          40%,
          60% {
            transform: translate3d(10px, 0, 0);
          }
        }
      `
    }
    }
  `
);
