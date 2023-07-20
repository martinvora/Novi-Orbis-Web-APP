import React from 'react';



function Youtube () {
   
 
    return (  
        <React.Fragment >
        <main>  
        <div className="conteiner-grid-main-podcast">
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/BBlRGrdQyIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div id="contact-us">
                              <h2 className="contact-text">CONTACT US</h2>
                             <br />
                             <a href="mailto:noviorbisrecording@gmail.com"
                               ><h3 id="email">Noviorbisrecording@gmail.com</h3></a
                             ><br />
                             <a href="https://www.facebook.com/noviorbisrec/">
                               <img  className="icons"src="Images/social-icons/fb.png" alt="Link to facebook" />
                             </a>
                             <a href="https://www.instagram.com/novi.orbis/">
                               <img className="icons" src="Images/social-icons/ig.png" alt="Link to instagram" />
                             </a>
                             <a href="https://soundcloud.com/novi_orbis">
                               <img  className="icons"src="Images/social-icons/sc.png" alt="Link to soundcloud" />
                             </a>
                             <a href="https://www.youtube.com/channel/UCQo0r3pl1yaFZ6rMfaP12Qw">
                               <img  className="icons"src="Images/social-icons/youtube.png" alt="Link to youtube" />
                             </a>
          </div>
        </div>
      </main>
      </React.Fragment>
      );
}

export default Youtube;