import React from "react";
import "./Mainform.css";

const Mainform = () => {
    return(
        <>
        <div className="mainContainer">
            <div className="mainForm">
                <h1 className="mainHeading">Regestration Form</h1>
                <form>
                    <label className="mainLabel">First Name:</label>
                    <input type="text" name="firstname" /><br/>
                    <label className="mainLabel">last Name:</label>
                    <input type="text" name="lastname"/><br/>
                    <label className="mainLabel">Email:</label>
                    <input type="text" name="Email" /><br/>
                    <label className="mainLabel">phone:</label>
                    <input type="text" name="phone" />

                </form>
            </div>
        </div>
        </>
    );



}

export default Mainform;