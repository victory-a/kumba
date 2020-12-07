import React, { Fragment } from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { device } from "styles";
import { FullPageSpinner } from "components/loaders.js";
import { useUserData } from "contexts/UserContext";
import OrderItem from "components/OrderItem";
import rupieCurrency from "utils/rupieCurrency";
import pizza1 from "assets/pizza-1.jpg";
import pizza2 from "assets/pizza-2.jpg";
import pizza3 from "assets/pizza-3.jpg";
import pizza4 from "assets/pizza-4.jpg";

const Summary = () => {
  const { userData, state, loading } = useUserData();
  // const state = useUserData();
  const { order_id, restaurant } = userData;
  const { totalCost, totalTax, items } = state;
  console.log(items);

  // attached fake images
  const imageArray = [pizza1, pizza2, pizza3, pizza4];

  return (
    <Fragment>
      {loading ? (
        <FullPageSpinner />
      ) : (
        <>
          <Wrapper>
            {userData ? (
              <RestaurantDetails>
                <h1>{restaurant?.name}</h1>
                <p>{`${restaurant?.street}, ${restaurant?.city}, ${restaurant?.state}.`}</p>
                <p>Zipcode - {restaurant?.zipcode}</p>
              </RestaurantDetails>
            ) : null}
          </Wrapper>
          <OrderSection>
            <h2>{`Order (${order_id})`}</h2>
            {items
              ? items.map((item, index) => (
                  <OrderItem
                    item={{ ...item, image: imageArray[index] }}
                    key={`order-item-${index}`}
                  />
                ))
              : null}
            <span className="total-tax">
              <p>Total tax : </p>
              <p>{rupieCurrency(totalTax)}</p>
            </span>
          </OrderSection>
          <GrandTotal>
            <h4>Total</h4>
            <h4>{rupieCurrency(totalCost)}</h4>
          </GrandTotal>
        </>
      )}
    </Fragment>
  );
};

export default Summary;

const Wrapper = styled.main``;

const RestaurantDetails = styled.section`
  text-align: center;
  margin-top: 2rem;
  max-width: 65rem;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 30px;
    color: ${colors.red};
    margin-bottom: 0.5rem;

    @media ${device.tablet} {
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.6rem;
  }
`;

const OrderSection = styled.section`
  margin: 1rem auto;
  max-width: 65rem;
  padding: 0 1.5rem;

  h2 {
    font-size: 1.6rem;
    color: ${colors.black};
    font-weight: bold;
    margin: 1rem 0;
  }

  & > div:not(:last-of-type) {
    border-bottom: 1px dashed #e6e6e6;
  }

  & .total-tax {
    display: flex;
    justify-content: flex-end;
    font-size: 1.6rem;
    border-top: 1px solid #e6e6e6;
    padding-top: 1rem;

    p {
      padding: 0 1rem;

      &:first-of-type {
        margin-right: 30px;
      }

      &:last-of-type {
        color: #2c3345;
      }
    }
  }
`;

const GrandTotal = styled.div`
  width: 100%;
  max-width: 63rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  margin-bottom: 4rem;

  h4 {
    font-size: 1.8rem;
    font-weight: bold;
    padding: 0 1.5rem;

    &:first-of-type {
      margin-right: 15px;
    }

    &:last-of-type {
      color: #2c3345;
    }
  }
`;
