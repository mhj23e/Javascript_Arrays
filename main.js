// Question #1

let dog_string = ["Hello Max, my name is Dog, and I have purple eyes!"];
let dog_name = ["Max","HAS","Purple","dog"];
const matched = []

function findWords(list,names){
    for (let i = 0; i < Object.keys(list).length; i++) {
        for (let j = 0; j < Object.keys(names).length; j++) {
           if (Object.keys(list)[i].match(Object.keys(names)[j])) {
                matched.push(names[j]);
           } else {
                matched.push("No match");
           }
        }
    }
    return matched
}

console.log(findWords(dog_string,dog_name))

// Question #2

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(ar){
    for (let j = 0; j < Object.keys(ar).length; j++) {
        if (j % 2 == 0) {
            ar.splice(j,1,"even index");
        }
    }    
    return ar
}

console.log(replaceEvens(arr))

// Even or Odd

function even_or_odd(num) {
    if (num % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  