import React from 'react';
import photo from "../Css/photo.jpg";
import "../Css/AboutMe.css"




 const AboutMe = () => {


     const Img = {
            borderRadius:"50%"
        };
       

      return(

            
            <div className="AboutMe">
                    <div className='Content'>
                    <h2 className="name">Hello!   I'm </h2>     
                    <h2 className="name" id='name'>Kalyan Kumar </h2>     
                    <h4 className="sub">Frontend Developer | React.js | JavaScript(ES06)</h4>
                    <p>" I'm passionate about crafting dynamic and interactive user interfaces that elevate the web browsing experience. "</p>
                    
                    </div>
                    <div className='Image'>
                    <img style={Img} src={photo} alt='kkphoto'/>
                    </div>
            </div>
      )
    
};
export default AboutMe;