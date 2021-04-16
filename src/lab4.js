
import React from 'react';
import { ReactVideo } from "reactjs-media";
import catVid from "./videos/cats.mp4";
import vidPoster from "./images/poster.png";


export default function Lab4() {
  return (
     <div className='App'>
         <ReactVideo
                                src={catVid}
                                poster={vidPoster}
                                primaryColor="red"
                                width="400"
                                height="350"
                        />
        
     </div>
  );
}



  
    
