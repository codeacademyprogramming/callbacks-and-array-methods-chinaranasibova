function every(arr=[],cb){
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i]))  count++;
     }
     if(count==arr.length) return true;
     else return false
 }


   function evenNumbers(number){
       return number%2===0;
   }


   console.log( every([2,4,6,8],evenNumbers))