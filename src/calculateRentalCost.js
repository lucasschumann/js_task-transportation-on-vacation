/**
 * @param {number} days
 *
 * @return {number}
 */

const longTerm = 7;
const longTermDiscount = 50;
const mediumTerm = 3;
const mediumTermDiscount = 20;
const dayRent = 40;

function calculateRentalCost(days) {
  // write code here
  if (days >= longTerm) {
    return dayRent * days - longTermDiscount;
  }

  if (days >= mediumTerm) {
    return dayRent * days - mediumTermDiscount;
  }

  return dayRent * days;
}

module.exports = calculateRentalCost;
