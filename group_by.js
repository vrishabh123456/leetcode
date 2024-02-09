/**
 * @param {Function} fn
 * @return {Object}
 */
/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) => {
      const key = fn(item);
      
      if (!grouped[key]) {
        grouped[key] = [];
      }
      
      grouped[key].push(item);
      
      return grouped;
    }, {});
  };
  
  
  /**
   * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
   */
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6];
  const grouped = numbers.groupBy(num => num % 2 === 0 ? 'even' : 'odd');
  console.log(grouped); // Output: { odd: [1, 3, 5], even: [2, 4, 6] }
