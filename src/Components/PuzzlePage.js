// PuzzlePage.js
import React from 'react';
import Puzzle from './puzzle-game/src/components/Game.js';

export default function PuzzlePage() {
  return (
    <div style={{ backgroundColor: "honeydew" }} className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
      <h2 className="text-5xl text-emerald-500 font-bold text-center">
        15 Puzzle Game
      </h2>
      <div style={{ backgroundColor: "honeydew" }} className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
        lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
        <div className="w-80 rounded">
          <Puzzle />
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <p>
            Developed a 15 Puzzle Game using React for an engaging and interactive user experience. The game challenges players to arrange numbered tiles in order and features smooth animations and efficient state management. With a clean, responsive design, it ensures compatibility and playability across various devices.
          </p>
        </div>
      </div>
    </div>
  );
}
