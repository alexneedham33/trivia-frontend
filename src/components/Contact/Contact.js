import React from 'react'
import './Contact.css';

function Contact() {

  const generalInfo = " This game was designed by Valeria during her masters course with the intention of providing a fun and educational way to learn more about Mexico. Valeria's field is tourism and she has always worked in the service industry. One of her greatest passions is promoting her country. The game was coded online by Alex who is a full stack developer pursuing his strong interest towards coding and web development. We hope you enjoy the game and please feel free to contact us both."

  return (
    <div id="contactMainDiv">
      <div id="contactInnerDiv">
        <p>{generalInfo} </p>
        <ul>
          <br/>
          <li><strong><em>Game Designer:</em></strong>  --- Valeria Mota Monzon <br/><br/><strong><em> Email:</em></strong>--- motamonzonv@gmail.com <br/><a href='https://www.linkedin.com/in/valeria-mota-monz%C3%B3n-165594145/' target="_blank" rel="noopener noreferrer"><em>LinkedIn</em></a></li>
          <li><strong><em>Game Developer:</em></strong> --- Alexander Needham <br/><br/><strong><em>Email:</em></strong> --- alexneedham33@gmail.com <br/><a href='https://www.linkedin.com/in/alexander-needham-925851169/' target="_blank" rel="noopener noreferrer"><em>LinkedIn</em></a></li>
        </ul>
      </div>
      <footer>
        <h2 id="copyRightText">Copyright © 2020 Valeria Mota Monzon. All rights reserved</h2>
      </footer>
    </div>
  )
}

export default Contact
