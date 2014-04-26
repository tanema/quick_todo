(function(){

  function Mammal(name){
    this.name = name;
  }

  Mammal.prototype.fucks = 4;
  Mammal.prototype.say_name = function(){
    alert(this.name);
  }

  function Dog(name, color){
    this.color = color;
    Mammal.call(this, name);
  }
  Dog.prototype = new Mammal();

  Dog.prototype.bark = function(){
    alert("bark");
  }

  function Cat(name, color){
    this.color = color;
    this.name = "tim";
  }
  Cat.prototype = new Mammal();

  Cat.prototype.bark = function(){
    alert("meow");
  }

  function test(blah){
    alert(blah);
  }

  test("heya");
  test.call(null, "heya");
  test.apply(null, ["heya"]);

  var new_dog = new Dog("barky", "red");
  new_dog.fuck = function(){
    return 1;
  }
  new_dog.say_name();
  new_dog.bark();

  var a = {
    test: "var test",
    1: "test"
  }
  a.other = function(){}
  a["test"]  //"var test"
  a.test //"var test"
  a[1] // "test"
  a.1 //wrong  error
  a.other();
  a["other"]();

  var b = "";
  b.other = function(){};

  window.Mammal = Mammal;


  String.prototype.convertToFuck = function(){
    this = fuck;
  }
  var t = "this is a test string";
  t.convertToFuck();
  t // "fuck"
})()
