#Caesar's Cipher ain't got nothing on Vigenère's!

Implement a Vigenere Cipher using JavaScript. You should be able to encode and decode a word when given a keyword. Read the Wikipedia description [here](http://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher#Description
)

A quick rundown of the steps:

1. You take the message you want to encrypt (in this case 'attackatdawn').

```
message: attackatdawn
```

2. You take the keyword you want to encrypt with (in this case 'lemon'), and repeat it so that it is the length as your message.

```
keyword: lemonlemonle
```

3. You add each letter of the message to each letter of the keyword to produce each letter of the ciphertext. For example, for the first letter:

* message: 'a' is index 0 in the alphabet
* keyword: 'l' is index 11 in the alphabet
* ciphertext: letter at index (0 + 11), which is 'l'

```
ciphertext: lxfopvefrnhr
```

##### If you have not already...

## Finish the Underscore lab assignment.

##### Then...

Go through the first section of Codeschool's Chrome Dev Tools. Tomorrow we ECMA in the browser! Don't focus too much on Chapters 5-7. This would also be a great opportunity to update your Chrome browser or download it if you have not already.

**PROTIP** If the three dashes next to your Chrome URL bar are any color other than grey, you need to update.

##Vids and Reads
[Link to CS DevTools](http://discover-devtools.codeschool.com/?locale=en)
[DevTools Site](https://developers.google.com/chrome-developer-tools/)