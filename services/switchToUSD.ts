const switchToUSD = (price: string): string => {
    let fixedPrice = price;
    let rest = "";
    if (price.indexOf(".") >= 0) {
      rest = price.substring(price.indexOf("."), price.length);
      fixedPrice = price.substring(0, price.indexOf("."));
    }
    fixedPrice = fixedPrice.split("").reverse().join("");
    fixedPrice = fixedPrice.replace(/.{3}/g, "$&,");
    fixedPrice = fixedPrice.split("").reverse().join("");
    if (fixedPrice[0] === ",")
      fixedPrice = fixedPrice.substring(1, fixedPrice.length);
    return fixedPrice + rest;
  };

  export default switchToUSD