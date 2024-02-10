import React from 'react';
import { get, ref } from 'firebase/database';
import { database } from '../firebase-config';
import { useEffect, useState } from 'react';
import "./DataGrid.css"

export default function DataGrid() {

    const [data, setData] = useState([])

    useEffect(() => {
        const usersRef = ref(database, 'UsersData');
        get(usersRef).then((snapshot) => {
            if (snapshot.exists()) {
                const sensorData = snapshot.val()['YMxWimDgTuOGo4fjBHLk6iVBf3E2']['s1']
                console.log(sensorData)
                setData(sensorData)
                
            } else {
                console.log("No data to retrieve!")
            }
        }).catch((error) => {
            console.log(error)
        });

    }, []);
    return (
        <div className='datagridmaincontainer'>
            
            <div className='datagridcardcontainer'>
            
                {Object.keys(data).map(key => (
                    <div key={key} className='datagridcard'>
                        <h3>{key}</h3>
                        <h2>Sıcaklık: {data[key] !== undefined ? data[key][Object.keys(data[key]).pop()].temperature : "Verileriniz güncelleniyor..."}</h2>
                        <h2>Nem: {data[key] !== undefined ? data[key][Object.keys(data[key]).pop()].humidity : "Verileriniz güncelleniyor..."}</h2>
                    </div>
                ))} 
            </div>
        </div>
    )
}
