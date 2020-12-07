import styled from "styled-components";
import colors from "styles/colors";
import { device } from "styles";

const Button = styled.button`
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.battleShipGreen};
  outline: none;
  border: 0px;
  font-weight: Bold;
  font-size: 1.4rem;
  transition: background-color 0.4s ease;
  border-radius: 2.5px;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  & svg {
    margin-right: 4px;
    font-size: 18px;
  }

  @media ${device.tablet} {
    height: 4rem;
  }

  &:hover {
    background-color: ${colors.battleShipGreenHover};
  }
`;

export const QuantityButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  min-width: 60px;
  margin-right: 1rem;
  margin-top: 1rem;

  & > button.selector {
    color: #fff;
    background: transparent;
    min-height: 30px;
    width: 30%;
  }

  & > p {
    font-size: 0.825rem;
    text-align: center;
  }
`;

export default Button;
