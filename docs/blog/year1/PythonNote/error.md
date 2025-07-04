# 第三次小测
>Q：字典的 update() 方法会替换所有已存在的键值对。
A: F ❌

仅替换那些传入字典中也包含的键
如果你写成 new_dict = a.update(b)，new_dict 会是 None，因为 update() 不返回新字典。  
如果你需要合并两个字典但又不想修改原字典，可以用 copy() 先复制：
```python
merged = a.copy()
merged.update(b)
```

---

>Q：对于元组 t = (1, 2, [3, 4])，语句 t[2][0] = 5 是合法的。
A：T✅

虽然元组是不可变的（immutable），但这指的是元组本身的结构（即：元组中每个“槽位”不能被重新赋值），并不意味着元组中包含的元素也必须是不可变的。
在这里：
* ```t[2]``` 是一个列表 ```[3, 4]```，是可变的；
* 所以 ```t[2][0] = 5 ```实际上是对列表内部的元素进行了修改，是允许的。  
✅ ```t[2][0] = 5 ```是合法的；  
❌ ```t[2] = [5, 4]``` 就不合法了，因为那是试图修改元组中的一个整体元素。

---

>Q:下面列表推导式的结果是：
[x+y for x in "AB" for y in "123"]  
>A.['AB123']  
>B.语法错误  
>C.['A1', 'B1', 'A2', 'B2', 'A3', 'B3']  
>D.['A1', 'A2', 'A3', 'B1', 'B2', 'B3']  
>* A : D(错选C)

执行顺序：
```python
result = []
for x in "AB":
    for y in "123":
        result.append(x + y)
```
先x后y

---

>Q:字符串s = "hello"，执行s.replace('l', 'L')后，s的值是？  
>A."hLLo"  
>B.报错  
>C."heLLo"  
>D."hello"  
>* A : D （错选C）

```replace()``` 会**返回一个新字符串**，而**不会**改变原字符串 s；因为字符串是不可变的（immutable），原字符串不会被修改；所以 s 的值依然是 "hello"。

---

>下列哪个操作会生成新元组？  
A.t = (1, 2); t += (3,)  
B.t = tuple([1, 2])  
C.t = (1, 2); t[0] = 3  
D.t = (1, [2]); t[1].append(3)  
> * Q: A(选了B但B应该也是对的。。)

A. t = (1, 2); t += (3,)  
虽然看起来是“加法”，但元组是不可变的，所以 t += (3,) 实际上会生成一个新元组对象 t = t + (3,)；  
**t=(1,2,3)**  
B. t = tuple([1, 2])  
从一个列表创建元组，当然也是在创建新元组；  
C. t = (1, 2); t[0] = 3  
报错：元组不可变，不能修改元素；所以这不是生成新元组，而是直接抛异常。  
D. t = (1, [2]); t[1].append(3)  
t[1] 是一个可变的列表，.append() 只是修改了该列表的内容；**并没有生成新的元组，元组的引用结构未变。**  

---

> 'a' in {'a':1}  
> True

因为字典中 "a" 是键，in 判断的是“键是否存在”，所以成立。

---

>"PYTHON" is s.upper()（假设s = "python"）  
False

* ```s.upper() ```会返回一个新字符串 "PYTHON"；
* 但 "PYTHON" 和```s.upper() ```结果虽然值相等，但 is 比较的是**对象身份（内存地址）**；
* Python 并不保证返回的``` s.upper() ```和字面量 "PYTHON" 是同一个对象；
* 所以这个表达式 大多数情况下是 False，除非字符串被自动缓存（通常不会在这种场景发生）。

---

> (1) == 1  
> True

```(1)```等价于1，```(1,)```才是元组

---

# 第十周练习
>A:```print(type(lambda:3))```的输出结果是_________。  
>Q:```<class 'function'>```

function 函数类型  
def lambda都是function

---

>
>```python
>l=[1]
>def scope1():
>    l.append(6)    
>    print(*l)
>scope1()
>```
>输出 ： 1 6

*l 是**“解包”操作符**，它会把列表中的元素一个个地拿出来，作为多个参数传给 ```print()```  
如果是```print(l)```,输出[1,6]

---
| 运算符 | 名称     | 示例（a=6, b=3）        | 说明                                    |
|--------|----------|--------------------------|-----------------------------------------|
| `&`    | 按位与   | `a & b` → `6 & 3 = 2`    | 都为1才为1                              |
| `\|`    | 按位或   | `a \| b` → `6 \| 3 = 7`  | 有一个为1就为1                          |
| `^`    | 按位异或 | `a ^ b` → `6 ^ 3 = 5`    | 不同为1，相同为0                        |
| `~`    | 按位取反 | `~a` → `~6 = -7`         | 取反每一位，等于 `-a - 1`              |
| `<<`   | 左移     | `a << 1` → `6 << 1 = 12` | 向左移动n位，相当于乘以 2ⁿ             |
| `>>`   | 右移     | `a >> 1` → `6 >> 1 = 3`  | 向右移动n位，相当于除以 2ⁿ（向下取整） |

---

输入两个整数，大小在[0,63]之间。求它们的二进制和，二进制用8位表示。  

输入格式:  
在一行输入一个整数，在另一行输入另一个整数。

输出格式:  
输出它们的二进制和。

输入样例:  
在这里给出一组输入。例如：
```
5
7
```
输出样例:  
在这里给出相应的输出。例如：
```
00000101
00000111
--------
00001100
```

answer:
```python
# 读取两个整数
x = int(input())
y = int(input())

# 转换为8位二进制字符串
bx = format(x, '08b')
by = format(y, '08b')

# 计算按位或的结果（二进制和可以理解为异或、或，或加法，题目示例显示是按位或）
# 但根据示例 5 → 00000101，7 → 00000111，结果是 00001100
# 所以使用异或（^）
bz = format(x ^ y, '08b')

# 输出
print(bx)
print(by)
print("--------")
print(bz)
```

```format()```用法  
```format(value, format_spec)```  
* value: 要格式化的值。
* format_spec: 格式说明符，决定输出的格式。
* **数字默认右对齐，其他默认左对齐**
>下面这一小块copy jmgg 的。。。。。。。😴

```[[fill]align][sign][#][0][width][grouping_option][.precision][type]```

```fill```: 填充字符，默认是空格

```align```: 对齐方式，<左对齐，>右对齐，^居中对齐，=在符号后填充

```sign```: 符号显示，+显示正负号，只显示负号， (空格)正数前加空格

```#```: 对某些类型启用"替代形式"（如显示0b、0o、0x前缀）

```0```: 用0填充（等同于fill='0', align='='）

```width```: 最小字段宽度

```grouping_option```: 千位分隔符，,使用逗号，_使用下划线

```.precision```: 小数精度

```type```: 类型码，如d、f、e、g、%、b、o、x等


```python
# 带符号和千位分隔符的数字
print(format(1234567.89, '+,.2f'))  # 输出: '+1,234,567.89'
print(format(1234567.89, '_,.2f'))  # 输出: '1_234_567.89'

# 二进制格式，带前缀和位宽
print(format(42, '#010b'))  # 输出: '0b00101010'

# 复杂的对齐和填充
print(format('TITLE', '*^30s'))  # 输出: '************TITLE************'

# 同时使用多种格式选项
print(format(123.456, '^+15.2f'))  # 输出: '    +123.46    '
```
总之就是 <占位><对齐><符号显示><0-用0填充><宽度 千位分隔符.精度><格式>

---

# 第十一周练习
* 局部变量屏蔽全局变量

>area是tri模块中的一个函数，执行from tri import area 后，调用area函数应该使用____ 。
A.tri(area)
B.tri.area()
C.area()
D.tri()
> * C

---

>下面程序的输出结果
>```python
>lst=[(1,"one"),(2,"two"),(3,"three"),(4,"four")]
>lst.sort(key=lambda x:x[1])
>print(lst[3][1][2])
>```
> * o

* ```lst.sort(key=lambda x:x[1])```:表示我们要根据元组中的第二个元素（即字符串）来排序。排序完成后```lst = [(4, 'four'), (1, 'one'), (3, 'three'), (2, 'two')]```
* ```lst[3][1][2]```:(2,'two') -> 'two' -> o

---

在Python中，函数是对象，可以像其他数据对象一样使用。下面程序的输出是  
```11 22 33 ```  
```python
def func1():
    print("11",end=" ")
    
def func2():
    print("22",end=" ")

def func3():
    print("33",end=" ")

funclist=[func1,func2,func3]
for func in funclist:
    func()
```

---

# 第十二周
>Python中的每个对象都有三个要素：id、type和value。  
>T ✅

1. id（身份标识）
   * 表示对象在内存中的地址（或身份标识）。
   * 可以通过内置函数 id(obj) 获取。
   * 在对象的生命周期内是唯一的。
2. type（类型）
   * 表示对象所属的数据类型。
   * 可以通过 type(obj) 查看对象的类型。
3. value（值）
   * 即对象所表示的数据内容。
   * 不同类型的对象，值的含义不同。

---

>__init__方法是Python类中的构造方法，用于初始化对象属性，可以有返回值。  
F ❌

```__init__ ```的返回值必须是 None。  
如果你试图在``` __init__ ```中使用 return 返回一个非 None 的值，会引发 TypeError。

---

>调用对象方法时，self参数需要显式传递吗？  
A.是  
B.否  
C.取决于方法的类型  
D.取决于Python版本  
> * B

```python
class Person:
    def __init__(self, name):
        self.name = name

    def say_hello(self):  # 对象方法
        print(f"Hello, I'm {self.name}")

p = Person("Alice")
p.say_hello()  # 调用对象方法，自动把p作为self传进去
```
* 在调用对象方法时，self 参数不需要显式传递，Python 会自动将调用该方法的对象作为第一个参数传入。你只在定义方法时写上 self，但调用时不用写。
* 如果你调用一个实例方法时显式传了 self，那它就会被当成普通函数使用，而不是对象方法，通常会导致错误。


---

>对象属性也可以被称为？

成员变量

---

>对象方法本质是？

定义在类中的一种函数

---

# 随堂小测

>下列代码的输出结果?  
>```python
>def func(lst=[]):
>    lst.append(len(lst))
>    return lst
>func()
>func([1])
>print(*func())
>```

* 第一次调用：func()
  * 默认参数 lst=[] 被使用（注意：默认参数是可变对象，会在函数定义时创建并持续存在）。
  * 初始值：lst = []
  * 执行：lst.append(len(lst)) → lst.append(0) → lst = [0]
  * 返回值：[0]
* 第二次调用：func([1])
  * 这次你传入了一个新的列表 [1]。
  * len([1]) 是 1，所以 lst.append(1) → [1, 1]
  * 返回值：[1, 1]
* 第三次调用：func()（又使用默认参数）
  * 上一次 func() 默认参数修改成了 [0]，此时它变成 [0]
  * len([0]) 是 1 → lst.append(1) → [0, 1]
  * 返回值：[0, 1]
* 最后执行：print(*func())
  * func() 返回 [0, 1]，* 会将列表解包成两个参数
  * 相当于：print(0, 1)

> **可变对象作为默认参数的陷阱**  
>默认参数只在函数定义时评估一次，不是每次调用时重新创建。
>如果默认参数是可变对象（如 list、dict），这个对象会在后续函数调用中被共享和修改。
>```python
>def append_item(lst=[]):
>    lst.append(len(lst))
>    return lst
>print(append_item())  # ➜ [0]
>print(append_item())  # ➜ [0, 1] ← 上次的 list 被复用了！
>```
>正确写法
>```python
>def append_item(lst=None):
>    if lst is None:
>        lst = []
>    lst.append(len(lst))
>    return lst
>
>print(append_item())  # ➜ [0]
>print(append_item())  # ➜ [0]
>```
| 特性                             | 说明                               |
|----------------------------------|------------------------------------|
| 默认参数只在函数定义时计算一次   | 所以可变类型会被记住并复用         |
| 推荐使用不可变类型作默认值       | 如 `int`、`str`、`None` 等         |
| 如果需要用列表、字典等默认值     | 用 `None` + 手动创建               |

**不可变对象做参数**，不会被修改
* 每次调用函数都使用这个固定的值。
* 不会被修改，也不会出问题。
```python
def increment(x=0):
    x += 1
    return x

print(increment())  # 输出: 1
print(increment())  # 输出: 1
print(increment())  # 输出: 1
```
>正确用法：使用 None 来避免共享可变对象
```python
def add_item(item, container=None):
    if container is None:
        container = []
    container.append(item)
    return container

print(add_item("a"))  # ['a']
print(add_item("b"))  # ['b']
```

---

# 第十四周练习
要以二进制模式读取图片文件，以下代码片段中应使用的模式是什么？
```python
with open("image.png", "___") as file:
    data = file.read()
```
A.w  
B.r  
C.rb  
D.a  

answer:C
* "rb" 表示以二进制读取模式打开文件，适用于读取图片、音频、视频等二进制文件；
* "r" 是文本读取，不适合二进制文件；
* "w" 是写入模式，会清空文件；
* "a" 是追加模式，也是写入用的。

---

如果需要将列表中的每个元素逐行写入文件“list.txt”，以下代码片段中哪一行代码应被替换为正确的写入方法？  
```python
data = ["苹果", "香蕉", "橙子"]
with open("list.txt", "w") as file:
    for item in data:
        ___
```
A.file.read(item)  
B.file.write(item + "\n")  
C.file.readlines(item)  
D.file.write_lines(item)  

answer:B
* file.write(item + "\n") 会将列表中的每个字符串元素写入文件，并在末尾添加换行，实现逐行写入；
* A. file.read(item) → read() 用于读取，不用于写；
* C. file.readlines(item) → readlines() 也用于读取，且不接受参数；
* D. file.write_lines(item) → 错误方法，应为 writelines() 且不能自动换行。

* ```writelines()```
  * writelines() 不会自动添加换行符 (\n)，如果你希望每行换行，你需要在每个字符串末尾自己加上 \n。
  * 参数必须是一个可迭代对象（如列表或元组），其中的元素必须是字符串。

---

在以下代码中，file.write()的调用将会返回什么值？
```python
with open("output.txt", "w") as file:
    result = file.write("Hello, World!")
print(result)
```
answer:  
D.写入的字符数  

---

>read函数返回的是列表。

F,read() 函数返回的是字符串，而不是列表。readlines() 返回一个字符串列表。

---

# 第三次小测
>下面定义字典的语句那个是正确的？  
>A.momthdays=dict(Jan=31,Feb=28,Mar=31,Apr=30)  
>B.momthdays=dict("Jan"=31,"Feb"=28,"Mar"=31,“Apr"=30)  
>C.momthdays={Jan:31,Feb:28,Mar:31,Apr:30}  
>D.momthdays={Jan=31,Feb=28,Mar=31,Apr=30}  

❌：B，✅：A  
B：关键字参数不能用引号包围  

## 列表的创建
1. 使用大括号  
```d = {'a': 1, 'b': 2}```
2. 使用 dict() 函数 + 关键字参数  
```d = dict(a=1, b=2)```
3. 使用 dict() + 列表/元组的列表  
```d = dict([('a', 1), ('b', 2)])```
4. 使用 zip() 配合 dict()  
```pythn
keys = ['a', 'b', 'c']
values = [1, 2, 3]
d = dict(zip(keys, values))
```
5. 使用字典推导式（Dict Comprehension）  
```d = {x: x**2 for x in range(5)}```
6. 从其他字典复制（如：copy()）  
```python 
original = {'a': 1}
d = original.copy()
```
7. 使用 fromkeys() 方法  
```d = dict.fromkeys(['a', 'b', 'c'], 0)```  所有键共享一个默认值（注意可变对象要小心）。

---
>下列程序运行输出结果为_______。
>```python
>m={1:'A','2':'B'}
>print(m.get(2,-1))
>```
>A.'B'  
>B.'A'  
>C.None  
>D.-1  

❌B，✅D  
这里查找的是 整数 2，不是字符串 '2'。  

---

```python
d1={'a':[1,2],'b':2}
d2=d1.copy()
d1['a'][0]=6
print(d1['a'][0]+d2['a'][0])
```
输出结果：12

* ict.copy() 是浅拷贝：
  * 对于不可变对象（如整数、字符串）：新字典有独立副本。
  * 对于可变对象（如列表）：新旧字典共享同一个对象。

---

>在一行中输入若干个0到9之间的数字，以下代码会输出0到9这10个数字在输入中出现的次数：
>```python
>a = map(int, input().split())
>m = ____(1)____
>for x in range(10):
>    m[x] = 0
>for x in a:
>    m[x] = _____(2)m[x]+1 _____
>for k in m:
>    print(m[k], ____(3) end=' '   ____)

(1)❌[] ✅{}

# 第四次小测
>列表的 sort() 方法返回一个新的已排序列表。
F

---

>下列程序运行输出结果为_______。
>```python
>lst=[1]
>def g_func(a,lst=[]):
>    lst.append(a)
>    
>g_func(10,lst)
>print(lst)
>g_func(100)
>print(lst)
>```

D,第二次打印的lst还是一开始的lst

---

