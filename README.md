- //语法甘露(用于模仿静态语言的类构建方式)

```bash
	var anObj = new aClass();
	相当于先创建一个空白对象anObj，然后将其作为this指针调用zClass()。
	当然，这个过程中还有一个关键步骤就是将aClass的prototype属性，赋值给anObj内置的prototype。
```