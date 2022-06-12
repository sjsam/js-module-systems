const sayHello = function(name){
  console.log('Hello ' + name);
}

const sayBingo = function(name){
  console.log('Bingo ' + name);
}

module.exports = {
  sayHello:sayHello,
  sayBingo:sayBingo 
}
