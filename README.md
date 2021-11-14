# Word Analyzer

| Name                        | Matric No |
| --------------------------- | --------- |
| Muhammad Hammizie bin Zamri | 1812129   |

## How to calculate the no of vowels, consonants and characters
1. Define an array of vowels characters and store them in a variable.
```
const vowels = ['a', 'e', 'i', 'o', 'u'];
```
2. Calculate no of vowels
```
let noOfVowels = word.toLowerCase().split('').filter((e) => vowels.includes(e)).length;
```
2. Calculate no of consonants
```
let noOfConsonants = word.split('').filter((e) => e !== ' ').length - noOfVowels;
```
2. Calculate no of characters
```
let noOfCharacters = word.length;
```
