interface Circle {
    kind: "circle",
    radius: number
}

interface Rectangle {
    kind: "rectangle",
    width: number,
    height: number
}

interface Square {
    kind: "square"; // Discriminant
    sideLength: number;
}

type Shape = Circle | Rectangle | Square;

class ShapeCalculator {
    calculateArea(shape: Shape): number {
        switch (shape.kind) {
            case "circle":
                // TS knows 'shape' is a Circle here, so 'radius' is available
                return Math.PI * Math.pow(shape.radius, 2);

            case "rectangle":
                // TS knows 'shape' is a Rectangle here
                return shape.width * shape.height;

            case "square":
                // TS knows 'shape' is a Square here
                return Math.pow(shape.sideLength, 2);

            default:
                // Exhaustive check: This ensures all shapes are handled
                const _exhaustiveCheck: never = shape;
                return _exhaustiveCheck;
        }
    }

    printArea(shape: Shape): void {
        const area = this.calculateArea(shape);
        console.log(`The area of the ${shape.kind} is: ${area.toFixed(2)}`);
    }
}

// --- TEST SUITE ---
const calculator = new ShapeCalculator();

const myCircle: Circle = { kind: "circle", radius: 10 };
const myRect: Rectangle = { kind: "rectangle", width: 5, height: 10 };
const mySquare: Square = { kind: "square", sideLength: 4 };

calculator.printArea(myCircle);
calculator.printArea(myRect);
calculator.printArea(mySquare);