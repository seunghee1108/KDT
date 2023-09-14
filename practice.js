let sosa = "소사무엘";

let nameArrary = [];
for(let i = 0; i < sosa.length; i++){
  console.log(sosa[i]);
  nameArrary[i] = sosa[i];

  nameArrary[0] = "공";
  console.log(nameArrary);
}

let makeText = "";

for(let j = 0; j < nameArrary.length; j++) {
  makeText = makeText + nameArrary[j];
}

console.log(makeText);
