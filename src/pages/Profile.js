import React, { Fragment } from "react";
import styled from "styled-components";
import colors from "styles/colors";
import avatar from "assets/useravi.jpg";
import { useUserData } from "contexts/UserContext";
import { FullPageSpinner } from "components/loaders.js";
import { device } from "styles";

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

            <div className="preference-group">
              <h2>Address</h2>
              <p>{user?.address}</p>
            </div>

            <div className="preference-group">
              <h2>Mobile</h2>
              <p>{user?.phone}</p>
            </div>

            <div className="preference-group">
              <h2>Likes</h2>
              <ul>
                {user?.likes
                  ? user.likes.map((like, index) => <li key={`user-like-${index}`}>{like}</li>)
                  : null}
              </ul>
            </div>

            <div className="preference-group">
              <h2>Dislikes</h2>
              <ul>
                {user?.dislikes
                  ? user.likes.map((like, index) => <li key={`user-like-${index}`}>{like}</li>)
                  : null}
              </ul>
            </div>
          </TextContainer>
        </Wrapper>
      )}
    </Fragment>
  );
};

export default Profile;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 0;
  align-items: center;

  & > img {
    max-width: 20rem;
    height: 20rem;
    border-radius: 50%;
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;

    & > img {
      max-width: 40rem;
      min-height: 40rem;
      border-radius: 5px;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
  padding: 2.5rem;
  font-size: 1.7rem;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${colors.red};

    @media ${device.tablet} {
      font-size: 4rem;
    }
  }

  & svg {
    margin-right: 1rem;
    color: ${colors.red};
    vertical-align: middle;
  }

  & .preference-group {
    font-size: 1.7rem;
    margin: 10px 0;

    h2 {
      font-size: 1.7rem;
      color: ${colors.red};
    }

    p {
      font-weight: bold;
    }

    ul {
      display: flex;
      justify-content: center;
    }

    & li:not(:last-of-type) {
      margin-right: 10px;
    }

    @media ${device.tablet} {
    }
  }

  & .property {
    color: ${colors.red};
    font-weight: bold;
  }
`;
