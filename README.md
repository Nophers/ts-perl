# ts-perl

<p align="center">
A powerful NodeJS library to manipulate strings in pure Perl. 
</p>

[![Discord](https://img.shields.io/discord/823720615965622323.svg?style=for-the-badge)](https://discord.gg/UDNcTrBagN)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/vkxni)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/alelievr/Mixture/blob/master/LICENSE)

---

> ### 🙄 Why?

Perl has by far the most powerful RegEx engine and is mainly used for such purpose.

_"Like any other programming language that is mainly used for text processing, Perl also has its own powerful repertoire of regular expressions. In fact, it is a trendsetter in this regard. The regular expression style used in Perl is so well known that it is often called Perl-style regular expressions."_

But who want's to write pure Perl code nowadays? Sure, almost nobody. Luckily you can use `ts-perl` to manipulate and match strings against powerful - built-in - Perl RegEx patterns.

- [https://perldoc.perl.org/perlre](https://perldoc.perl.org/perlre)
- [https://www.quora.com/What-specifically-makes-Perl-superior-for-regular-expressions](https://www.quora.com/What-specifically-makes-Perl-superior-for-regular-expressions)
- [https://www.perltutorial.org/perl-string/](https://www.perltutorial.org/perl-string/)
- [https://www.somacon.com/p127.php](https://www.somacon.com/p127.php)
- [https://www.oreilly.com/library/view/mastering-perl/9780596527242/ch02.html](https://www.oreilly.com/library/view/mastering-perl/9780596527242/ch02.html)


⚠️ Warning - this requires Perl to be installed on your system. If you don't have it, you can install it from [here](https://www.perl.org/get.html). Remember, that on UNIX systems Perl is already installed by default. On Windows, you can install it using [Strawberry Perl](https://strawberryperl.com/).

---

> ### 📖 Usage
Below you can see some of the view available functions. More are coming soon - feel free to suggest/add some through issues or PR's :D

| Function                      | Args                                                    | Example                                                                                     | Output                                                                            |
| ----------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `run`                         | `script: string`                                        | `Perl.run('print "Hello, world!";')`                                                        | `Hello, world!`                                                                   |
| `validateEmail`               | `email: string`                                         | `Perl.validateEmail('test@gmail.com')`                                                      | `true`                                                                            |
| `titleCase`                   | `string: string`                                        | `Perl.titleCase('the quick brown fox')`                                                     | `'The Quick Brown Fox'`                                                           |
| `extractDates`                | `string: string`                                        | `Perl.extractDates('I have a meeting on 2023-05-01')`                                       | `["2023-05-01"]`                                                                  |
| `removeNonAscii`              | `string: string`                                        | `Perl.removeNonAscii('Héllo, wørld!')`                                                      | `'Hello, world!'`                                                                 |
| `removeConsecutiveDuplicates` | `string: string`                                        | `Perl.removeConsecutiveDuplicates('aaabbbccc')`                                             | `'abc'`                                                                           |
| `splitIntoChunks`             | `string: string`, `chunkSize: number`                   | `Perl.splitIntoChunks('Lorem ipsum dolor sit amet, consectetur adipiscing elit', 10)`       | `["Lorem ipsu", "m dolor si", "t amet, co", "nsectetur ", "adipiscing", " elit"]` |
| `truncateString`              | `string: string`, `maxLength: number`, `suffix: string` | `Perl.truncateString('Lorem ipsum dolor sit amet, consectetur adipiscing elit', 10, '...')` | `'Lorem ipsu...'`                                                                 |
| `extractBetweenDelimiters`    | `str: string`, `startDelim: string`, `endDelim: string` | `Perl.extractBetweenDelimiters('<h1>Title</h1>', '<h1>', '</h1>')`                          | `'Title'`                                                                         |
| `anagram`                     | `str1: string`, `str2: string`                          | `Perl.anagram('listen', 'silent')`                                                          | `true`                                                                            |
| `longestSubstring`            | `str1: string`, `str2: string`                          | `Perl.longestSubstring('abcdxyz', 'xyzabcd')`                                               | `'abcd'`                                                                          |

© TS-PERL 2023, [MIT Licence](/LICENSE), by [@vKxni](https://github.com/vKxni).