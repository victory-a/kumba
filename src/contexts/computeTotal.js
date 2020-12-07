function computeTotal(items) {
  if (items) {
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

export default computeTotal;
