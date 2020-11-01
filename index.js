// After submitting their initials, the highscore section will be rendered
// which will show all previous scores ranked in order with the corresponding
// initials. The user will then have then option to clear the highscore list and
// go back to the start of the quiz.

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
	a: "e.target.preventDefault()",
	b: "e.preventDefault()",
	c: "e.stopPropagation()",
	d: "e.target.stopPropagation()",
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
const correctMsg = document.getElementById("correct");
const incorrectMsg = document.getElementById("incorrect");

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
		answer: "b",
	},
	7: {
		question: questionEight,
		code: "",
		choices: questionEightChoices,
		answer: "d",
	},
};

const highscores = localStorage.setItem("highscore", {});

var currentQuestion = 0;
var numCorrect = 0;
var result;

const init = () => {
	questionSection.style.display = "none";
	resultSection.style.display = "none";
	highscoreSection.style.display = "none";
};

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

const handleResponse = event => {
	if (event.target.id === questionObject[currentQuestion].answer) {
		numCorrect++;

		correctMsg.style.display = "block";
	} else {
		incorrectMsg.style.display = "block";
	}
};

const calculateResult = () => {
	result = (numCorrect / 8) * 100;
	result = result.toFixed(1);

	score.textContent = `${result}%`;
};

startButton.addEventListener("click", () => {
	startSection.style.display = "none";
	questionSection.style.display = "block";

	renderQuestion();
});

optionButtons.addEventListener("click", event => {
	if (event.target.matches("button")) {
		handleResponse(event);

		setTimeout(() => {
			if (currentQuestion > 6) {
				currentQuestion = 0;

				questionSection.style.display = "none";
				resultSection.style.display = "block";

				calculateResult();
			} else {
				currentQuestion++;

				renderQuestion();
			}
		}, 1000);
	}
});

resultButton.addEventListener("click", event => {
	event.preventDefault();

	if (!localStorage.getItem("highscores")) {
		const newHighscoreStore = {};

		newHighscoreStore[initials.value] = result;

		localStorage.setItem("highscores", JSON.stringify(newHighscoreStore));
	} else {
		const highscoreStore = JSON.parse(localStorage.getItem("highscores"));

		highscoreStore[initials.value] = result;

		localStorage.setItem("highscores", JSON.stringify(highscoreStore));
	}

	resultSection.style.display = "none";
	highscoreSection.style.display = "block";

	numCorrect = 0;
});

returnButton.addEventListener("click", () => {
	highscoreSection.style.display = "none";
	startSection.style.display = "block";
});

init();
