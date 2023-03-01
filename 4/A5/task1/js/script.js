//ДА это возможно если они будут ссылаться на один и тот же объект
function A() { return A; }
function B() { return A; }
let a = new A();
let b = new B();
alert(a == b); // true
