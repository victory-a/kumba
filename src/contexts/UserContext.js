import React from "react";
import summaryReducer from "./summaryReducer";
// import computeTotal from "./computeTotal";

export const userContext = React.createContext();

const UserProvider = ({ children }) => {
  const { Provider } = userContext;
  const [userData, setUserData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // const items = userData?.items;
  function computeTotal(items) {
    console.log(items?.length);
    
    if (items?.length) {
      const totalCost = items.reduce((acc, { quantity, price, tax_pct }) => {
        const tax = Number((tax_pct * 100) / 100).toFixed(2);
        const taxPerUnit = Number(tax * price) / 100;
        const costPerUnit = taxPerUnit + price;
        const totalPricePerCategory = costPerUnit * quantity;
  
        return acc + totalPricePerCategory;
      }, 0);
  
      const totalTax = items.reduce((acc, { quantity, price, tax_pct }) => {
        const tax = Number((tax_pct * 100) / 100).toFixed(2);
        const taxPerUnit = Number(tax * price) / 100;
        const totalPricePerCategory = taxPerUnit * quantity;
  
        return acc + totalPricePerCategory;
      }, 0);
  
      return {
        totalCost,
        totalTax
      };
    }
  
    return {
      totalCost: 0,
      totalTax: 0
    };
  }

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
