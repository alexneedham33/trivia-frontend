import React from 'react'
import './Contact.css';

function Contact() {

  const alexAbout = "  Alex has previously worked as a data analyst/statistician and now pursues his strong interest towards coding and web development."
  const valeriaAbout = " Valeria's field is tourism, she has always worked in the service industry. One of her greatest passions is promoting her country. "
  const generalInfo = " This game was designed by Valeria before graduating from University, and now it's brought to life thanks to Alex. Our intention is to provide a fun and educational way to learn more about Mexico, and of course, invite you all to go explore."

  return (
    <div id="contactMainDiv">
      <div id="contactInnerDiv">
        <div>{generalInfo}</div>
        <br/><br/>
        <ul>
          <li><strong><em>Game Designer:</em></strong>  --- Valeria Mota Monzon <br/><br/><strong><em>About:</em></strong>{valeriaAbout}<br/><br/><strong><em> Email:</em></strong>--- motamonzonv@gmail.com <br/><br/><a href='https://www.linkedin.com/in/valeria-mota-monz%C3%B3n-165594145/' target="_blank" rel="noopener noreferrer"><em>LinkedIn</em></a></li>
          <li><strong><em>Game Developer:</em></strong> --- Alexander Needham <br/><br/><strong><em> About:</em></strong>{alexAbout}<br/><br/><strong><em>Email:</em></strong> --- alexneedham33@gmail.com <br/><br/><a href='https://www.linkedin.com/in/alexander-needham-925851169/' target="_blank" rel="noopener noreferrer"><em>LinkedIn</em></a></li>
        </ul>
      </div>
      <footer>
        <h2 id="copyRightText">Copyright © 2020 Valeria Mota Monzon. All rights reserved</h2>
      </footer>
    </div>
  )
}

export default Contact
