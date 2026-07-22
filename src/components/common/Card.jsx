import { css } from "styled-components";

export const cardStyles = css`
  background: rgba(25, 55, 109, 0.18);
  border: 1px solid rgba(87, 108, 188, 0.25);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: .3s;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(87, 108, 188, 0.7);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  }
`;