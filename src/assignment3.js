import { Component} from 'react';

import Sketch from 'react-p5';


class Assignment3 extends Component {
        constructor(){
                super()
                const sec= 1618558626 * 1000;
                this.state={
                        
                        date: new Date(sec).toString()
                }
        }
        
              
        x = 50;
        y= 50;
        xx = 250
        yy=50;
        w = 250;
        z=250;
        ww= 50;
        zz=250
        heroX=150;
        heroY=250;

        
       



	setup = (p5, parentRef) => {
                
		p5.createCanvas(300, 300).parent(parentRef);
                p5.textSize(30);
		
	};

        mousePressed = (p5) => {
                
                
        }

	draw = (p5) => {
                p5.background(0);
		p5.fill(275, this.y*1.2, 0);
                p5.ellipse(this.x,this.y,50,50)
                 this.x++;
                 this.y++;
                 if(this.y >= 250) {
                   this.x-=200;
                   this.y-=200;
                 }
                 p5.ellipse(this.xx,this.yy,50,50)
                 this.xx--;
                 this.yy++;
                 if(this.y <= 50) {
                   this.xx+=200;
                   this.yy-=200;
                 }
                 p5.ellipse(this.w,this.z,50,50)
                 this.w--;
                 this.z--;
                 if(this.z <= 50) {
                   this.w+=200;
                   this.z+=200;
                 }
                 p5.ellipse(this.ww,this.zz,50,50)
                 this.ww++;
                 this.zz--;
                 if(this.zz <= 50) {
                   this.ww-=200;
                   this.zz+=200;
                }
                if(this.y >=120 && this.y <=150 && this.yy >=120 && this.yy <=150)
                {
                        p5.text("Crossover",75,100);
                        
                }
                
                
                



                
                
	};

	render() {
		return (
			<div className='App'>
				<h1>Animation</h1>
				<Sketch setup={this.setup} draw={this.draw} mouseClicked={this.mp} />
                                                <br/>
                                                <br/>
                                                <h4> Last modified on {this.state.date}</h4>
                                        
			</div>
		);
	}
}
export default Assignment3;