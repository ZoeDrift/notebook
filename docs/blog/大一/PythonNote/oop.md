# 第八章 类和对象
* 对象（object）属性（attribute）
* 类（class）定义属性（数据）和行为（方法）的模版，类是python语言的核心，**python所有类型都是类，包括int，str**。对象是类的一个实例
* 先定义一个类，再创建类的实例(对象)（实例=对象）

## 类和对象的创建
### 定义类

```python
class ClassName:#类的名字
    initializer#初始化函数，通常指构造函数
    methods#类中的函数-方法

class Student:#python约定中，首字母大写的名称指的是类
#所有方法都必须至少有一个名为self的参数，并且是该方法的第一个形参。self表示将来要创建的对象本身
    def __init__(self,name,number): #构造方法
        self.name = name #成员变量
        self.number = number #成员变量
#__init__()是 Python 中类的构造方法（initializer 或 constructor），用于在创建类的实例时进行初始化。它的主要作用是在对象被创建时对其进行设置，比如初始化属性。
    def getInfo(self):
        print(self.name,self,number) #成员方法
#getInfo()不需要其他信息传递，只有一个形参self
```

### 创建对象
```python
s1 = Student('Wang','324010')
print("Myname is "+s1.mame",mynumber is"+s1.number)
#输出 Myname is Wang，mynumberis 324010
```
* isinstance()测试一个对象是否为某个类的实例
```python
isinstance(s1,Student)
#输出True
isinstance(s1,str)
#输出False
```

### 访问对象成员
* 访问数据
```python
s1.name
```
* 调用方法
  句点法
```python
s2 = Student("Z","323010")
s2.getInfo()
#Z 323010
```
> 练习：创建学生类

```python
class Student:
    def __init__(self,name,number):
        self.name = name
        self.number = number
        self.Course_Grade = {}
        self.GPA = 0

    def getinfo(self):
        return self.name,self.number
    
s1 = Student("310001","zhangsan")
print(s1.getinfo()) 
#输出('310001','zhangsan')
#函数返回多个值返回一个元组
```
### 属性值
```python
class Student:
    def __init__(self,name,number): 
        self.name = name 
        self.number = number 
        self.gpa = 0 #必须有初始值
    def getInfo(self):
        print(self.name,self,number) 
    def setGpa(self,gpa):
        self.gpa = gpa
```
* 修改属性值
  * 直接通过对象进行修改
    ```python
    s3 = Student("L","322010")
    s3.gpa = 4.0
    ```
  * 通过方法进行设置
    ```python
    s4 = Student("T","321010")
    s4.setGpa() = 4.1
    ```
>pass 表示空语句，占位

## 使用对象编写程序
向量的计算p183

## 封装
**封装**封装就是把数据（属性）和操作这些数据的方法（函数）包裹在类里，并对外部隐藏实现细节，只暴露必要的接口。
### 类成员
* 数据（变量、属性）成员
  * 实例变量：属于实例（对象），只能通过对象名访问
  * 类变量：属于类，通过类名或者对象名都可以访问
```python
    class Car:
        price = 31000 #类变量
        def __init__(self,name):
            self.name = name
            self.color = ''
        
        def setColor(self,color):
            self.color = color
    car1 = ("ad")
    car2 = ("bm")
    print(car1.name,Car.price)#输出 ad 31000
    print(car2.name,car2.price)#输出 bm 31000
```

* 方法（函数）成员-实例方法、类方法、静态方法
  * 实例方法（对象方法）
    在类的方法中第一个参数如果为self，这种方法称为实例方法
```python
    class Person:
    def __init__(self, name):
        self.name = name

    def say_hello(self):  # 对象方法
        print(f"Hello, I'm {self.name}")

    p = Person("Alice")
    p.say_hello()  # 调用对象方法，自动把p作为self传进去
```
  * 类方法(@classmethod)
    类方法是属于类本身的方法，而不是某个实例专用的。它使用 @classmethod 装饰器来定义，第一个参数必须是 cls（class的缩写，表示类本身）。
```python
    #在前面的基础上
    @classmethod
    def getPrice(cls):
        print(cls.price)
    
    car3 = Car("wrw")
    car3.getPrice()
    #31000
```
  * 静态方法（@staticmethod）
    静态方法是类中的一种方法，不需要访问实例（self）；也不需要访问类（cls）；只是被组织在类中，逻辑上“属于这个类”，但不会访问类或实例的属性。
    静态方法一般通过类名来访问，也可以通过实例对象来调用
```python
    
    class Tool:
    @staticmethod
    def say_hello():
        print("Hello from Tool!")

    # 方式一：通过类名调用
    Tool.say_hello()

    # 方式二：通过实例调用
    t = Tool()
    t.say_hello()

    #结果一样，都是 Hello from Tool！
```
### 封装与名字空间
\__dict__ 是 Python 中的一个特殊属性，它是一个字典，用于存储对象的所有可写属性（包括类的属性和实例的属性）。通过 \__dict__，你可以查看或操作对象的内部属性。
```python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

dog = Dog("旺财", "金毛")
#实例的dict
print(dog.__dict__)  # 输出 {'name': '旺财', 'breed': '金毛'}

#类的dict
print(Dog.__dict__)  # 查看类 Dog 的属性和方法
输出{
    '__module__': '__main__',
    '__init__': <function Dog.__init__ at 0x7f3c0f47c040>,
    '__dict__': <attribute '__dict__' of 'Dog' objects>,
    '__weakref__': <attribute '__weakref__' of 'Dog' objects>,
    '__doc__': None
    }
```

## 私有成员和共有成员
什么是成员？
类中的成员包括：

- 属性（变量）
- 方法（函数）
---
### 公有成员（Public Members）
默认情况下，类中的所有成员都是公有的，可以在类的外部直接访问和使用。
```python
class Person:
    def __init__(self):
        self.name = "Xiaoming"  # 公有属性

    def say_hi(self):           # 公有方法
        print("Hi")

p = Person()
print(p.name)    # ✅ 输出 Xiaoming
p.say_hi()       # ✅ 输出 Hi
```
### 私有成员（Private Members）（__xxx）
如果成员前面加上两个下划线 __，就表示这个成员是私有的，不能在类外直接访问。
```python
class Person:
    def __init__(self):
        self.__age = 18      # 私有属性

    def __secret(self):      # 私有方法
        print("这是一个秘密")

p = Person()
print(p.__age)       # ❌ 报错：AttributeError
p.__secret()         # ❌ 报错：AttributeError
```
**注意：私有并非绝对隐藏**,Python 的私有机制是“伪私有"，可以通过“名称重整”访问：
```python
print(p._Person__age)       # ✅ 访问私有属性
p._Person__secret()         # ✅ 调用私有方法
```

### 受保护的成员（_xxx）
表示“受保护的成员（protected）”是一种“约定俗成”的写法，**不会阻止外部访问，但意味着不推荐在类外部使用。主要用于继承中的“父类内部使用”。
```python
class Person:
    def __init__(self):
        self._job = "teacher"  # 单下划线，表示“内部使用”

p = Person()
print(p._job)  # ✅ 可以访问，但通常不建议
```

## 继承和多态
### 继承
继承是面向对象编程的一大特性，子类可以继承父类的属性和方法，这样可以避免重复代码。
```python 
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} 发出一种声音")

class Dog(Animal):
    def speak(self):  # 重写父类方法
        print(f"{self.name}：汪汪汪")

    def fetch(self):  # 子类新增方法
        print(f"{self.name} 去捡球")

# 实例化
a = Animal("动物")
d = Dog("旺财")

a.speak()     # 调用父类方法
d.speak()     # 调用子类重写后的方法
d.fetch()     # 调用子类特有方法

#输出
#动物 发出一种声音
#旺财：汪汪汪
#旺财 去捡球
```
>super()常用于子类中调用父类的方法，即使你重写了这个方法，也可以先执行父类的版本，再执行自己的扩展逻辑。

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} 发出一种声音")

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # 调用父类的 __init__
        self.breed = breed

    def speak(self):
        super().speak()  # 先调用父类的 speak 方法
        print(f"{self.name}：汪汪汪")

# 实例化
d = Dog("旺财", "金毛")
d.speak()

#输出
#旺财 发出一种声音
#旺财：汪汪汪
```
### 多态
多态（Polymorphism）是面向对象编程中的一个重要特性，指的是同一操作（方法）作用于不同的对象时，产生不同的行为或结果。简单来说，多态使得相同的操作可以适用于不同的对象类型。
```python
>>>2+3
5
>>>'2'+'3'
'23'
```