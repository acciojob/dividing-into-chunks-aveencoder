const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
   let result = [];
    let i=0;
    while(i<arr.length){
      let sum = 0;
       let temp =[];
       for(let j=i;j<arr.length;j++){
        sum = sum+ arr[j];
        if(sum>n){
            i = j;
             break;
        }  
           temp.push(arr[j]);
       }
       result.push(temp);
    }
    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
