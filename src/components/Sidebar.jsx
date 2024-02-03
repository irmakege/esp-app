import React, { useContext } from 'react'
import './Sidebar.css'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext"

export default function Sidebar() {

    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        signOut(auth).then(() => {
            dispatch({ type: "LOGOUT" })
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }



    const pages = [
        { id: 1, name: 'Anasayfa', icon: '', link: './anasayfa' },
        { id: 2, name: 'Sistem Ayarları', icon: '', link: './sistemayarlari' }
    ];
    const { dispatch } = useContext(AuthContext)



    return (
        <div className='sidebarcontainer'>
            <div className='sidebarcontainerlogocontainer'>
            </div>
            <div className='sidebarcontaineritemcontainer'>
                {pages.map((division) => (
                    <div>
                        <a key={division.id} href={division.link} onSubmit={division.onsubmit}>
                            <img src={division.icon}></img>
                            <span>
                                {division.name}
                            </span>
                        </a>
                    </div>
                ))}

                <div onClick={handleLogout}>
                    <img src=""></img>
                    <span>
                        Çıkış Yap
                    </span>
                </div>
            </div>

        </div>
    )
}