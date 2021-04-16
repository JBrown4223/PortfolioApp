import React, { Component} from 'react';
import vid from './videos/A1-Videofinal.mp4';
import vidPoster from "./images/poster.png";
import { ReactVideo } from "reactjs-media";


class Assignment1 extends Component {
        constructor(props){
                super(props)
                const sec= 1616122853 * 1000;
                this.state={
                        
                        date: new Date(sec).toString()
                }
        }
       
       render() {
                return(
                        <div>
                        <ReactVideo
                                src={vid}
                                poster={vidPoster}
                                primaryColor="red"
                                width="400"
                                height="350"
                        />

                        <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-10">
                                        <h3>Reflection</h3>
                                        <br/>
                                        <p> There is a vlog I follow called SB Nation, they do videos like this and served as my inspiration</p>
                                        <p> I recored the audio portion on Audacity and used an instrumental I found on youtube</p>
                                        <p> I used OpenShot video to combine the photos I used from clip art and the mixed audio file</p>
                                        <p> This assignment I found to be very well designed, I learned a lot, i would rate it a 7</p>
                                </div>
                                <div class="col-md-1"></div>
                        </div>
                                <div class="row">
                                        <div class="col-md">
                                                <br/>
                                                <br/>
                                                <h4> Last modified on {this.state.date}</h4>
                                        </div>
                                </div>
                        
                       
                        
                </div>
                );
       }
}
export default Assignment1;