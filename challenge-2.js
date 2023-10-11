function challengeTwo(arr){
  let n = arr.length;

  for (let i =0; i <n-1; i++){
    for (let j=0; j <n-1 -i; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp; 
      }
    }
  }
  return arr;
}

const unsortedArray = [12,5,7,16,99];
console.log(challengeTwo(unsortedArray)); // 5, 7, 12, 16 ,99