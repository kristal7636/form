







import React, { useState } from "react";
import "./Mainform.css";

const Mainform = () => {
    const [fname,setFname]=useState('');
    const [fnameErr,setFnameErr]=useState(false);
    const [lname,setLname]=useState('');
    const [lnameErr,setLnameErr]=useState(false);
     const [phonename,setPhonename]=useState('');
    const [phonenameErr,setPhonenameErr]=useState(false);
    const [agename,setAgename]=useState('');
    const [agenameErr,setAgenameErr]=useState(false);
    const [emailname,setEmailname]=useState('');
    const [emailnameErr,setEmailnameErr]=useState(false);
   


    const FnameHandle = (e) => {
        let fitem = e.target.value;
        if (fitem.length >= 2 && fitem.length <= 7 || fitem.length ==0) {
            setFnameErr(false)
        }
        else  
        {
            setFnameErr(true)
        }    
            setFname(fitem)
    }
        const valueHandale = (e) => {
            e.preventDefault();
            if(fnameErr == true || fname.length==0)
            {
                alert(' First Name invalid')
            }
            if(lnameErr == true|| lname.length==0)
            {
                alert('Last Name invalid')
            }
            if(emailnameErr == true|| emailname.length==0)
            {
                alert(' Email invalid')
            }
            if(phonenameErr == true|| phonename.length==0){
                alert('Phone Number invalid')
            }
            if(agenameErr == true|| agename.length==0){
                alert('Age invalid')
            }
    }
            const submitForm = () =>{
                if(fnameErr === true || fnameErr === true || phonenameErr === true || emailnameErr === true || agenameErr === true){
                    
                }
            }
        const LnameHandle = (e) => {
            console.log(lname)
            let litem = e.target.value;
            
            if (litem.length >= 2 && litem.length <= 8  || litem.length ==0) {
                setLnameErr(false)
            }
            else  {
                    setLnameErr(true)
                }
                setLname(litem)
        }
        const PhonenameHandle = (e) => {        
        let regex = /^[6-9]\d{9}$/g;
        let phoneitem = e.target.value;
        setPhonenameErr(!(regex.test(phoneitem)))
        if(phoneitem.length==0){
            setPhonenameErr(false)
        }
        setPhonename(phoneitem)   
        }

    const EmailnameHandle = (e) => {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let emailitem = e.target.value;
        setEmailnameErr(!(regex.test(emailitem)))
        if (emailitem.length == 0){
            setEmailnameErr(false)
        }
         setEmailname(emailitem)
    }

    const AgenameHandle = (e) => {
        let ageitem = e.target.value;    
        if (ageitem >= 18 && ageitem <= 100 || ageitem.length ==0) {
            setAgenameErr(false)
        }
        else  {
                setAgenameErr(true)
            }
            setAgename(ageitem)
    }
     return( 
        <>
        <div className="mainContainer">
            <div className="mainForm">
                <h1 className="mainHeading">Regestration Form</h1>
                <form className="formbox" onSubmit={valueHandale}  >
                    <label className="mainLabel">First Name:</label>
                    <input  type="text" name="firstname"  onChange={FnameHandle} className='maininput' />{fnameErr?<span className="ErrorMessege"> First Name Invalid</span>:""}<br/>
                    <label className="mainLabel">last Name:</label>
                    <input  type="text" name="lastname"  onChange={LnameHandle}className="maininput" />{lnameErr?<span className="ErrorMessege">Last Name Invalid</span>:""}<br/>
                 
                    <label className="mainLabel">Age:</label>
                    <input type="number"   name="Age"onChange={AgenameHandle} className="maininput" />{agenameErr?<span className="ErrorMessege">Age Invalid</span>:""}<br/>
                    <label className="mainLabel">Email:</label>
                    <input  type="text" name="Email"  onChange={EmailnameHandle}className="maininput" />{emailnameErr?<span className="ErrorMessege">Email Invalid</span>:""}
                   <br/>
                    <label className="mainLabel">phone:</label>
                    <input  type="number" name="phone"  onChange={PhonenameHandle}className="maininput" />{phonenameErr?<span className="ErrorMessege">phone Invalid</span>:""}
                    <br/>
                    <button  className="mainbutton" type= "submit" onClick={submitForm}  value="submit">submit</button>
                    
                   
                </form>
            </div>
        </div>
        </>
    );



}

export default Mainform;