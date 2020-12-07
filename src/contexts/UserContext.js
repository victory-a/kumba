import React from "react";
import summaryReducer from "./summaryReducer";
import computeTotal from "./computeTotal";

export const userContext = React.createContext();

const UserProvider = ({ children }) => {
  const { Provider } = userContext;
  const [userData, setUserData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // const items = userData?.items;

  const initialState = {
    items: userData?.items,
    totalCost: computeTotal(userData?.items).totalCost,
    totalTax: computeTotal(userData?.items).totalTax
  };

  const [state, dispatch] = React.useReducer(summaryReducer, initialState);

  return <Provider value={{ userData, setUserData, state, dispatch, loading, setLoading }}>{children}</Provider>;
};

export default UserProvider;

// custom hook for accessing user data
export const useUserData = () => {
  const context = React.useContext(userContext);

  if (!context) {
    throw new Error("useUserData must be used within a CartProvider");
  }

  return context;
};
