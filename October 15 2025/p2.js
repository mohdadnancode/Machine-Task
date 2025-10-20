function count(num){
   if(num === 0)
      return 1
    let a = 0
    
     while(num>0){
      num=Math.floor(num /10)
        a++
     }
     return a;
}
console.log(count(12345));
console.log(count(987654321));
console.log(count(0));
