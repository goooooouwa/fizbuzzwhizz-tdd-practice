# fizbuzzwhizz-tdd-practice

# How to use
```javascript
// In Node.js console
fizBuzzWhizzModule = require('./fiz_buzz_whizz.js');
fizBuzzWhizzModule.fizBuzzWhizz(3,5,7);
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

matchFirstSpecialNumber: 按数字字符匹配第一个特殊数（规则5）
输入：
num: Number
specialWords: [{
  number: Number,
  word: String
}]
输出：
word: String

getFactors: 得到某数字的特殊数因子的集合（规则3和4）
输入：
num: Number
specialWords: [{
  number: Number,
  word: String
}]
输出：
factors: [{
  number: Number,
  word: String
}]

mapFactorsToWords: 将某因子集合转化成对应单词
输入：
factors
输出：
words: String
```

# How to test
```bash
# In Bash
$ ./run_all_tests.sh
```
