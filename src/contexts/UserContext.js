import React from "react";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const { Provider } = UserContext;
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return <Provider value={{ userData, setUserData, loading, setLoading }}>{children}</Provider>;
};

export default  UserProvider;