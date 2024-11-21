import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      
      <div
        className="min-h-screen w-full flex justify-center"
        style={{ backgroundColor: color }}
      >
        <h1 className="px-2 text-3xl font-bold text-white mt-5">🍋Press The button to change the background color.</h1>
      </div>
      <div className="w-full px-20 fixed bottom-5 mx-auto">
        <div className="flex justify-between gap-10 max-lg:gap-2 flex-col lg:flex-row">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="transform transition-all hover:scale-105 duration-300 px-10 py-3 text-2xl font-bold text-white bg-red-500 block rounded-full"
          >
            red
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="transform transition-all hover:scale-105 duration-300 px-10 py-3 text-2xl font-bold text-white bg-blue-500 block rounded-full"
          >
            blue
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="transform transition-all hover:scale-105 duration-300 px-10 py-3 text-2xl font-bold text-white bg-green-500 block rounded-full"
          >
            green
          </button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className="transform transition-all hover:scale-105 duration-300 px-10 py-3 text-2xl font-bold text-white bg-gray-500 block rounded-full"
          >
            gray
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="transform transition-all hover:scale-105 duration-300 px-10 py-3 text-2xl font-bold text-white bg-orange-500 block rounded-full"
          >
            orange
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="transform transition-all hover:scale-105 duration-300 px-10 py-3 text-2xl font-bold text-white bg-yellow-500 block rounded-full"
          >
            yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
