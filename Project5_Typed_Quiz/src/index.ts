type QuestionMetadata = [number, number];

interface BaseQuestion {
    id: number,
    text: string,
    answer: string,
    metadata: QuestionMetadata
}

interface MultipleChoiceQuestion extends BaseQuestion {
    type: "multiple-choice",
    options: string[]
}

interface TrueFalseQuestion extends BaseQuestion {
    type: "true-false"
}

type Question = MultipleChoiceQuestion | TrueFalseQuestion;

class QuizEngine {
    private questions: Question[] = []
    private score: number = 0;

    addQuestion(q: Question): void {
        this.questions.push(q);
    }

    checkAnswer(id: number, userAnswer: string): boolean {
        const question = this.questions.find(q => q.id === id);

        if (!question) {
            console.error("Question not found");
            return false;
        }

        // Narrowing the type using a switch statement on the discriminant ('type')
        switch (question.type) {
            case "multiple-choice":
                // Inside this block, TS knows 'question' has 'options'
                console.log(`Checking multiple choice options: ${question.options.join(", ")}`);
                break;
            case "true-false":
                // Inside this block, TS knows 'options' does NOT exist
                console.log("Checking true/false logic...");
                break;
        }

        const isCorrect = question.answer.toLowerCase() === userAnswer.toLowerCase();
        
        if (isCorrect) {
            const [difficulty, points] = question.metadata; // Destructuring the Tuple
            this.score += points;
            console.log(`✅ Correct! You earned ${points} points at difficulty ${difficulty}.`);
        } else {
            console.log(`❌ Incorrect. The right answer was: ${question.answer}`);
        }

        return isCorrect;
    }

    getCurrentScore(): number {
        return this.score;
    }
}

// --- TEST SUITE ---
const myQuiz = new QuizEngine();

// Adding Questions
myQuiz.addQuestion({
    id: 1,
    type: "multiple-choice",
    text: "Which keyword is used to define a constant in TypeScript?",
    options: ["var", "let", "const", "define"],
    answer: "const",
    metadata: [1, 10]
});

myQuiz.addQuestion({
    id: 2,
    type: "true-false",
    text: "TypeScript code can run directly in all browsers without compilation.",
    answer: "false",
    metadata: [2, 15]
});

// Running tests
console.log("--- Question 1 ---");
myQuiz.checkAnswer(1, "const");

console.log("\n--- Question 2 ---");
myQuiz.checkAnswer(2, "true");

console.log(`\nFinal Score: ${myQuiz.getCurrentScore()}`);

