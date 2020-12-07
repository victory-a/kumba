import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { QuantityButton } from "components/Button";
import rupieCurrency from "utils/rupieCurrency";
import summaryActions from "contexts/summaryActions";
import { useUserData } from "contexts/UserContext";

const OrderItem = ({ item }) => {
  const { image, name, category, quantity, price} = item;

  const { dispatch } = useUserData();

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
            <button
              className="selector"
              onClick={() =>
                dispatch({
                  type: summaryActions.DECREASE,
                  payload: { id: item.id }
                })
              }
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              className="selector"
              onClick={() =>
                dispatch({
                  type: summaryActions.INCREASE,
                  payload: { id: item.id }
                })
              }
            >
              +
            </button>
          </QuantityButton>
        </div>

        <p className="total">{rupieCurrency(price)}</p>
      </div>

      <p className="sub-total">
        subtotal: <span>{rupieCurrency(price * quantity)}</span>
      </p>
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

    margin-right: 1rem;

    span {
      margin-left: 5px;
      color: #2c3345;
      font-weight: 600;
      font-size: 16px;
    }
  }
`;
