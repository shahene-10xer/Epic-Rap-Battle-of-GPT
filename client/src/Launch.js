import React, { useState } from 'react';
import GenerateRap from './GenerateRap';
import { Link } from "react-router-dom";

const Launch = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const handleClick = () => {
        GenerateRap()
    }

    return (
        <div>
            <h1 id='title--header'>Epic Rap Battles of GPT</h1>

            <div className='container--header'>

            <input id='firstFreestyler' type='text' value={text1} onChange={e => setText1(e.target.value)} placeholder='Freestyler #1' />
            <p className='vs-test'><b>{text1}</b> vs <b>{text2}</b></p>
            <input id='secondFreestyler' type='text' value={text2} onChange={e => setText2(e.target.value)} placeholder='Freestyler #2' />
            
            <Link to='/freestyle'>
                <button className='hiphop--submit' onClick={handleClick}>Rap!</button>
            </Link>
            </div>
            
            <div className="contact-container">
                <div className="contact-item">
                    <i className="contact-icon fab fa-twitter"></i>
                    <a className="contact-link" href="https://twitter.com/shahene6" target="_blank">@shahene6</a>
                </div>

                <div className="contact-item">
                <i className="contact-icon fab fa-linkedin"></i>
                <a className="contact-link" href="https://www.linkedin.com/in/shahene-chaouachi-1964171a4/" target="_blank">Shahene Chaouachi</a>
            </div>

            <div className="contact-item">
                <i className="contact-icon fa fa-envelope icon"></i>
                <a className="contact-link" href="mailto:shahenechaouachi@gmail.com">shahenechaouachi@gmail.com</a>
            </div>

            
</div>
            
            
        </div>
    )
}
export default Launch


