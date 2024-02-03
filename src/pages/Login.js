import React, { useContext, useState } from 'react'
import "../style/Login.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"

const Login = () => {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

    function visiblePassword() {
        var x = document.getElementById("passwordfield");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { 
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user})
                console.log(user)
                navigate("/anasayfa")
            })
            .catch((error) => {
                setError(true)
            });
    }

    return (
        <div className='logincontainer'>
            <form className='logincontainerform' onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder='E-posta adresinizi giriniz...'
                    className='logincontainerforminput'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Şifrenizi giriniz...'
                    className='logincontainerforminput'
                    onChange={e => setPassword(e.target.value)}
                    id="passwordfield"
                />
                <span onClick={visiblePassword}>Show Password</span>

                {
                    error && <span style={{ color: 'red' }}>Yanlış bir e-posta adresi ve şifre girdiniz!</span>
                }

                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    )
}

export default Login