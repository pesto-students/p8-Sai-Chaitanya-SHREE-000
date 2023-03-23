function isVowel(char){
    const vowel = "aeiou"
    for (let i = 0; i < vowel.length; i++) {
        if (vowel[i] === char) return i+1;
    }
}

function vowelCount(str){
    const vowelMap = new Map();
    
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        const index = isVowel(lowerCaseChar)
        if(index){
            if(vowelMap.has(index)){
                vowelMap.set(index,vowelMap.get(index)+1);
                }else{
                    vowelMap.set(index,1)
                    }
                }
            }
            return vowelMap;
        }

console.log(vowelCount('sihree'));