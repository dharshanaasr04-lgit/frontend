import { useRef } from "react";

export default function Ref() {
    const count = useRef(0);

    const increase = () => {
        count.current++;
        console.log("Count:", count.current);
    };

    return (
        <div>
            <h1>Ref</h1>
            <button onClick={increase}>Increase</button>
        </div>
    );
}
