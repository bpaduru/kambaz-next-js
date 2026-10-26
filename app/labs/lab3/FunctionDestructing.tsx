export default function FunctionDestructing() {
    const add = (a: number, b: number) => a + b;
    const sum = add(1, 2);
    const subtract = ({ a, b }: { a: number; b: number }) => a - b;
    const difference = subtract({ a: 4, b: 2 });
    const multiply = ({ a, b }: { a: number; b: number }) => a * b;
    const product = multiply({ a: 3, b: 5 });
    const greet = (name = "Ada") => `Hello, ${name}`;
    const divide = ({ a, b }: { a: number; b: number }) => a / b;
    const quotient = divide({ a: 10, b: 2 });
    return (
        <div id="wd-function-destructing">
            <h2>Function Destructing</h2>
            const add = (a, b) =&gt; a + b;
            <br />
            const sum = add(1, 2);
            <br />
            const subtract = ({"{"} a, b {"}"}) =&gt; a - b;
            <br />
            const difference = subtract({"{"} a: 4, b: 2 {"}"});
            <br />
            sum = {sum}
            <br />
            difference = {difference}
            <br />
            product = {product}
            <br />
            greet() = {greet()}
            <br />
            quotient = {quotient}
            <hr />
        </div>
    );
}