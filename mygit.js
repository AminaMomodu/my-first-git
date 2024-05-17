let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city");
if (city === "paris") {
  alert("It is currently 20°C (68°F) in paris with a humidity of 80%");
}
if (city === "tokyo") {
  alert("It is currently 17°C (62°F) in tokyo with a humidity of 50%");
}
if (city === "lisbon") {
  alert("It is currently 30°C (86°F) in lisbon with a humidity of 20%");
}
if (city === "san francisco") {
  alert("It is currently 20°C (68°F) in san francisco with a humidity of 100%");
}
if (city === "oslo") {
  alert("It is currently -5°C (23°F) in oslo with a humidity of 20%");
} else {
  alert(
    "Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+auchi"
  );
}
