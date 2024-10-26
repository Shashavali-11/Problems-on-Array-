//  1) Question ?
var arr1 = [3, 5, 10, 15, 23, 22, 25, 35, 56] // Expected o/p => [5, 10, 15, 25, 35]
var newarr1 = []
for(i in arr1){
    if(arr1[i]%5 == 0){ // 3 == 15
        newarr1.push(arr1[i])
    }
}
console.log(newarr1) // O/P is -> [ 5, 10, 15, 25, 35 ]
// -------------------------------------------------------->



//  2) Question ?
var arr2 = ["htmL", "csS", "javaScrIPT", "react", "angulaR", "nadE", "EXPREss"] // Expected o/p => ["htmL", "csS", "javaScrIPT", "angulaR", "nodE"]
var result = []
var str2 = ""
for(i in arr2){
    var len = arr2[i]
    var last = len[len.length - 1]
    if(last >= "A" && last <= "Z"){
        // str2 = str2 + arr2[i]
        result.push(arr2[i])
    }
}
console.log(result) // O/P is -> [ 'htmL', 'csS', 'javaScrIPT', 'angulaR', 'nadE' ]
// console.log(str2)
// -------------------------------------------------------->




//  3) Question ?
var arr3 = ["html", "css", "js", "react", "angular"] // Expected o/p => ["HTML", "JS", "ANGULAR"]
var newarr3 = []
for(i in arr3){
    if(i%2 == 0){
        newarr3.push(arr3[i].toUpperCase())
    }
}
console.log(newarr3) // O/P is -> [ 'HTML', 'JS', 'ANGULAR' ]
