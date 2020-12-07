import React, { Fragment } from "react";
import styled from "styled-components";
import colors from "styles/colors";
import avatar from "assets/useravi.jpg";
import { useUserData } from "contexts/UserContext";
import { FullPageSpinner } from "components/loaders.js";

const Profile = () => {
  const { userData, loading } = useUserData();
  const { user } = userData ?? {};

  return (
    <Fragment>
      {loading ? (
        <FullPageSpinner />
      ) : (
        <Wrapper>
          <img src={avatar} alt="users avatar" />
          <TextContainer>
            <h1>{user?.name}</h1>
            <p className="bio">{user?.about}</p>
          </TextContainer>
        </Wrapper>
      )}
    </Fragment>
  );
};

export default Profile;

const Wrapper = styled.main`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  /* justify-content: center; */
  border: 1px solid red;

  & > img {
    max-width: 38rem;
    height: 38rem;
    border-radius: 5px;
  }
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.5rem;
  /* align-items: center; */

  h1 {
      font-size: 3.5rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-align: center;
  }

  & .bio {
    font-size: 1.6rem;
    margin-top: 1rem;

  }
`;
