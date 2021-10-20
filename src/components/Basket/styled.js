import styled, { css } from "styled-components";

export const BasketContainer = styled.div(({ imageStyle }) => {
  return css`
    position: relative;
    display: flex;
    width: 200px;
    height: 200px;
  `;
});

export const BasketImage = styled.img(
  () => css`
    width: 250px;
    height: 150px;
  `
);
