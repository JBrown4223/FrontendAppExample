import React,{Component} from 'react';


//Card Dependancies
import Card from 'react-bootstrap/Card';

//CTA Dependancies
import Button from 'react-bootstrap/Button';


//Carousel Dependencies
import {Carousel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import img1 from './images/mainpg_images/Image 1.png';
import img2 from './images/mainpg_images/Image 2.png';
import img3 from './images/mainpg_images/Image 3.png';

//Section2 dependancies
import speaker1 from './images/mainpg_images/medium17.png';
import speaker2 from './images/mainpg_images/medium27.png';



class Main extends Component{
    constructor(props){
        super(props)
        this.state ={
            csImages:[
                img1,
                img2,
                img3
            ],
            containerStyles: {
                "max-height":"1024px",
                "max-width":"1920px"
            },
            itemStyles:{
                "top": "0px",
                "left": "0px",
                "width": "auto",
                "height": "auto",
                "background": "#0000005C 0% 0% no-repeat padding-box",
                "opacity": "1"
            },

            captionStyles:{ 'top':'40%','bottom': 'auto'},

            buttonStyles: {
                "top": "675px",
                "left": "818px",
                "width": "280px",
                "height": "70px",
                "background": "transparent linear-gradient(90deg, #1FE1E9 0%, #5E33D1 34%, #D34848 65%, #FFB33F 100%) 0% 0% no-repeat padding-box",
                "border-radius": "79px",
                "opacity": "1",
                "variant":"secondary", 
                "size":"sm",
                "font-size": "24px",
                "font-familty": "Helvetica Neue",
                "font-weigh": "Bold"
            },
            //General Section Styles
            sect2Styles:{
                "background-color": "#D34848",
                "top":"auto",
                "height":"auto",
                "width":"auto"
            },
            sect2HeadingStyles:{

                "top": "25%",
                "position": "absolute",
                "-ms-transform": "translateY(-50%)",
                "transform": "translateY(-50%)",
                "left": "184px",
                "width": "773px",
                "height": "88px",
                "text-align": "left",
                "font-size": "50px",
                "font-familty": "Helvetica Neue",
                "font-weigh": "Bold",
                "letter-spacing": "7.4px",
                "color": "#FFFFFF",
                "opacity": "1"
            },

            sect2Content:{
                "top": "45%",
                "position": "absolute",
                "-ms-transform": "translateY(-50%)",
                "transform": "translateY(-50%)",
                "left": "184px",
                "width": "879px",
                "height": "121px",
                "text-align": "left",
                "font-size": "30px",
                "font-familty": "Helvetica Neue",
                "font-weigh": "Bold",
                "letter-spacing": "5.1px",
                color: "#0B0B0B",
                opacity: "1"

            },
            speaker1:{
                "top": "55%",
                "align":"left",
                "width": "254px",
                "height": "397px",
                "background": "transparent 0% 0% no-repeat padding-box",
                "box-shadow": "5px 20px 150px #D34848",
                "opacity": "1"
            },
            speaker2:{
                "top": "20%",
                "align":"right",
                "width": "254px",
                "height": "397px",
                "background": "transparent 0% 0% no-repeat padding-box",
                "box-shadow": "5px 20px 150px #D34848",
                "opacity": "1"

            }

        }
    }
    /*
        Main page has 6 sections

         1- the image carousel 
            - backgroud image carousel - done
            - title and subtitle - done
            - try it now button - done
            

         2- speaker product
           - red background - done
           - try it now button
           - content - done
           - speaker images -done
           - see demo
           - click to listen button

         3-concert info

         4- perks

         5-revies

         6 - get it now

         7- footer





    */
    render(){

        return(
           <div>
            <Card style={this.state.containerStyles}>          
               <Carousel fade>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src={this.state.csImages[0]}
                        alt="First slide"
                        width='100%'
                        height='100%'
                        />
                        <Carousel.Caption style={this.state.captionStyles}>
                            <h1>Interactive Concert Experience</h1>
                            <h3>Experience your favourite artists like never before and from the comfort of your own home.</h3>
                            <br/>
                            <Button disabled style={this.state.buttonStyles}>
                                Try It Now
                            </Button>{' '}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.csImages[1]}
                        alt="Second slide"
                        />
                        <Carousel.Caption style={this.state.captionStyles}>
                            <h1>Interactive Concert Experience</h1>
                            <h3>Experience your favourite artists like never before and from the comfort of your own home.</h3>
                            <br />
                            
                            <Button disabled style={this.state.buttonStyles}>
                                Try it now
                            </Button>{' '}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.csImages[2]}
                        alt="Third slide"
                        />
                         <Carousel.Caption style={this.state.captionStyles}>
                            <h1>Interactive Concert Experience</h1>
                            <h3>Experience your favourite artists like never before and from the comfort of your own home.</h3>
                            <br />
                            
                            <Button disabled style={this.state.buttonStyles}>
                                Try it now
                            </Button>{' '}
                        </Carousel.Caption>
                    </Carousel.Item>
             </Carousel>
             
             </Card>
             <Card style={this.state.sect2Styles}>
                    <div class="container-fluid">
                        <br/>
                        <div class="row">
                            <div class="col-md-3">
                            <div class="align-self-center">
                                <p style={this.state.sect2HeadingStyles}>SUPERIOR SOUND</p>
                            </div>
                            <div class="align-self-baseline">
                                <p style={this.state.sect2Content}>Experience live versions of your favourite songs.</p>
                            </div>
                            </div>
                            <div class="col-md-4"></div>
                              <div class="col-md-2 .d-md-inline-flex">
                                <img style={this.state.speaker1} src={speaker1} alt=""/>
                              </div>
                              <div class="col-md-2">
                                <div class="align-self-center">
                                    <img style={this.state.speaker2} src={speaker2} alt=""/>
                                </div>
                              </div>
                            </div>       
                    </div>
             </Card>
             
            </div>                     
        
        );
    }
}
export default Main



   

