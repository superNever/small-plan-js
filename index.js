//语法甘露(用于模仿静态语言的类构建方式)
function NewPro(aClass,aPrams){
	function _new(){
		aClass.Create.apply(this,aPrams);
	}
	_new.prototype = aClass;
	return new _new();
}
//demo
var Person = {
	Create:function(name,age){
		this.name = name;
		this.age = age;
	},
	SayHello:function(){
		alert('Hello: '+this.name)
	},
	HowOld:function(){
		alert(this.name+' is '+this.age)
	}
}

var Bill = NewPro(Person,['Bill',13]);
