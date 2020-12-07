import React from "react";
import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

import logo from "assets/logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="kumba logo" />
      </Link>

      <div className="links-wrapper">
        <Link to="/">
          <p>Profile</p>
        </Link>
        <Link to="/summary">
          <p>Summary</p>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 9rem;
  }

  & .links-wrapper {
    a {
      display: inline-block;
      color: ${colors.red};
      font-size: 1.7rem;
      font-weight: bold;

      &:first-of-type {
        margin-right: 2rem;
      }
    }

    @media ${device.tablet} {
      padding: 1rem 3rem;

      img {
        width: 12rem;
      }
    }
  }
`;
