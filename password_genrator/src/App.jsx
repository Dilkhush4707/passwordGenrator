import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [charector, setCharector] = useState(false);
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz";
    if (number) str += "1234567890";
    if (charector) str += "!@#$%^&*()[]{}~";
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, number, charector, setPassword]);
  useEffect(() => {
    passwordGenrator();
  }, [length, number, charector]);
  return (
    <>
      <div className="app-containor">
        <div className="password-containor">
          <input
          className="showpassword"
           type="text" value={password} />
          <button>Copy</button>
        </div>
        <div className="conditions">
          <input
            className="range"
            min="1" max="100"
            type="range"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <p>length({length})</p>
          <input type="checkbox" onClick={() => setNumber("!number")} />
          <p>Number</p>
          <input type="checkbox" onClick={() => setCharector(!charector)} />
          <p>Charector</p>
        </div>
      </div>
    </>
  );
}

export default App;
