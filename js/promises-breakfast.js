const breakfastPromise = new Promise( (resolve, reject) => {
   setTimeout(() => {
      reject('Oh no!');
   }, 3000); 
});

console.log(breakfastPromise);
breakfastPromise.then( val => console.log(val)).catch( () => {
   console.log(Error);
});