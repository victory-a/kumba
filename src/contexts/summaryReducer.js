import summaryActions from "./summaryActions";
import computeTotal from "./computeTotal";

function generateId() {
  return Math.floor(Math.random() * 1000);
}

function summaryReducer(state, action) {
  switch (action.type) {
    case summaryActions.INIT: {
      const updatedItems = action.payload.items.map(item => {
        item.id = generateId();
        return item;
      });
      return {
        items: updatedItems,
        totalCost: computeTotal(action.payload.items).totalCost,
        totalTax: computeTotal(action.payload.items).totalTax
      };
    }

    case summaryActions.INCREASE: {
      const updatedState = state.items.map(item => {
        if (item.id === action.payload.id) return { ...item, quantity: item.quantity + 1 };

        return item;
      });

      return {
        items: updatedState,
        totalCost: computeTotal(updatedState).totalCost,
        totalTax: computeTotal(updatedState).totalTax
      };
    }

    case summaryActions.DECREASE: {
      const target = state.items.find(item => item.id === action.payload.id);

      if (target.quantity > 1) {
        const updatedState = state.items.map(item => {
          if (item.id === action.payload.id) return { ...item, quantity: item.quantity - 1 };

          return item;
        });

        return {
          items: updatedState,
          totalCost: computeTotal(updatedState).totalCost,
          totalTax: computeTotal(updatedState).totalTax
        };
      }

      return state;
    }

    default:
      return state;
  }
}

export default summaryReducer;
