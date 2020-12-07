import summaryActions from "./summaryActions";
import computeTotal from "./computeTotal";

function summaryReducer(state, action) {
  switch (action.type) {
    case summaryActions.INIT: {
      return {
        items: action.payload.items,
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

    case summaryActions.ADD: {
      let updatedItems = state.items;
      let updatedTotal = state.totalCost;
      let updatedTotalTax = state.totalTax;

      if (!state.items.find(item => item.id === action.payload.id)) {
        updatedItems.push({
          ...action.payload,
          quantity: 1
        });

        updatedTotal = computeTotal(updatedItems).totalCost;
        updatedTotalTax = computeTotal(updatedItems).totalTax;
      }

      return {
        items: updatedItems,
        totalCost: updatedTotal,
        totalTax: updatedTotalTax
      };
    }

    case summaryActions.REMOVE: {
      const updatedState = state.items.filter(item => item.id !== action.payload.id);

      return {
        ...state,
        items: updatedState,
        totalCost: computeTotal(updatedState).totalCost,
        totalTax: computeTotal(updatedState).totalTax
      };
    }

    case summaryActions.CLEAR:
      return {
        items: [],
        totalCost: 0,
        totalTax: 0
      };

    default:
      return state;
  }
}

export default summaryReducer;
