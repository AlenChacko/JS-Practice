let flight = "BNB289";

let person = {
  name: "John",
  passport: 12342345,
};

function checkIn(flightNum, passenger) {
  flightNum = "BNB999";
  passenger.name = `Mr.${passenger.name}`;

  if (passenger.passport === 12342345) {
    console.log(
      `Hello ${passenger.name}, you are checked for flight ${flightNum}`
    );
  } else {
    console.log("invalid passport");
  }
}

checkIn(flight, person);

console.log(flight); //value not changed
console.log(person); // name changed
