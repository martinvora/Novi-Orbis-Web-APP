import React from 'react';



function Releases () {
   
 
    return (  
        <React.Fragment >
        <main>
        <div className="tittle-pages">releases</div>
        
        <div className="conteiner-grid-main-podcast">
        <iframe width="100%" 
                height="450" 
                frameborder="no"
                title="Novi Orbis - Releases"
                 scrolling="no"   
                 src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1226303935&color=%237c3c6c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <div id="contact-us">
                              <h2 className="contact-text">CONTACT US</h2>
                             <br />
                             <a href="mailto:noviorbisrecording@gmail.com"
                               ><h3 id="email">Noviorbisrecording@gmail.com</h3></a
                             ><br />
                             <a href="https://www.facebook.com/noviorbisrec/">
                               <img className="icons" src="Images/social-icons/fb.png" alt="Link to facebook" />
                             </a>
                             <a href="https://www.instagram.com/novi.orbis/">
                               <img className="icons" src="Images/social-icons/ig.png" alt="Link to instagram" />
                             </a>
                             <a href="https://soundcloud.com/novi_orbis">
                               <img className="icons" src="Images/social-icons/sc.png" alt="Link to soundcloud" />
                             </a>
                             <a href="https://www.youtube.com/channel/UCQo0r3pl1yaFZ6rMfaP12Qw">
                               <img className="icons" src="Images/social-icons/youtube.png" alt="Link to youtube" />
                             </a>
          </div>
        </div>
      </main>
      </React.Fragment>
      );
}

export default Releases;