// Question 1
const questionOne =
	"What principle of Object-Oriented Programming explains the following behavior?";

const codeOne = `
let Cat = (() => {
    let privateProps = new WeakMaps();
    class Cat {
        constructor(name) {
            this.name = name;
            privateProps.set(this, { hungry: true });
            this.feed = function() {
                privateProps.set(this, { hungry: false });
            }
        }
        this.isHungry = function() {
            if (private.get(this).hungry) {
                console.log("MEROWWW!");
            } else {
                console.log("Purrr...");
            }
        }
    }
    return Cat;
}()

const salem = new Cat("Salem");
salem.hungry = false;
salem.isHungry();
// Logs "MEROWWW!"
salem.feed();
salem.isHungry();
// Logs "Purrr..."
// You need to ACTUALLY feed your cat...
`;

const questionOneChoices = {
	a: "Abstraction",
	b: "Encapsulation",
	c: "Inheritance",
	d: "Polymorphism",
};

// Question 2
const questionTwo =
	"What principle of Object-Oriented Programming underlines why the following commands still work after changing the code from version A to version B?";

const codeTwo = `
// Commands
const me = new Person("Kole", "Gasior");
console.log(me.fullName);
// Logs "Kole Gasior"

// Code: Version A
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return \`\${this.firstName} \${this.lastName}\`;
    }
}

// Code: Version B
class Person {
    constructor(firstName, lastName) {
        this.name = { firstName, lastName };
    }

    get fullName() {
        return \`\${this.name.firstName} \${this.name.lastName}\`
    }
}
`;

const questionTwoChoices = {
	a: "Polymorphism",
	b: "Delegation",
	c: "Bubbling",
	d: "Abstraction",
};

// Question 3

const questionThree =
	"What principle of Object-Oriented Programming explains the output below based on the code shown below?";

const codeThree = `
class Person {
    constructor(name) {
        this.name = name;
        this.greeting = function() {
            console.log('Hello!');
        }
    }
}

class Developer extends Person {
    constructor(name, focus) {
        super();
        this.name = name;
        this.focus = focus;
    }
}

const me = new Developer("Kole Gasior", "Back-End JavaScript");
me.greeting();
// Logs "Hello!"
console.log(me.name);
// Logs "Kole Gasior"
console.log(me.focus);
// Logs "Back-End JavaScript"
`;

const questionThreeChoices = {
	a: "Inheritance",
	b: "Encapsulation",
	c: "Abstraction",
	d: "Delegation",
};

// Question 4

const questionFour =
	"What principle of Object-Oriented Programming is illustrated in the following code?";

const codeFour = `
class Shape {
    area() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    } 
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}

const circle = new Circle(3);
const rect = new Rectangle(2, 3);
circle.area();
// Logs "28.274333882308138"
rect.area();
// Logs "6"
console.log(circle.toString());
// Logs "Circle"
console.log(rect.toString());
// Logs "Rectangle"
`;

const questionFourChoices = {
	a: "Object-Oriented Programming",
	b: "Abstraction",
	c: "Encapsulation",
	d: "Polymorphism",
};

// Question 5

const questionFive = "What is the following code an example of?";

const codeFive = `
// ...
<div id="buttons">
  <button>Button One</button>
  <button>Button Two</button>
  <button>Button Three</button>
</div>

<script>
  document.getElementById('buttons')
    .addEventListener('click', event => {
      if (event.target.matches('button')) {
        console.log(event.target.innerText);
      }
    });
</script>
// ...
`;

const questionFiveChoices = {
	a: "Delegation",
	b: "Bubbling",
	c: "Destructive Method",
	d: "Capturing",
};

// Question 6
const questionSix =
	"What method would you call to prevent the alerts from being called from the div and form elements when the p element is clicked?";

const codeSix = `
// ...
<form onclick="alert('form')">Form
    <div onclick="alert('div')">Div
    <p>Paragraph</p>
  </div>
</form>
<script>
    document.querySelector("p").addEventListener('click', e => {
        // YOUR CODE HERE
        alert('p')
    })
</script>
// ...
`;

const questionSixChoices = {
	a: "e.target.preventDefault()",
	b: "e.preventDefault()",
	c: "e.stopPropagation()",
	d: "e.target.stopPropagation()",
};

// Question 7
const questionSeven =
	"What method would call below to prevent the form from being submitted?";

const codeSeven = `
// ...
<form>
    <label for='email'>Email</label>
    <input name='email' type='text' id='email' />
    <label for='password'>Password</label>
    <input name='password' type='password' id='password />
    <button type='submit>Submit</button>
</form>
<script>
    document.querySelector('form).addEventListener('click', e => {
        // YOUR CODE HERE
        // ...
    })
</script>
// ...
`;

const questionSevenChoices = {
	a: "e.stopPropagation()",
	b: "e.target.stopPropagation()",
	c: "e.target.preventDefault()",
	d: "e.preventDefault()",
};

// Question 8
const questionEight = `
Which of the following corresponds to the following definition: 
A programming paradigm based the concept of "objects", which can contain data and code:
data in the form of fields (often known as attributes or properties), and code, in the
form of procedures (often known as methods).
`;

const questionEightChoices = {
	a: "Polymorphism",
	b: "Delegation",
	c: "Abstraction",
	d: "Object-Oriented Programming",
};

const startSection = document.getElementById("start-section");
const questionSection = document.getElementById("question-section");
const resultSection = document.getElementById("result-section");
const highscoreSection = document.getElementById("highscore-section");
const question = document.getElementById("question");
const questionCode = document.getElementById("question-code");
const score = document.getElementById("score");
const initials = document.getElementById("initials");
const startButton = document.getElementById("start-button");
const optionButtons = document.getElementById("multi-choice-buttons");
const resultButton = document.getElementById("result-button");
const returnButton = document.getElementById("return-button");
const clearButton = document.getElementById("clear");
const correctMsg = document.getElementById("correct");
const incorrectMsg = document.getElementById("incorrect");
const highscoreList = document.getElementById("highscore-list");
const highscoreLink = document.getElementById("highscore-link");
const timer = document.getElementById("timer");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");

const questionObject = {
	0: {
		question: questionOne,
		code: codeOne,
		choices: questionOneChoices,
		answer: "b",
	},
	1: {
		question: questionTwo,
		code: codeTwo,
		choices: questionTwoChoices,
		answer: "d",
	},
	2: {
		question: questionThree,
		code: codeThree,
		choices: questionThreeChoices,
		answer: "a",
	},
	3: {
		question: questionFour,
		code: codeFour,
		choices: questionFourChoices,
		answer: "d",
	},
	4: {
		question: questionFive,
		code: codeFive,
		choices: questionFiveChoices,
		answer: "a",
	},
	5: {
		question: questionSix,
		code: codeSix,
		choices: questionSixChoices,
		answer: "c",
	},
	6: {
		question: questionSeven,
		code: codeSeven,
		choices: questionSevenChoices,
		answer: "d",
	},
	7: {
		question: questionEight,
		code: "",
		choices: questionEightChoices,
		answer: "d",
	},
};

// currentQuestion is used to access the objects contained within
// questionObject which and will be referred to below as the question index
var currentQuestion;
var numCorrect;
var result;
var interval;
var totalSeconds;
var minutes;

// Initialization function
const init = () => {
	questionSection.style.display = "none";
	resultSection.style.display = "none";
	highscoreSection.style.display = "none";
	timer.style.display = "none";
};

// Renders a question depending on the question index
const renderQuestion = () => {
	const multipleChoiceOptions = ["a", "b", "c", "d"];

	correctMsg.style.display = "none";
	incorrectMsg.style.display = "none";

	question.textContent = questionObject[currentQuestion].question;
	questionCode.innerText = questionObject[currentQuestion].code;

	multipleChoiceOptions.forEach(option => {
		const button = document.getElementById(option);

		button.textContent = questionObject[currentQuestion].choices[option];
	});
};

// Increments the number of questions the user has answered correctly and
// conditionally renders to the page whether the user has answered
// correctly or incorrectly on the current question
const handleResponse = event => {
	if (event.target.id === questionObject[currentQuestion].answer) {
		numCorrect++;

		correctMsg.style.display = "block";
	} else {
		// Deduct time if user answers incorrectly
		deductTime();

		incorrectMsg.style.display = "block";
	}
};

// Calculates the result after user finishes answering
// all eight questions
const calculateResult = () => {
	result = (numCorrect / 8) * 100;
	result = result.toFixed(1);

	score.textContent = `${result}%`;
};

// Renders the result section. Executed when user answers all questions
// or time has run out
const renderResult = () => {
	questionSection.style.display = "none";
	resultSection.style.display = "block";

	calculateResult();
	clearInterval(interval);
	timer.style.display = "none";
};

// Sorts highscores from local storage
const sortScores = highscores => {
	return Object.keys(highscores).sort((a, b) => {
		return highscores[b] - highscores[a];
	});
};

// Setup Timer
const setupTimer = () => {
	timer.style.display = "block";
	minutes = 8;
	totalSeconds = minutes * 60;

	displayMinutes.textContent = minutes;
	displaySeconds.textContent = "00";

	countdownSeconds();
};

// Start Timer
const countdownSeconds = () => {
	interval = setInterval(() => {
		totalSeconds--;
		const seconds = totalSeconds % 60;

		// When time runs out, stop the timer and render the result
		if (minutes === 0 && seconds === 0) {
			clearInterval(interval);
			renderResult();
		}

		if (seconds === 59) {
			countdownMinutes();
		}

		if (seconds < 10) {
			displaySeconds.textContent = "0" + seconds.toString();
		} else {
			displaySeconds.textContent = seconds;
		}
	}, 50);
};

// Countdown minutes
const countdownMinutes = () => {
	minutes--;
	displayMinutes.textContent = minutes;
};

// Deduct 20 seconds from the timer
const deductTime = () => {
	const seconds = totalSeconds % 60;

	// If time deduction exceeds amount of time left,
	// stop the timer and render the result
	if (minutes === 0 && seconds < 20) {
		clearInterval(interval);
		renderResult();
	}

	// If there is less than 20 seconds for the seconds portion
	// of the timer, subtract off a minute before rendering seconds
	// to the timer
	if (seconds < 20) {
		countdownMinutes();
	}

	totalSeconds -= 20;

	if (seconds < 10) {
		displaySeconds.textContent = "0" + seconds.toString();
	} else {
		displaySeconds.textContent = seconds;
	}
};

// Redirect directly to highscore section and clear the timer
highscoreLink.addEventListener("click", () => {
	startSection.style.display = "none";
	questionSection.style.display = "none";
	resultSection.style.display = "none";
	highscoreSection.style.display = "block";

	clearInterval(interval);
	timer.style.display = "none";
});

// Starts the quiz
startButton.addEventListener("click", () => {
	// Reset question index and number of question correct
	currentQuestion = 0;
	numCorrect = 0;
	initials.value = "";

	startSection.style.display = "none";
	questionSection.style.display = "block";

	renderQuestion();
	setupTimer();
});

optionButtons.addEventListener("click", event => {
	if (event.target.matches("button")) {
		for (let i = 0; i < optionButtons.children.length; i++) {
			optionButtons.children[i].disabled = true;
		}

		// Display whether or not the user was correct in their answer
		handleResponse(event);

		// Wait one second and if the user answered the last question,
		// continue to results page
		setTimeout(() => {
			if (currentQuestion > 6) {
				renderResult();

				// Otherwise, increment the question index and continue to
				// the next question
			} else {
				currentQuestion++;
				renderQuestion();
			}

			for (let i = 0; i < optionButtons.children.length; i++) {
				optionButtons.children[i].disabled = false;
			}
		}, 1000);
	}
});

resultButton.addEventListener("click", event => {
	event.preventDefault();
	var highscoreStore;

	// If there is no current local storage for results, create one
	if (!localStorage.getItem("highscores")) {
		highscoreStore = {};

		highscoreStore[initials.value] = result;

		localStorage.setItem("highscores", JSON.stringify(highscoreStore));

		// Otherwise, retrieve the local storage object and add the result with
		// corresponding user initials
	} else {
		highscoreStore = JSON.parse(localStorage.getItem("highscores"));

		highscoreStore[initials.value] = result;

		localStorage.setItem("highscores", JSON.stringify(highscoreStore));
	}

	// Update highscores list by resetting the previous list, sorting the scores,
	// then appending the sorted scores to the highscore list as new list items
	highscoreList.innerHTML = "";
	const sortedInitals = sortScores(highscoreStore);

	sortedInitals.forEach(initial => {
		const listItem = document.createElement("li");
		listItem.innerHTML = `${initial}: ${highscoreStore[initial]}`;
		highscoreList.appendChild(listItem);
	});

	// Continue to the highscore section
	resultSection.style.display = "none";
	highscoreSection.style.display = "block";
});

returnButton.addEventListener("click", () => {
	// Return to the start of the quiz
	highscoreSection.style.display = "none";
	startSection.style.display = "block";
});

clearButton.addEventListener("click", () => {
	// Clear highscores list on screen and in local storage
	localStorage.setItem("highscores", "");
	highscoreList.innerHTML = "";
});

init();
