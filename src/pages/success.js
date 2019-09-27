import React from "react"
import Navbar from "../components/navbar"

const SuccessPage = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <div className="section">
                <div className="container has-text-centered">
                    <h1 className="title">Form submitted successfully</h1>
                </div> 
            </div>
        </div>
    );
}

export default SuccessPage;