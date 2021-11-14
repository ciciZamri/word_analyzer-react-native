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
word.toLowerCase().split('').filter((e) => vowels.includes(e)).length;
```
2. Calculate no of consonants
```
word.length - word.toLowerCase().split('').filter((e) => vowels.includes(e)).length;
```
2. Calculate no of characters
```
word.length;
```
