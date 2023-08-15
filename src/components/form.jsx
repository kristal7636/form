import React from "react";
import {useState} from "react";




const Form= () => {
    const [data,setData] = useState (0);
    const Clicked = () =>
    {
        setData(data+2);
    } 
   const Reset =() => {
        setData(data-1);
    } 
    return(
        <>
        <form><label>
        Name:
        <input type="text" name="name"/>
        </label>
        <input type="submit" value="submit"/>
      </form>
      <h1>Button Clicked{data} times</h1>
      <button onClick={Clicked}>click</button>
      <button onClick={Reset}>Reset</button>
      </>
    );

}
export default Form;
