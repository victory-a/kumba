import React from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const { Provider } = UserContext;
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return <Provider value={{ userData, setUserData, loading, setLoading }}>{children}</Provider>;
};

export default UserProvider;

// custom hook for accessing user data
export const useUserData = () => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("useUserData must be used within a CartProvider");
  }

  return context;
};
