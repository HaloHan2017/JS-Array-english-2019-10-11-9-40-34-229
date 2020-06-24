// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
a是字符串，b是数组

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function squireArr(arr){   
  return arr.map(function(a){return a*a});
};
a = squireArr(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO 
// case 1 output: 'Red Green White Black'
console.log(colors.join(" "));
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join("+"));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(","));


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function sortNumber(a,b){return b-a};
console.log(a.sort(sortNumber));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function maxCountElement(arr) {  
   var obj={};
   for(var i=0;i<arr.length;i++){  
       var key=arr[i];  
       if(obj[key]){
           obj[key]++;  
       }else{  
           obj[key]=1;
       }  
   }  
 
   var maxCount=0;
   var maxElement=arr[0];
   for(var key in obj){  
       if(maxCount<obj[key]){  
           maxCount=obj[key]; 
           maxElement=key;  
       }  
   }  
   return "出现次数最多的元素:"+maxElement;  
}
maxCountElement(a);
