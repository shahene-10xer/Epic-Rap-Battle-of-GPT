import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Stage = () => {

  const [freestyler1Image, setFreestyler1Image] = useState("");
  const [freestyler2Image, setFreestyler2Image] = useState("");
  const [congratulationMessage, setCongratulationsMessage] = useState("")
  const freestyler1 = document.getElementById('firstFreestyler')
  ? document.getElementById('firstFreestyler').value
  : '';
  const freestyler2 = document.getElementById('secondFreestyler')
  ? document.getElementById('secondFreestyler').value
  : '';  
  const [isPickingWinner, setIsPickingWinner] = useState(false)

  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const cx = process.env.REACT_APP_CX;
  const query1 = freestyler1;
  const query2 = freestyler2;


  const handlePickWinner = (freestyler1, freestyler2) => {
    const winnerIndex = Math.floor(Math.random() * 2) + 1;
    setIsPickingWinner(true)
    const winnerName = winnerIndex === 1 ? freestyler1 : freestyler2;
    setCongratulationsMessage(`Congratulations ${winnerName} !`);

  }


  useEffect(() => {
    const fetchData = async () => {
      const response1 = await fetch(
       `https://www.googleapis.com/customsearch/v1?q=${query1}&num=1&searchType=image&key=${API_KEY}&cx=${cx}`
     );
        
      const data1 = await response1.json();
      setFreestyler1Image(data1.items[0].link);

      const response2 = await fetch(
       `https://www.googleapis.com/customsearch/v1?q=${query2}&num=1&searchType=image&key=${API_KEY}&cx=${cx}`
     );
      
      const data2 = await response2.json();
      setFreestyler2Image(data2.items[0].link);
    };
    fetchData();
  }, [freestyler1, freestyler2, query1, query2]);

  

  return (
    <>
      <iframe 
      className='backgroundMusic' 
      width="0" 
      height="0" 
      src="https://www.youtube.com/embed/87G2XHtgkjU?autoplay=1&mute=0"
      title="Ed Sheeran ft. Eminem, 50 Cent - Remember The Name (Instrumental)" 
      frameBorder="0" 
      allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; gyroscope; 
      picture-in-picture; web-share" >
      </iframe>

      <div className='imageContainer'>
         <img className='image' src={freestyler1Image} alt={freestyler1} />
         <img className='image' src={freestyler2Image} alt={freestyler2} />
      </div>
      <p id='text'>
        Hold tight, while the AI is AI'ing. This isn't Juice Wrld freestyling off the dome. We'll leave that for AGI.
      </p>

      {!isPickingWinner && (
        <div className='button-container'>
          <button className='pickWinnerButton' onClick={() => handlePickWinner(query1, query2)}>
          Click for AI Judgement 
          </button>
        </div>
      )}
      
      {isPickingWinner && (
        <div className="winnerAnnouncement">
          <Confetti />
          <p id='congratulations'>{congratulationMessage}</p>
        </div>
      )}

    <div>
      
    
  </div>
  </>)
};

export default Stage;
