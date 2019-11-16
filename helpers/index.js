export const addCommas = (value) => {
  if (value.length < 4) return value;
  const stringifiedValue = `${value}`;
  
  // calculate number of commas
  let numberOfCommas = stringifiedValue.length  / 3;
  if (!Number.isInteger(numberOfCommas)) numberOfCommas = Math.floor(numberOfCommas);
  else numberOfCommas -= 1;

  const positions = [];
  let result = '';

  // get positions to insert commas
  for (let x = 1; x <= numberOfCommas; x += 1) {
    positions.push(stringifiedValue.length - (3 * x));
  }

  // insert commas
  for (let x = 0; x < stringifiedValue.length; x += 1) {
    if (positions.includes(x)) result += `,`;
    result += stringifiedValue[x]
  }
  return result;
};
