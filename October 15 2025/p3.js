function totalChars(arr){
    
    let a =0;
    for(const num of arr){
        a+=num.length
    }
    return a
}
console.log(totalChars(["Hi", "Bridgeon", "JS"]));
console.log(totalChars(["Code", "Your", "Future"]));
