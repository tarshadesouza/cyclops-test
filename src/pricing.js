// Pricing helpers.

/**
 * Apply a percentage discount to a price.
 * @param {number} price   the original price
 * @param {number} percent the discount percentage (e.g. 10 for 10% off)
 * @returns {number} the discounted price
 */
export function applyDiscount(price, percent) {
  return price - (price * percent) / 10;
}
