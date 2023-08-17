import React from "react";
import "./Mainform.css";

const Mainform = () => {
    return(
        <>
        <div className="mainContainer">
            <div className="mainForm">
                <h1 className="mainHeading">Regestration Form</h1>
                <form className="formbox">
                    <label className="mainLabel">First Name:</label>
                    <input   className="maininput"type="text" name="firstname" /><br/>
                    <label className="mainLabel">last Name:</label>
                    <input   className="maininput" type="text" name="lastname"/><br/>
                    <label className="mainLabel">Email:</label>
                    <input   className="maininput" type="Email" name="Email" /><br/>
                    <label className="mainLabel">phone:</label>
                    <input  className="maininput" type="phone" name="phone"/>
                    <br/>
                    <button  className="mainbutton" type= "button"  value="submit">submit</button>
                    
                   
                </form>
            </div>
        </div>
        </>
    );



}

export default Mainform;