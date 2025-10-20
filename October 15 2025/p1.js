function sumOf(arr){
    let a = arr
    let sum = 0
    for(i=0;i<=a.length;i++){
        if(arr[i]%2===0){
            sum+=arr[i]
        }
    }
    return sum;
}

console.log(sumOf([1, 2, 3, 4, 5]));
console.log(sumOf([7, 9, 12, 14]));
