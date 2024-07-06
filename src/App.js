import logo from './logo.svg';
import './App.css';
import Fomula from './components/fomula';
import Box from './components/box';
import Submit from './components/submit';
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 9) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 9) + 1);
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');

  function handleAnswer(e) {
    setAnswer(e.target.value);
  }

  function handleChange() {
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
  }

  function handleText (text) {
    setText(text);
  }

  function handleSubmit() {
    if (num1 + num2 === parseInt(answer, 10)) {
      handleText("正解です");
      handleChange();
    } else {
      handleText("はずれです");
    }
    setAnswer('');
  }

  return (
    <>
      <div>
        <h1>足し算をしてください</h1>
      </div>
      <div>
        <Fomula num1={num1} num2={num2} />
      </div>
      <div>
        <Box value={answer} onChange={handleAnswer} />
      </div>
      <div>
        <Submit onClick={handleSubmit}/>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
