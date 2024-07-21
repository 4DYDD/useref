import { useRef, useEffect } from "react";

function Board() {
  return (
    <>
      <main className="board">
        <div>REACT</div>
        <br />
        <br />
        <br />
        <br />
        <div className="react group animate-putar scale-100 hover:scale-[2] transition-all duration-[1500ms] ease-in-out">
          <div className="w-[100px] h-[35px] transition-all duration-[1500ms] ease-in-out scale-0 group-hover:scale-100 border-[3.5px] rotate-0 group-hover:rotate-90 border-cyan-300 rounded-[80%] absolute react-ring"></div>
          <div className="w-[100px] h-[35px] transition-all duration-[1500ms] ease-in-out scale-0 group-hover:scale-100 border-[3.5px] rotate-0 group-hover:rotate-[30deg] border-cyan-300 rounded-[80%] absolute react-ring"></div>
          <div className="w-[100px] h-[35px] transition-all duration-[1500ms] ease-in-out scale-0 group-hover:scale-100 border-[3.5px] rotate-0 group-hover:rotate-[150deg] border-cyan-300 rounded-[80%] absolute react-ring"></div>
        </div>
      </main>
    </>
  );
}

export default Board;
