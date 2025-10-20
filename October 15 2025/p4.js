function mostVowels(sen){
    sen = sen.toLowerCase();
    let words = sen.split(" ");

    const vowels = "aeiou";

    let max = 0;
    let wordsWithMost = "";

    for(let word of words){
       let count = 0;
        for(let char of word){
            if(vowels.includes(char)){
                count++;
            }
        }

        if(count>=max){
            max = count;
            wordsWithMost = word;
        }
    }
    return wordsWithMost;
}
console.log(mostVowels("Bridgeon Academy train coders"));
console.log(mostVowels("I Love programming"));