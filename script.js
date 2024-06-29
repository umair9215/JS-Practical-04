
let lowest = 5;
let highest = 20;
let array = [1, 20, 40, 3, 4, 5];
for (var i = 0; i <= 5; i++) {
  if (array[i] > highest) {
    console.log("It is the highest value");
  }
   else if (array[i] < lowest) {
    console.log("It is the lowest value");
  }
   else {
    console.log("It is in between highest and lowest");
  }
}
