import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { QuantityButton } from "components/Button";
import rupieCurrency from "utils/rupieCurrency";

const OrderItem = ({ image, name, category, quantity = 0, total = 0.0, subtotal = 0.0 }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="img-wrapper">
          <img src={image} alt="order item" />
        </div>

        <div className="order-info">
          <h3>{name}</h3>
          <p>{category}</p>
          <QuantityButton>
            <button className="selector" onClick={() => console.log("increase")}>
              -
            </button>
            <p>{quantity}</p>
            <button className="selector" onClick={() => console.log("decrease")}>
              +
            </button>
          </QuantityButton>
        </div>

        <p className="total">{rupieCurrency(total)}</p>
      </div>

      <p className="sub-total">{`Item subtotal: ${rupieCurrency(subtotal)}`}</p>
    </Wrapper>
  );
};

export default OrderItem;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;

  & .container {
    display: flex;
  }

  & .img-wrapper {
    width: 75px;
    height: 75px;
    padding: 0.5rem;
    border-radius: 3px;
    margin-right: 2rem;
    border: 1px solid #e6e6e6;

    img {
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }

  & .order-info {
    h3 {
      color: ${colors.red};
      font-size: 16px;
      font-weight: bold;
      line-height: 13px;
    }

    p {
      font-size: 14px;
    }
  }

  & p.total {
    font-size: 14px;
    color: ${colors.white};
    font-weight: 600;
    margin-left: auto;
    margin-right: 1rem;
  }

  & p.sub-total {
    font-size: 14px;
    color: ${colors.white};
    text-align: right;
    font-weight: 600;
    /* margin-left: auto; */
    margin-right: 1rem;
  }
`;
