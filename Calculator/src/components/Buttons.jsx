import React from "react";

function Buttons({ data, func }) {
  const len = data.length;
  return (
    <div className="w-full h-[14%]  flex justify-between flex-wrap">
      {data.map((e, i) => (
        <button
          key={i}
          onClick={() => func(e)}
          className={`mb-1 h-full ${
            i == len - 1 ? "w-[50%]" : "w-[24%]"
          } border-[1px] border-zinc-100 text-white text-xl hover:bg-white hover:text-black duration-300`}
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
