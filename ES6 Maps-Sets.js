//1.

//{1,2,3,4}

//2.

//'ref'

//3.

//0: {Array(3) => true}
//1: {Array(3) => false}

//4.

const hasDuplicate = arr => new Set(arr).size !== arr.length;

//5.

function isVowel(character) {
    return 'aeiou'.includes(character);
}

function vowelCount(string) {
    const vowelMap = new Map();
    for (let character of string) {
        let lowerCase = character.toLowerCase();
        if (vowelMap.has(lowerCase)) {
            vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1);
        }
        else {
            vowelMap.set(lowerCase, 1);
        }
    }
    return vowelMap;
}