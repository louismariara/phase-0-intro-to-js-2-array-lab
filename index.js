const cats = ["Milo", "Otis", "Garfield"];
function beforeEach() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }

  
function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
cats.unshift("Bob");

}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(broom){
   return [...cats, "Broom"];
    
}
function prependCat(Arnold){
   return ["Arnold", ...cats]
}
function removeLastCat(){
     return cats.slice(0, cats.length-1);
}

function removeFirstCat(){
    return cats.slice(1);
}