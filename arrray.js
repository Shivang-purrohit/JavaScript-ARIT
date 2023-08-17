// const array = ["hello", 1, null, true]
// const array1 = [4, 1, 3, 2]
// array[4]= "new element added" 
// console.log(array[0])
// console.log(array[1])
//  console.log(array[2])
//  console.log(array[3])
//  console.log(array[4])
// console.log(typeof array1)
//  console.log( "length of array: " , array.length)
//  array[4]= "new element added"
// const hello = () => {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         console.log(element)
//     }
   
// }

//  hello()

// const arr = [["shivang" ,26],["bss",28]]

//  console.log(arr[1])

//  const a = [1,2,3,4]
//  const b = [5,6,7,8]

// const con = a.concat(b)

//  console.log(con)

//Sort
 const a = [5,6,7,8,3,2,1]
 const comp =(a, b)=> {
     return a - b
 }
  a.sort(comp)

 console.log(a)

// //Splice()
 const b = [5,6,7,8,3,2,1]
 b.splice(0, 4, 50, 60, 70, 80 )
 console.log(b)

//Slice

const value = [5,6,7,8,3,2,1]

const newValue = value.slice(2,5)

console.log(newValue)
