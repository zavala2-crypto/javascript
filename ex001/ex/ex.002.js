/*
var a = new Array("banana, cherry, apple")
a.sort()
*/
var a = [5,2,4,9]
a.sort()
a.sort(function(a,b) {
    return a-b
});
a.sort(function(a,b) {return b-a}) // Inverte a ordem numerica