function number_cardinality(number) {
	if (number % 10 === 0) {
		return "zero";
	} else if (number % 2 === 0) {
		return "five";
	} else if (number % 10 === 5) {
		return "even";
	} else {
		return "odd";
	}
}

console.log(number_cardinality(100));  // Resultado: "zero"
console.log(number_cardinality(88));  // Resultado: "five"
console.log(number_cardinality(155));   // Resultado: "even"
console.log(number_cardinality(99));   // Resultado: "odd"

//Vamos profe que se puede!!! c:
// Qué emocionante el desafioooo!!