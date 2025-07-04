# 6-3 使用函数输出指定范围内Fibonacci数的个数
本题要求实现一个计算Fibonacci数的简单函数，并利用其实现另一个函数,输出两正整数m和n(0< m<n ≤ 100000 ) 之间的所有Fibonacci数的数目。  
所谓Fibonacci数列就是满足任一项数字是前两项的和（最开始两项均定义为1）的数列,fib(0)=fib(1)=1。其中函数fib(n)须返回第n项Fibonacci数；函数PrintFN(m,n)用列表返回[m, n]中的所有Fibonacci数。

函数接口定义：  
在这里描述函数接口。例如：  
```python
fib(n),返回fib(n)的值
PrintFN(m,n)，用列表返回[m, n]中的所有Fibonacci数。
```
裁判测试程序样例：  
在这里给出函数被调用进行测试的例子。例如：  
```python
/* 请在这里填写答案 */

m,n,i=input().split()
n=int(n)
m=int(m)
i=int(i)
b=fib(i)
print("fib({0}) = {1}".format(i,b))
fiblist=PrintFN(m,n)
print(len(fiblist))
```
输入样例：  
在这里给出一组输入。例如：
```
20 100 6
```
输出样例：  
在这里给出相应的输出。例如：
```
fib(6) = 13
4
```
answer:  
```python
def fib(n):
    if n == 0 or n == 1:
        return 1
    a, b = 1, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    return b

def PrintFN(m, n):
    fibs = []
    a, b = 1, 1
    while a <= n:
        if a >= m:
            fibs.append(a)
        a, b = b, a + b
    return fibs
```

---

>本题要求编写程序，输入10个字符，统计其中英文字母、空格或回车、数字字符和其他字符的个数。  
>输入格式:  
>输入为10个字符。最后一个回车表示输入结束，不算在内。  
>输出格式:  
>在一行内按照  
>letter = 英文字母个数, blank = 空格或回车个数, digit = 数字字符个数, other = 其他字符个数  
>的格式输出。  
>输入样例:  
>```aZ &
>09 Az```  
>输出样例:  
>letter = 4, blank = 3, digit = 2, other = 1


❌：
```python
lettercount = 0
blankcount = 0
digitcount = 0
othercount = 0
s = input()
for c in s:
    if c.isalpha():
        lettercount+=1
    elif c.isdigit():
        digitcount+=1
    elif c.isspace():
        blankcount+=1
    else:
        othercount+=1
print(f"letter = {lettercount}, blank = {blankcount}, digit = {digitcount}, other = {othercount}")  
```


✅;
>你的代码逻辑几乎完全正确，只需要注意 题目要求的是输入 10 个字符，最后一个回车不算在内，也就是说应该逐个读取字符直到读取到 10 个非回车字符。  
>但用 input() 只能读取一整行，因此如果输入跨多行（比如包含 \n），你的代码就不容易处理了。更精确的方式是使用 sys.stdin.read() 读取多个字符，忽略最后的回车。

```python 
import sys
lettercount = 0
blankcount = 0
digitcount = 0
othercount = 0
s = sys.stdin.read(10)
for c in s:
    if c.isalpha():
        lettercount+=1
    elif c.isdigit():
        digitcount+=1
    elif c.isspace():
        blankcount+=1
    else:
        othercount+=1
print(f"letter = {lettercount}, blank = {blankcount}, digit = {digitcount}, other = {othercount}")
```
* sys：Python 的标准库模块，提供对解释器相关功能的访问。
* sys.stdin：表示“标准输入流”，也就是你从键盘输入的内容（或终端输入）。
* .read(10)：表示从标准输入中一次性读取最多 10 个字符（包括空格、换行、符号等），返回一个字符串。

---

>第5章-2 图的字典表示
>有向图的字典表示。输入多行字符串，每行表示一个顶点和该顶点相连的边及长度，输出顶点数，边数，边的总长度。比如上图0点表示：  
>{'O':{'A':2,'B':5,'C':4}}。用eval函数处理输入，eval函数具体用法见第六章内置函数。  
>输入格式:  
>第一行表示输入的行数  
>下面每行输入表示一个顶点和该顶点相连的边及长度的字符串  
>输出格式:  
>在一行中输出顶点数，边数，边的总长度  
>输入样例:  
>在这里给出一组输入。例如：  
>```
>4
>{'a':{'b':10,'c':6}}
>{'b':{'c':2,'d':7}}
>{'c':{'d':10}}
>{'d':{}} 
>```
>输出样例:  
>在这里给出相应的输出。例如：  
>```4 5 35```

```python
n = int(input())  # 输入行数
graph = {}        # 总图字典

# 构建图
for _ in range(n):
    d = eval(input())      # 解析当前行的字典
    for k, v in d.items():
        if k not in graph:
            graph[k] = {}  # 加入顶点
        graph[k].update(v)  # 更新边

# 统计所有顶点
vertices = set(graph.keys())
for v in graph.values():
    vertices.update(v.keys())

vertex_count = len(vertices)

# 统计边数和总长度
edge_count = 0
total_weight = 0

for v in graph.values():
    edge_count += len(v)
    total_weight += sum(v.values())
print(f"{vertex_count} {edge_count} {total_weight}")
```
---

>一群猴子要选新猴王。新猴王的选择方法是：让N只候选猴子围成一圈，从某位置起顺序编号为1~N号。从第1号开始报数，每轮从1报到3，凡报到3的猴子即退出圈子，接着又从紧邻的下一只猴子开始同样的报数。如此不断循环，最后剩下的一只猴子就选为猴王。请问是原来第几号猴子当选猴王？  
>输入格式：  
>输入在一行中给一个正整数N（≤1000）。  
>输出格式：  
>在一行中输出当选猴王的编号。  
>输入样例：  
>11  
>输出样例：  
>7  

```python
n = int(input())
monkeys = list(range(1, n + 1))
index = 0 #索引
count = 0 #报数
while len(monkeys) > 1:
    count += 1
    if count == 3:
        del monkeys[index]# 报到3，出圈
        count = 0#重置，从零报起
    else:
        index += 1# 继续数下一个

    if index >= len(monkeys):
        index = 0# 超出列表末尾，循环回来
print(monkeys[0])
```
---

# 7-1词频统计
请编写程序，对一段英文文本，统计其中所有不同单词的个数，以及词频最大的前10%的单词。  
所谓“单词”，是指由不超过80个单词字符组成的连续字符串，但长度超过15的单词将只截取保留前15个单词字符。而合法的“单词字符”为大小写字母、数字和下划线，其它字符均认为是单词分隔符。  
输入格式:  
输入给出一段非空文本，最后以符号#结尾。输入保证存在至少10个不同的单词。  
输出格式:  
在第一行中输出文本中所有不同单词的个数。注意“单词”不区分英文大小写，例如“PAT”和“pat”被认为是同一个单词。  
随后按照词频递减的顺序，按照词频:单词的格式输出词频最大的前10%的单词。若有并列，则按递增字典序输出。  
输入样例：
```  
This is a test.  

The word "this" is the word with the highest frequency.

Longlonglonglongword should be cut off, so is considered as the same as longlonglonglonee.  But this_8 is different than this, and this, and this...#
this line should be ignored.
```
输出样例：（注意：虽然单词the也出现了4次，但因为我们只要输出前10%（即23个单词中的前2个）单词，而按照字母序，the排第3位，所以不输出。）  
```
23
5:this
4:is
```

```python
import sys
import re
from collections import defaultdict

# 读取输入并截断到第一个#之前的部分
text = sys.stdin.read()
end_index = text.find('#')
text = text[:end_index]

# 使用正则表达式找到所有连续的单词字符组成的字符串
words = re.findall(r'\w+', text)

# 处理每个单词：转为小写并截断到前15个字符
processed_words = [word[:15].lower() for word in words]

# 统计词频
word_count = defaultdict(int)
for word in processed_words:
    word_count[word] += 1

# 输出不同单词的总数
total_words = len(word_count)
print(total_words)

# 排序规则：词频降序，字典序升序
sorted_words = sorted(word_count.items(), key=lambda x: (-x[1], x[0]))

# 计算前10%的单词数量
top_n = int(total_words * 0.1)

# 输出结果
for item in sorted_words[:top_n]:
    print(f"{item[1]}:{item[0]}")
```

* ```import sys```
作用：引入 sys 模块，允许你访问与 Python 解释器紧密相关的变量和函数。  
```text = sys.stdin.read()```用来从标准输入读取所有输入内容（直到 Ctrl+D 或 EOF），即模拟整段文本的输入，非常适合处理多行输入或在线评测。  
* ```import re```
作用：引入 正则表达式模块 re，用于高级文本处理，比如查找、拆分字符串中符合某种模式的内容。  
  * ```words = re.findall(r'\w+', text)``` 
    >这句代码的作用是：从字符串 text 中提取所有由“单词字符”组成的连续子串，这些子串就是我们认为的“单词”。
    eg:  
    ```python
    text = "Hello, world! This_is a test."
    words = re.findall(r'\w+', text)
    print(words)  # 输出：['Hello', 'world', 'This_is', 'a', 'test']
    ```
    ```re.findall(pattern, string)``` :  
    pattern：正则表达式（字符串形式）  
	string：要搜索的文本  
    返回值：所有匹配项组成的列表  
  * ```\w+```
    \w    → 匹配一个“单词字符”（等价于 [A-Za-z0-9_]，即：字母、数字、下划线）  
    \+ → 表示“前面的内容重复1次或更多次”
* re.split(r'[^A-Za-z0-9_]+', text)和re.findall(r'\w+', text)有什么区别

|方法|含义|返回类型|
|----------|----------|----------|
|```re.findall(r'\w+', text)``` | 找出所有匹配“单词字符连续块”的子串 | 列表（不含分隔符）|
|```re.split(r'[^A-Za-z0-9_]+', text)``` |用“非单词字符块”作为分隔符来切分文本|列表（可能包含空串）|

```python
text = "Hi! My_name is 007...cool?"
re.findall(r'\w+', text)
# ['Hi', 'My_name', 'is', '007', 'cool']
re.split(r'[^A-Za-z0-9_]+', text)
# ['Hi', 'My_name', 'is', '007', 'cool', '']
```
findall 提取所有合法单词  
split 分割字符串，但如果末尾是分隔符，最后可能出现空串 ''  
* ```from collections import defaultdict``` 
  * 作用：从 collections 模块中引入 defaultdict 类，是一个带有默认值的字典。
  * 与普通字典的区别：
	* 普通 dict 访问未定义键会报错；
	* defaultdict(int) 在你访问不存在的键时，会自动赋初值为 0。
	* ```defaultdict(int) ``` 是一个能自动将新键初始化为 0 的字典，非常适合用来统计频率、计数等。

---

>四则运算（用字典实现）

```python
a = float(input())
op = input().strip()
b = float(input())
operators = {
    '+': lambda x, y: x + y,
    '-': lambda x, y: x - y,
    '*': lambda x, y: x * y,
    '/': lambda x, y: x / y
}
if op == '/' and b == 0:
    print("divided by zero")
else:
    result = operators[op](a, b)
    print("{:.2f}".format(result))
```

---

输入整数n（3<=n<=7）,编写程序输出1,2,...,n整数的全排列，按字典序输出。

输入格式:
一行输入正整数n。

输出格式:
按字典序输出1到n的全排列。每种排列占一行，数字间无空格。

输入样例:
在这里给出一组输入。例如：

3
输出样例:
在这里给出相应的输出。例如：

123
132
213
231
312
321

```python
def backtrack(path, used):
    if len(path) == n:
        print(''.join(map(str, path)))
        return
    for i in range(1, n + 1):
        if not used[i]:
            used[i] = True
            path.append(i)
            backtrack(path, used)
            path.pop()
            used[i] = False

n = int(input())
used = [False] * (n + 1)  # 下标1~n表示数字是否使用过
backtrack([], used)

n = int(input())
nums = list(range(1, n + 1))  # 初始排列：最小字典序

def next_permutation(arr):
    # 1. 从后往前找第一个 arr[i] < arr[i + 1]
    i = len(arr) - 2
    while i >= 0 and arr[i] >= arr[i + 1]:
        i -= 1
    if i < 0:
        return False  # 已经是最大排列

    # 2. 从后往前找第一个比 arr[i] 大的数
    j = len(arr) - 1
    while arr[j] <= arr[i]:
        j -= 1

    # 3. 交换 arr[i], arr[j]
    arr[i], arr[j] = arr[j], arr[i]

    # 4. 将 arr[i+1:] 反转
    arr[i+1:] = reversed(arr[i+1:])
    return True

# 打印初始排列
print(''.join(map(str, nums)))

# 不断生成下一个排列直到无法再生成
while next_permutation(nums):
    print(''.join(map(str, nums)))
```

---

求列表中数字和,列表中嵌套层次不限2层

输入格式:
在一行中输入列表或元组

输出格式:
在一行中输出数字的和

输入样例:
在这里给出一组输入。例如：

[11,2,[3,7],(68,-1),"123",9]
输出样例:
在这里给出相应的输出。例如：

99

```python
data = eval(input())
total = 0

for item in data:
    if isinstance(item, (int, float)):
        total += item
    elif isinstance(item, (list, tuple)):
        for subitem in item:
            if isinstance(subitem, (int, float)):
                total += subitem

print(total)
```

---

输入一个嵌套列表，嵌套层次不限，根据层次，求列表元素的加权和。第一层每个元素
的值为：元素值*1，第二层每个元素的值为：元素值*2，第三层每个元素的值为：元素值*3，
...,以此类推！

输入格式:
在一行中输入列表

输出格式:
在一行中输出加权和

输入样例:
在这里给出一组输入。例如：

[1,2,[3,4,[5,6],7],8]
输出样例:
在这里给出相应的输出。例如：

72

```python
def ws(data,depth = 1):
    total = 0
    for item in data:
        if isinstance(item,int) or isinstance(item,float):
            total += item*depth
        elif isinstance(item,list):
            
            total += ws(item,depth+1)
    return total

lst = eval(input())
print(ws(lst))
```

---

蛇形矩阵

```python
n = int(input())
a = [[0]*n for i in range(n)]
circle = 0
i = 1
while i <= n*n:
    #down
    for j in range(circle,n-circle):
        a[j][circle]= i
        i += 1
    #right
    for j in range(circle+1,n-circle):
        a[n-circle-1][j] = i
        i += 1
    #up
    for j in range(n-circle-2,circle-1,-1):
        a[j][n-circle-1] = i
        i += 1
    #left
    for j in range(n-circle-2,circle,-1):
        a[circle][j] = i
        i += 1
    circle += 1
for i in range(n):
    for j in range(n):
        print(f'{a[i][j]:4d}',end='')
    print('')
```

---

爬楼梯
```python

def climb(n):
    a,b = 1,2
    if n == 1:
        return 1
    elif n == 2:
        return 2
    else:
        for i in range(n-2):
            a,b=b,a+b
        return b

n = int(input())
print(climb(n))
```

---

字典合并
输入用字符串表示两个字典，输出合并后的字典。字典的键用一个字母或数字表示。注意：1和‘1’是不同的关键字！

输入格式:
在第一行中输入第一个字典字符串；

在第二行中输入第二个字典字符串。

输出格式:
在一行中输出合并的字典，输出按字典序。

"1" 的 ASCII 码为 49，大于 1，排序时 1 在前，"1" 在后。其它的字符同理。

输入样例1:
在这里给出一组输入。例如：

{1:3,2:5}
{1:5,3:7} 

输出样例1:
在这里给出相应的输出。例如：

{1:8,2:5,3:7}

输入样例2:
在这里给出一组输入。例如：

{"1":3,1:4}
{"a":5,"1":6}

输出样例2:
在这里给出相应的输出。例如：

{1:4,"1":9,"a":5}

```python
dic1 = eval(input())
dic2 = eval(input())


for key, value in dic2.items():
    if key in dic1:
        dic1[key] += value
    else:
        dic1[key] = value

sorted_items = sorted(dic1.items(), key=lambda x: (str(type(x[0])), x[0]))

output_parts = []
for k, v in sorted_items:
    if isinstance(k, str):
        # 如果键是字符串，格式化时要加上双引号
        output_parts.append(f'"{k}":{v}')
    else:
        # 如果是整数，直接格式化
        output_parts.append(f'{k}:{v}')

# 使用修复后的列表拼接最终字符串
print("{" + ",".join(output_parts) + "}")
```

---

指定层个数
```python
from collections import defaultdict

def ws(data,depth,result):
    
    for item in data:
        if isinstance(item,int):
            result[depth] += 1
        elif isinstance(item,list):
            ws(item,depth+1,result)
    return result

lst = eval(input())
n = int(input())
result = defaultdict(int)
ws(lst,1,result)
print(result[n])
```