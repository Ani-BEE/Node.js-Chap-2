var foo = {bas: 123};
var bar ={ bas: foo.bas};
bar.bas = 456; //reomve 123 to 456

console.log(foo.bas);
document.getElementById('txtInput').value = bar.bas;
