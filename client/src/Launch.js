import React, { useState } from 'react';


const Launch = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    return (
        <div>
            <h1 id='title--header'>Epic Rap Battles of GPT</h1>

            <div className='container--header'>

            <input className='input--text' type='text' value={text1} onChange={e => setText1(e.target.value)} placeholder='Freestyler #1' />
            <p className='vs-test'><b>{text1}</b> vs <b>{text2}</b></p>
            <input className='input--text' type='text' value={text2} onChange={e => setText2(e.target.value)} placeholder='Freestyler #2' />
            <button className='hiphop--submit'>Rap!</button>

            </div>
            
            <div class="contact-container">
                <div class="contact-item">
                    <i class="contact-icon fab fa-twitter"></i>
                    <a class="contact-link" href="https://twitter.com/shahene6" target="_blank">@shahene6</a>
                </div>

                <div class="contact-item">
                <i class="contact-icon fab fa-linkedin"></i>
                <a class="contact-link" href="https://www.linkedin.com/in/shahene-chaouachi-1964171a4/" target="_blank">Shahene Chaouachi</a>
            </div>

            <div class="contact-item">
                <i class="contact-icon fa fa-envelope icon"></i>
                <a class="contact-link" href="mailto:shahenechaouachi@gmail.com">shahenechaouachi@gmail.com</a>
            </div>

            
</div>
            
            
        </div>
    )
}
export default Launch