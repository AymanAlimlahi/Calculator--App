import { useState } from "react";
import{AiOutlineMenu}from "react-icons/ai";
import{AiFillGithub}from "react-icons/ai";
import{AiFillLinkedin}from "react-icons/ai";
import{AiFillInstagram}from "react-icons/ai";
import Fade from 'react-reveal/Fade';
import './App.css';

function App() {
  const[result,setResult]=useState("");

  function handleClick(e){
    setResult(result.concat(e.target.name))

  }
function clear(){
  setResult("");
}
function backspace(){
  setResult(result.slice(0, - 1));
}

function calculate(){
  try{
    setResult(eval(result).toString());
  }catch(err){
    setResult("err")
  }
  
}
  return (
    <div className="App">
      <div>
            <nav>
            <input type="checkbox" id="check"/>
            <label for="check"><AiOutlineMenu className="checkbtn" id="checkbtn"/></label>
            <label className="logo">CalcuU</label>
            <ul>
                <li><a className="active" href="">home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#calc">Calc</a></li>
                <li><a href="#feed">Feedback</a></li>
            </ul>
        </nav>
        <div className="part1">
        
          <div >
            <center><h1 className="h1">Welcome To CalcuU!</h1></center>
          </div>
        </div>
        </div>
        <div className="part2" id="about">
        <center><h1 className="hp">About</h1></center>
        <div class="container">
          <div class="text">
            <Fade left>
            <p>A calculator is a useful tool that helps perform mathematical calculations quickly and accurately. It is designed to handle basic arithmetic operations such as addition, subtraction, multiplication, and division. In addition to these fundamental functions, modern calculators often have advanced features like exponentiation, square root calculation, and memory storage</p>
          </Fade></div>
          <div class="image">
            <Fade right>
            <img src={"./pictures/bg.png"} alt="Image"/>
          </Fade></div>
        </div>
        </div>
        <div className="part3" id="calc">
        <center><h1 className="hpp">Calc</h1></center>
          <div className="containerr">
          <form>
            <input type="text" value={result} />
          </form>
          <div className="keypad">
            <button className="highlight" onClick={clear} id="clear">clear</button>
            <button className="highlight" onClick={backspace} id="backspace">c</button>
            <button className="highlight" name="/"onClick={handleClick}>&divide;</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button className="highlight" name="*" onClick={handleClick}>&times;</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button className="highlight" name="+" onClick={handleClick}>+</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="." onClick={handleClick}>.</button>
            <button className="highlight" name="=" onClick={calculate} id="result">=</button>
          </div>
        </div>
        </div>

        <div className="part4" id="feed">
          <div className="feed">
            <Fade left>
          <center><h1>
            This Is A Calculate Project Working With React
          </h1></center>
          <center><p>If you like It Go CHeck My Other Project </p></center></Fade>
          <div className="icons">
          <Fade bottom>
          <a className="a" id="a"><AiFillGithub id="icon"/></a>
          <a className="a"><AiFillLinkedin id="icon"/></a>
          <a className="a"><AiFillInstagram id="icon"/></a></Fade>
          </div>
          <center><p className="copy">Copy Right</p></center>
        </div></div>
    </div>
  );
}

export default App;
