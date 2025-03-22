//evaluate whether there is the same amount of x and os in a string

function ExOh(str) { 

    let arr = []; 
  
    let strMap = new Map(); 
  
    for(let i=0; i<str.length; i++){
      if(strMap.has(str[i])){
          strMap.set(str[i], strMap.get(str[i])+1)
        } else {
          strMap.set(str[i], 1)
        }
      }
  
    for(let [key, value] of strMap){
      arr.push(value)
    }
  
    for(let i=0; i<arr.length; i++){
       if(arr[i]===arr[i + 1]){
  
         return true
       } else {
  
         return false
       }
  
        
      }
  
  
    }


    //Identify the number in the array that appears the most w

    function SimpleMode(arr) { 

        let arrMap = new Map(); 
      
      
        let max = 0; 
      
        let most = {}; 
      
        for(let i=0; i<arr.length; i++){
          if(arrMap.has(arr[i])){
      
            arrMap.set(arr[i], arrMap.get(arr[i])+1)
          } else {
      
            arrMap.set(arr[i], 1)
          }
         }
      
         for(let [key, value] of arrMap){
           if(value > max){
      
             max = value
      
             most = key; 
           }
      
         }
      
        if(most === 1){
      
          return -1
        } else {
      
          return most
      
      
        }
           
       
      
      
      }
         
      // keep this function call here 
      console.log(SimpleMode(readline()));


//calculates the sum of all the numbers at the even indexes of array and then multiplies that sum by last number in the array 

function evenLast(numbers) {
  let count = 0; 
  
  let last = numbers[numbers.length-1]
  
  let newArr = []; 
  
  
 if(numbers.length < 1){
   
   return 0
 } else {
   
   for(let i=0; i<numbers.length; i++){
    if(i % 2 === 0){
      
      newArr.push(numbers[i])
    }
  }
  
  for(let i=0; i<newArr.length; i++){
  
    count+= newArr[i]
  }
  
  
  return count * last
  
   
   
   
 }
  
  
  
  
}