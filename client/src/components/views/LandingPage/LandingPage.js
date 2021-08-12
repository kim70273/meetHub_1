import React,{useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import socketIOClient from "socket.io-client";


function LandingPage() {
    useEffect(() => {
        const socket = socketIOClient.connect('http://localhost:5000');
    }, [])
    
    return (
        <>
            <div>
        <video id="localVideo" autoplay width="480px"></video>
        <video id="remoteVideo" width="480px" autoplay></video>
            </div>
        </>
    )
}

export default LandingPage
