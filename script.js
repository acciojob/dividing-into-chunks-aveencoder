const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
 const result = [];
  let i = 0;

  while (i < arr.length) {
    let sum = 0;
    const temp = [];

    // Try to consume elements until adding one exceeds the limit
    while (i < arr.length && sum + arr[i] <= n) {
      sum += arr[i];
      temp.push(arr[i]);
      i++;
    }

    // If no elements were added (i.e., arr[i] > n), we can still push that single element or handle differently
    if (temp.length === 0 && i < arr.length) {
      // Optional: choose to include the non-fitting element alone
      temp.push(arr[i]);
      i++;
    }

    result.push(temp);
	   }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
