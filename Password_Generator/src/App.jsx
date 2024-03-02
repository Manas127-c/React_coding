import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setpassword] = useState("");
  const [passlength, setpasslength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);

  const genpass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+";

    for (let i = 1; i <= passlength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [passlength, number, char]);
  
  const copytoclipboard=useCallback(() =>{
    copypassword.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => {
    genpass();
  }, [passlength, number, char, genpass]);

  const copypassword=useRef(null)
  return (
    <>
      <div className="w-full max-w-xl rounded-lg bg-slate-600 h-44 mx-auto mt-32 relative flex flex-col items-center justify-center gap-3">
        <h1 className="text-xl font-semibold text-yellow-500  ">
          Password Builder
        </h1>
        <div className="w-[90%] flex shadow rounded-md overflow-hidden ">
          <input ref={copypassword}
            type="text"
            className=" outline-none w-full px-3 py-2 bg-white text-zinc-900"
            placeholder="Password"
            value={password}
            readOnly
          />
          <button onClick={()=>{copytoclipboard()}} className="hover:bg-blue-800 text-white px-4 py-2 bg-blue-500">copy</button>
        </div>
        <div className="w-full flex items-center justify-evenly  text-white">
          <div className="flex items-center justify-between gap-1">
            <input 
              type="range"
              min={6}
              max={15}
              value={passlength}
              className=" cursor-pointer transition-all ease-linear"
              onChange={(e) => setpasslength(e.target.value)}
            />
            <label>Length: {passlength}</label>
          </div>
          <div className="flex items-center justify-between gap-1">
            <input
              type="checkbox"
              name=""
              id="inputnum"
              defaultChecked={number}
              onChange={() => setnumber((prev) => !prev)}
            />
            <label>number</label>
          </div>
          <div className="flex items-center justify-between gap-1">
            <input
              type="checkbox"
              name=""
              id="inputchar"
              defaultChecked={char}
              onChange={() => setchar((prev) => !prev)}
            />
            <label>charecter</label>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
