# fizbuzzwhizz-tdd-practice

# How to use
```javascript
// In Node.js console
fizBuzzWhizzModule = require('./fiz_buzz_whizz.js');
fizBuzzWhizzModule.fizBuzzWhizz(3,5,7);
// '1 2 Fizz 4 Buzz Fizz Whizz 8 Fizz Buzz 11 Fizz Fizz Whizz FizzBuzz 16 17 Fizz 19 Buzz FizzWhizz 22 Fizz Fizz Buzz 26 Fizz Whizz 29 Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Buzz 41 FizzWhizz Fizz 44 FizzBuzz 46 47 Fizz Whizz Buzz Fizz 52 Fizz Fizz Buzz Whizz Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz BuzzWhizz 71 Fizz Fizz 74 FizzBuzz 76 Whizz Fizz 79 Buzz Fizz 82 Fizz FizzWhizz Buzz 86 Fizz 88 89 FizzBuzz Whizz 92 Fizz 94 Buzz Fizz 97 Whizz Fizz Buzz'
```

# Tasking
```
fizBuzzWhizz: 返回0-100对应的正确单词序列
输入：
a: Number
b: Number
c: Number
输出：
words: String

matchLiteral: 按数字字符匹配第一个特殊数（规则5）
输入：
num: Number
table: [{
  number: Number,
  word: String
}]
输出：
word: String

getModCollection: 得到某数字的特殊数因子的集合（规则3和4）
输入：
num: Number
table: [{
  number: Number,
  word: String
}]
输出：
modCollection: [{
  number: Number,
  word: String
}]

generateOutput: 将某因子集合转化成对应单词
输入：
modCollection
输出：
words: String
```

# How to test
```bash
# In Bash
$ ./run_all_spec.sh
```
