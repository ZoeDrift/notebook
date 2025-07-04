# 文件
## 文件基本操作
> 打开→读写→关闭
### 打开
```fp=open(filename,mode[,...])```
* 打开模式（mode）
  |打开模式|含义|
  |-----------|-----------------|
  |'r'|只读，不存在返回异常|
  |'w'|覆盖写，不存在创建，存在完全覆盖原文件|
  |'x'|创建写，不存在创建，存在返回异常FileExistsError|
  |'a'|追加写，不存在创建，存在追加|
  |'b'|二进制|
  |'t'|文本文件模式，默认值|
  |'+'|与r/w/x/a一同使用|
* 路径
  * 绝对路径：\或者```\\```或者/
  * 相对路径

### 关闭
* file.close()方法
```python
file = open("my_file.txt","w")
try:
    file.write("xdcacdced.\n")
finally:
    file.close()
    print("已关闭")
```
* with open
```python
with open('file.txt','r') as file:
    file.write("使用with语句写入数据。\n")
print("文件已自动关闭")
```
### 文件的读取操作
* ```file.read()``` 读入整个文件内容，如果给出参数，读入前size长度的字符串
* ```file.readline()``` 读入一行内容，如果给出参数，读入该行前size长度的字符串或者字节流，需要手动控制循环
* ```file.readlines()``` 读入所有行，返回以每行为元素形成的列表

### 文件的写入操作
* ```file.write(s)``` 写入一个字符串或字节流
* ```file.writelines(lines)``` 将存放字符串的可迭代对象（列表）写入文件

### 控制文件读写位置
* ```file.seek(offset,whence)``` 指针，offset：从该值开始；whence：0-开头；1-当前位置；2-文件结尾
* ```file.tell()``` 返回文件对象当前的文件指针位置

### 迭代文件对象
```python
with open('file.txt','r') as f:
  for line in f:
    #处理每一行
    print(line.strip())#去掉行尾的换行符
```
### 文件复制
```python
source = open('cj.txt','r')
back = open('cjback','w')
s = source.read()
back.write(s)
source.close()
back.close()
```