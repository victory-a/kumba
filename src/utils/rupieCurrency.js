const rupieFormat = number => {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(number);
};

export default rupieFormat;
