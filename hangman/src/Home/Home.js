import React from 'react';
import './Home.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';  

function Title() {
    return(    
        <div className="Roote">
            <div className="Container">
                <header>
                    <div className="alphabet-wrapper">

                        <p>hi</p>
                        <ul className="alphabet">
                            <li className="alphabetLetters">H</li>
                            <li className="alphabetLetters">A</li>
                            <li className="alphabetLetters">N</li>
                            <li className="alphabetLetters">G</li>
                            <li className="alphabetLetters">M</li>
                            <li className="alphabetLetters">A</li>
                            <li className="alphabetLetters">N</li>
                        </ul>
                    </div>
                    <h1 className="title">HANGMAN</h1>
                    <p className="description">Game</p>
                </header>
                <section>
                    <div className="buttonsWrapper"> 
                        <a className="singupButton"> Sing Up</a>
                        <a className="playButton"> Play</a>
                    </div>
                    <div className="gameRules">
                        <p></p>
                        <p></p>
                        <p>HANGMAN INSTRUCTIONS</p>
                        <p>Your goal is to guess the word. Fill in the blanks by guessing one letter at a time to see if it’s in the word. Click on the letter to guess it, or type it with your keyboard. If you have guessed correctly, the letter will appear in the blank spaces. Try to guess the word or phrase when you have enough correct letters on the board. </p>  
                    </div>

                    <div class="dropdown pt-4">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Animal</button>
                            <button class="dropdown-item" type="button">Color</button>
                            <button class="dropdown-item" type="button">Country</button>
                        </div>
                    </div>
                    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                </section>
            </div>
        </div>
        
    ); 
}


export default Title;