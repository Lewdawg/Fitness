import './contact.styles.css'
import { useState, useContext, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
/* import Cookies from 'universal-cookie';
const cookies = new Cookies(); */

function Contact () {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const successRef = useRef();
    const dangerRef = useRef();

    const nameOnchange = () => {
        const nameValidate = nameRef.current.value.length > 2 && nameRef.current.value.length < 20 && nameRef.current.value.match(/^[A-Za-z]+$/)
        if (!nameValidate){
            nameRef.current.classList.add('invalid');
            nameRef.current.classList.remove('valid');
            nameRef.current.nextElementSibling.classList.add('show')
        }else {
            nameRef.current.classList.add('valid');
            nameRef.current.classList.remove('invalid')
            nameRef.current.nextElementSibling.classList.remove('show')
        };
    }

    const emailOnchange = () => {
        const emailValidate = emailRef.current.value.length > 4 && emailRef.current.value.length < 50 && emailRef.current.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) // regex
        console.log(emailValidate);
        if (!emailValidate){
            emailRef.current.classList.add('invalid');
            emailRef.current.classList.remove('valid');
            emailRef.current.nextElementSibling.classList.add('show')
        }else {
            emailRef.current.classList.add('valid');
            emailRef.current.classList.remove('invalid');
            emailRef.current.nextElementSibling.classList.remove('show')
        };
    }

    const messageOnchange = () => {
        const messageValidate = messageRef.current.value.length > 5 && messageRef.current.value.length < 160
        console.log(messageValidate);
        if (!messageValidate){
            messageRef.current.classList.add('invalid');
            messageRef.current.classList.remove('valid');
            messageRef.current.nextElementSibling.classList.add('show')
        }else {
            messageRef.current.classList.add('valid');
            messageRef.current.classList.remove('invalid');
            messageRef.current.nextElementSibling.classList.remove('show')
        };
    }

    const submitBtnClick = (e) => {
        e.preventDefault()
        const sendData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        }
        // send button disabled
        fetch('api/contact', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(sendData)
        }).then(res =>{
            if (res.status === 200){
                res.json().then(data =>{
                    // send button enabled
                    if (data) {
                        // show success message
                        // form reset
                        successRef.current.classList.remove('d-none');
                        dangerRef.current.classList.add('d-none');
                        console.log("Done");

                    } else {
                        // show error message
                        successRef.current.classList.add('d-none');
                        dangerRef.current.classList.remove('d-none');
                    }
                }).catch(err => {
                    // show error message
                    successRef.current.classList.add('d-none');
                    dangerRef.current.classList.remove('d-none');
                })
            } else {
                // show error message
                successRef.current.classList.add('d-none');
                dangerRef.current.classList.remove('d-none');
            }
        }).catch(err => {
            // show error message
            successRef.current.classList.add('d-none');
            dangerRef.current.classList.remove('d-none');
        })
    }


    return (
    <>

        <div id='contact' className="wrapper fadeInDown">
            <div id="formContent">

                <h1>Contact us</h1>

                <form >

                    <div className="alert alert-success d-none mt-3" role="alert" ref={successRef}>
                        Your message has been sent successfully,<br/>
                        i'll contact you as soon as possible :)
                    </div>

                    <div className="alert alert-danger d-none mt-3" role="alert" ref={dangerRef}>
                        Can't send your message :(<br/>
                        please try again later ...
                    </div>

                    {/* <input type="text" id="login" className="fadeIn first mt-2" name="login" required value={username} placeholder="login" onChange={handleUsernameInput}></input> */}

                    <div className="fadeIn first">

                        <input id="name" name="name" type="text" placeholder="Your name" ref={nameRef} onChange={()=>{nameOnchange()}}/>
                        <div className="invalid-feedback">
                            <p>Name should be between 3 & 50 letters only !</p>
                        </div>
                    </div>

                    <div className="fadeIn second">

                        <input id="email" name="email" type="text" placeholder="Your email" ref={emailRef} onChange={()=>{emailOnchange()}}/>
                        <div className="invalid-feedback">
                            <p>Should be actual e-mail address !</p>
                        </div>
                    </div>

                    <div className="fadeIn third">

                        <textarea id="message" name="message" type="text" placeholder="Please enter your message here ..." rows="5" ref={messageRef} onChange={()=>{messageOnchange()}}></textarea>
                        <div className="invalid-feedback">
                            <p>message should be between 5 & 160 letters only !</p>
                        </div>
                    </div>

                    <input type="submit" className="fadeIn fourth" value='Submit' onClick={(e)=>{submitBtnClick(e)}}></input>
                </form>

                <div id="formFooter">
                    <NavLink className="underlineHover" to=''></NavLink>

                </div>

            </div>
        </div>

        </>
    )
};


export default Contact;