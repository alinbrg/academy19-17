// დავალება:
// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.
function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}

	// console.log(num % 2);
	// return num % 2 === 0;
}

// console.log(isEven(4));
// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის პერიმეტრს.
function rectanglePer(a = 0, b = 0) {
	if (a === undefined && b === undefined) return "no params";
	return 2 * (a + b);
}

// console.log(rectanglePer(4, 5));

// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის პერიმეტრს. პერიმეტრის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
function squarePer(a) {
	return rectanglePer(a, a);
}

// console.log(squarePer(5));

// 4.
// Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
// Math.floor() - ამრგვალებს რიცხვს ქვემოთ, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
// Math.ceil()
// დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.

function getRandonNum() {
	return Math.round(Math.random() * 100);
}

// console.log(getRandonNum());
// 5. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება
function getCurrencySymbolFromCode(code) {
	let symbol = "";
	const lowerCode = code.toLowerCase();
	// console.log(lowerCode);
	switch (lowerCode) {
		case "usd":
			symbol = "$";
			break;
		case "eur":
			symbol = "€";
			break;
		case "gel":
			symbol = "ლ";
			break;

		default:
			symbol = "";
			break;
	}

	return symbol;
}

// console.log(getCurrencySymbolFromCode("USd"));

// 6. შექმენით ობიექტების 5 ელემენტიანი მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).

const students = [
	{
		name: "tea",
		age: 25,
	},
	{
		name: "gio",
		age: 20,
	},
	{
		name: "ruso",
		age: 25,
	},
	{
		name: "lasha",
		age: 45,
	},
	{
		name: "nino",
		age: 25,
	},
];

function getYoungestPerson(arr) {
	const sortedArr = arr.sort((a, b) => {
		return a.age - b.age;
	});

	return sortedArr[0];
}

// console.log(getYoungestPerson(students));

const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "https://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];

// selectors
//siblings, parents, children
const sectionForTesting = document.getElementById("for-testing");
const button = document.querySelector(".button:nth-child(3)");
const buttonsDiv = document.querySelector(".buttons");
const buttons = buttonsDiv.querySelectorAll(".button");
// console.log(buttons);

// create elements
const paragraph = document.createElement("p");
const paragraph2 = document.createElement("p");
const paragraph3 = document.createElement("p");

// text/content editing
// innerText, textContent, innerHTML
paragraph.innerText = '<span class="button">span</span> text from innerhtml';
paragraph2.textContent = `text from js, 2`;
paragraph3.innerHTML = '<span class="button">span</span> text from innerhtml';

// console.log(paragraph, paragraph2, paragraph3);

// add into html
// append, prepend, appendChild, insertAdjacentElement, before, after

// sectionForTesting.appendChild(paragraph3);
// sectionForTesting.append(paragraph3, paragraph, paragraph2);
// sectionForTesting.appendChild(button);

// remove elements
// button.remove()

// attributes
// get, set, remove, has

const changeSectionBg = document.querySelector("#change-section-bg");
const input = document.querySelector("input");

console.log(changeSectionBg.getAttribute("href"));
// changeSectionBg.setAttribute("href", "#");
// console.log(changeSectionBg.getAttribute("href"));

input.setAttribute("required", "true");
input.setAttribute("type", "password");
input.removeAttribute("required");

// console.log(input);

// styles
// inline styles
// button.style.padding = "20px";
// button.style.backgroundColor = "red";

// class
// add, remove, toggle, replace

// button.classList.add("red");
// button.classList.remove("red");
// button.classList.replace('button', "red");
// button.classList.toggle("red");

// events
// add, remove

const changeTitleBtn = document.querySelector("#change-title");
const title = document.querySelector("h1");

function classChange(event) {
	event.stopPropagation();
	// console.log(event.target);
	event.target.classList.toggle("red");
	title.innerText = "new text";
}

function renderCharacters() {
	const charachtersHTML = characters
		.map((char) => {
			return `
							<div class="character">
								<img src="${char.image}" alt="${char.actor}">
								<h3>${char.first_name}</h3>
								<p></p>
							</div>	
						`;
		})
		.join("");

	console.log(charachtersHTML);

	document.querySelector(".characters").innerHTML = charachtersHTML;
}

changeTitleBtn.addEventListener("click", classChange);
// changeTitleBtn.removeEventListener("click", classChange);
button.addEventListener("click", (e) => {
	e.preventDefault();

	renderCharacters();
});

console.log(countries);
