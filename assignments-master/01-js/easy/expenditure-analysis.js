/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let spendEstimates = {};
  const result = [];
  for(let i=0; i<transactions.length; i++){
    let t = transactions[i];
    if(spendEstimates[t.category]){
      
    }
  }

  return [];
}
// var transactions = [
//   {
//     timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza',
//   },
//   {
//     timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Drink',
// 		itemName: 'Pepsi',
//   },
//   {
//     timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Drink',
// 		itemName: 'Mirinda',
//   },
//   {
//     timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Samosa',
//   },
// ]

module.exports = calculateTotalSpentByCategory;
