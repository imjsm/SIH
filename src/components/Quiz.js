import React, { useState } from 'react';
import Quizimage from '../assets/image-Photoroom (78) 1.png';
import QuizImage from '../assets/image-Photoroom (79) 1.png';
import { Data } from './Data';

const Quiz = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const next = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
      setSelectedOption(null); // reset selected option
    } else {
      document.querySelector(".score").innerHTML = `<p>Your Score: ${score}/5</p>`;
      document.querySelector(".quiz").innerHTML = "";

      let nextBtn = document.querySelector("#next");
      nextBtn.innerHTML = "Play Again";
      nextBtn.classList.add("reset");
      const reset = document.querySelector(".reset");
      reset.addEventListener("click", () => {
        window.location.reload();
      });
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === data[index].ans) {
      setScore(score + 1);
    }
  };

  return (
    
    <div className="container bg-[rgb(177,222,146)] w-[1400px] p-8 mt-20 rounded-lg flex-grow h-[700px] mb-8 mx-auto box-border">
      <div className="quiz">
        <div className="text-center">
          <h1 className="text-green-900 text-3xl font-bold mt-10" >Q:{index + 1}</h1>
          <h1 className="text-green-900 text-2xl font-light">{data[index].q}</h1>
          <img
            src={QuizImage}
            alt="Quiz"
            className="absolute right-[1150px] top-[200px] transform rotate-[-15deg] w-[250px] h-[250px]"
          />
          <img
            src={Quizimage}
            alt="Quiz"
            className="absolute right-[150px] top-[300px] transform rotate-[20deg] w-[350px] h-[350px]"
          />
        </div>
        <hr className="border-none border-t-2 border-green-500 my-5" />
        <div className="options flex flex-col items-center justify-center gap-5 mt-8">
          <button
            className={`option-button ${selectedOption === 'a' ? 'bg-green-900 text-white' : 'bg-white'} flex items-center justify-start w-full max-w-[800px] h-[60px] p-3 rounded-lg text-black cursor-pointer transition duration-300 ease-in-out hover:bg-green-800`}
            onClick={() => handleOptionClick('a')}>
            <span className="bg-green-300 text-black rounded-full w-[30px] h-[30px] flex items-center justify-center mr-4">A</span> {data[index].a}
          </button>
          
          <button
            className={`option-button ${selectedOption === 'b' ? 'bg-green-900 text-white' : 'bg-white'} flex items-center justify-start w-full max-w-[800px] h-[60px] p-3 rounded-lg text-black cursor-pointer transition duration-300 ease-in-out hover:bg-green-800`}
            onClick={() => handleOptionClick('b')}>
            <span className="bg-green-300 text-black rounded-full w-[30px] h-[30px] flex items-center justify-center mr-4">B</span> {data[index].b}
          </button>

          <button
            className={`option-button ${selectedOption === 'c' ? 'bg-green-900 text-white' : 'bg-white'} flex items-center justify-start w-full max-w-[800px] h-[60px] p-3 rounded-lg text-black cursor-pointer transition duration-300 ease-in-out hover:bg-green-800`}
            onClick={() => handleOptionClick('c')}>
            <span className="bg-green-300 text-black rounded-full w-[30px] h-[30px] flex items-center justify-center mr-4">C</span> {data[index].c}
          </button>

          <button
            className={`option-button ${selectedOption === 'd' ? 'bg-green-900 text-white' : 'bg-white'} flex items-center justify-start w-full max-w-[800px] h-[60px] p-3 rounded-lg text-black cursor-pointer transition duration-300 ease-in-out hover:bg-green-800`}
            onClick={() => handleOptionClick('d')}>
            <span className="bg-green-300 text-black rounded-full w-[30px] h-[30px] flex items-center justify-center mr-4">D</span> {data[index].d}
          </button>
        </div>
      </div>

      <div className="score text-center mt-8 text-3xl"></div>
      <div className="btns flex justify-center gap-12 mt-8">
        <button id="next" onClick={next} className="bg-green-700 text-white w-[185px] h-[55px] rounded-full text-xl flex items-center justify-center cursor-pointer">
          <i className="fas fa-arrow-right text-5xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
