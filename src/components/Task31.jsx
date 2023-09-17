const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

const messages = [
      {message: 'hello', error: true},  
      {message: 'javascript', error: false},  
      {message: 'expovisiov', error: true},  
      {message: 'react', error: true},  
      {message: 'angular', error: false}, 
      {message: 'es6', error: false}, 
   ];

const words= ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];

function Task31() {
   

   const positive = array.filter(item => {
      if (Math.abs(item) % 2 === 0){
         return item
      } 
   }
   ) 
   let pos = positive.map(item => {
      return(
         <p>
            {item}
         </p>
      )
   });
   

   let newMess = messages.filter(item => {
      if (item.error === false){
         return item
      }
   })
console.log(newMess);
let newMess2 = newMess.map(item =>{
   return (
      <p>
         {item.message}
      </p>     
   )
   
})
let newWords = words.map(item => {
   if( item.length < 5){
      item = '*'
      return (
         <p>
         {item}
         </p>
      )     
   }
   else{
      return item
   }
   
})
console.log(newWords)

// task 4

const sendMessage = (message) =>  {
   return message
 }
 
 const half = (number) => {
   return(
      <p>
         {number / 2}
      </p>
      )
 }
 
 const showConsole = () => {
   console.log('task 4 Экспо');
 }
 
 const concatWords = (first, second) => {
   return first + second;
 }
// task 5
function justText(){
   return 'expo';
} 
function logging(text){
   console.log('task 5 ', text);
} 

function add(x,y) {
   const z = 3;
   return(
   <p>
      {z * x * y}
   </p>
   )
}

function onlyPositive(number){
   if(number < 0) {
      console.log(false);
   }
   console.log(true);
}
   return (
      <div>
         <h2>Lesson 31</h2>
         <h3>Задача 1</h3>
         {pos}

         <h3>Задача 2</h3>
         {newMess2}

         <h3>Задача 3</h3>
         {newWords}

         <h3>Задача 4</h3>
         {sendMessage('lorem SendMessage')}
         {half(7)}
         {showConsole()}
         {concatWords(5, 6)}

         <h3>Задача 5</h3>
         {justText()}
         {logging('text5')}
         {add(3, 4)}
         {onlyPositive(5)}
      </div>
   )
   }

export default Task31;