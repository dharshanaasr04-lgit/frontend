import React, { useState, useEffect, createContext } from "react";
import Home, { HomeA, HomeB } from "./Home";
import Ref from './Ref';
import Memo from './Memo';
import CallBack from './CallBack';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";


export const ThemeContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
 
  const toggleTheme = ()=>{
    setTheme(theme === "light" ? "dark" : "light");
  }
 
  useEffect(() => {
    console.log("useeffect");
  }, [count]);
 
  // const style = {
  //   backgroundColor: theme === "light" ? "white" : "black",
  //   color: theme === "light" ? "black" : "white"
  // }
  const increment = ()=>{
    setCount(count + 1);
    console.log("Count:", count);
  }
  const user ={
    name:"John",
    age:30,
    email:"john@example.com"
  }
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <BrowserRouter>
      <Routes>
        <Route path="/ref" element={<Ref />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/callback" element={<CallBack />} />
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/homea" element={<HomeA user={user}/>} />
        <Route path="/homeb" element={<HomeB user={user}/>} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <button onClick={increment}>Count: {count}</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
 
export default App;
 




 