/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even
 integers except for a single integer N.
 Write a method that takes the array as an argument and returns this "outlier" N.
*/


function findOutlier(integers){
  let outlier;
  let oddArray = [];
  let evenArray = [];
  
 integers.map((i) => {
   if(i%2 == 0) {
     evenArray.push(i);
   }else if(i%2 != 0) {
     oddArray.push(i);
   }
 });
    
 if(evenArray.length === 1){
   outlier = evenArray[0];
 }else {
   outlier = oddArray[0];
 }
  
 return outlier;
}

//best practices
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}