
import './App.css';
import {useState} from 'react';
import Axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [credits, setCredits] = useState(0);
  const [link, setLink] = useState("");
  const [color, setColor] = useState("");

const displayInfo = () => {
  console.log( name + " " + code + " " + credits + " " + link  + " " +color)
}

const addCourse = () => {
  Axios.post("http://localhost:3001/create", {
    name: name,
    code: code,
    credits: credits,
    link: link,
    color: color
  }) .then(() => {
    console.log("success");
  });
};

  return (
    <div className="App">
      <div className="information">
        <label> Course Name: </label>
        <input 
          type="text" 
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label> Course Code: </label>
        <input
         type="text" 
         onChange={(event) => {
           setCode(event.target.value);
         }}
       />
        <label> Credits: </label>
        <input 
         type="number" 
         onChange={(event) => {
           setCredits(event.target.value);
         }}
       />
        <label> Link: </label>
        <input 
         type="text" 
         onChange={(event) => {
           setLink(event.target.value);
         }}
       />
        <label> Color: </label>
        <input 
         type="text" 
         onChange={(event) => {
           setColor(event.target.value);
         }}
       />
        <button onClick={addCourse}> Add Course</button>
      </div>
    </div>
  );
}

export default App;
