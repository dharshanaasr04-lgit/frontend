import { useState, useMemo } from "react";

export default function Memo() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const calculation = useMemo(() => {
        console.log("Calculate");
        return count * 2;
    }, [count]);

    return (
        <div>
            <h1>{calculation}</h1>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    );
}