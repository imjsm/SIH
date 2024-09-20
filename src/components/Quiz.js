import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QuizImage from '../assets/image-Photoroom (79) 1.png';
import Quizimage from '../assets/image-Photoroom (78) 1.png';
import { Data } from './Data';
import ProgressBar from './ProgressBar'; 

const Quiz = () => {
  const [data] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizEnded, setQuizEnded] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const next = () => {
     if (selectedOption && data[index][selectedOption] === data[index].ans) {
      setScore(score + 1);
    }

    if (index < data.length - 1) {
      setIndex(index + 1);
      setSelectedOption(null);  // Reset selected option for the next question
    } else {
      setQuizEnded(true);
    }
  };

  const replay = () => {
    setIndex(0);
    setScore(0);
    setSelectedOption(null);
    setQuizEnded(false);
  };

  return (
    <div className="container bg-[rgb(177,222,146)] w-[1400px] p-8 mt-20 rounded-lg flex-grow h-[700px] mb-8 mx-auto box-border">
      <ProgressBar current={index} total={data.length} /> 

      <div className="quiz">
        <div className="text-center">
          <h1 className="text-green-900 text-3xl font-bold mt-10">Q:{index + 1}</h1>
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
            onClick={() => handleOptionClick('a')}
            disabled={quizEnded}
          >
            <span className="bg-green-300 text-black rounded-full w-[30px] h-[30px] flex items-center justify-center mr-4">A</span> {data[index].a}
          </button>
          
          <button
            className={`option-button ${selectedOption === 'b' ? 'bg-green-900 text-white' : 'bg-white'} flex items-center justify-start w-full max-w-[800px] h-[60px] p-3 rounded-lg text-black cursor-pointer transition duration-300 ease-in-out hover:bg-green-800`}
            onClick={() => handleOptionClick('b')}
            disabled={quizEnded}
          >
            <span className="bg-green-300 text-black rounded-full w-[30px] h-[30px] flex items-center justify-center mr-4">B</span> {data[index].b}
          </button>

          <button
            className={`option-button ${selectedOption === 'c' ? 'bg-green-900 text-white' : 'bg-white'} flex items-center justify-start w-full max-w-[800px] h-[60px] p-3 rounded-lg text-black cursor-pointer transition duration-300 ease-in-out hover:bg-green-800`}
            onClick={() => handleOptionClick('c')}
            disabled={quizEnded}
          >
            <span className="bg-green-300 text-black rounded-full w-[30px] h-[30px] flex items-center justify-center mr-4">C</span> {data[index].c}
          </button>

          <button
            className={`option-button ${selectedOption === 'd' ? 'bg-green-900 text-white' : 'bg-white'} flex items-center justify-start w-full max-w-[800px] h-[60px] p-3 rounded-lg text-black cursor-pointer transition duration-300 ease-in-out hover:bg-green-800`}
            onClick={() => handleOptionClick('d')}
            disabled={quizEnded}
          >
            <span className="bg-green-300 text-black rounded-full w-[30px] h-[30px] flex items-center justify-center mr-4">D</span> {data[index].d}
          </button>
        </div>
      </div>

      <div className="score text-center mt-8 text-3xl">
        {quizEnded && <p>Your Score: {score}/{data.length}</p>}
      </div>
      <div className="btns flex justify-center gap-12 mt-8">
        {!quizEnded ? (
          <button
            id="next"
            onClick={next}
            className={`bg-green-700 text-white w-[185px] h-[55px] rounded-full text-xl flex items-center justify-center cursor-pointer ${!selectedOption ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!selectedOption}
          >
            Next
          </button>
        ) : (
          <button
            onClick={replay}
            className="bg-green-700 text-white w-[185px] h-[55px] rounded-full text-xl flex items-center justify-center cursor-pointer"
          >
            Replay
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
