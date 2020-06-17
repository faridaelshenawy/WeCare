import React, { Component } from 'react';

import './home.css';

import {Button, Modal, ModalFooter, Col, Row, Container} from 'react-bootstrap'

import Keyboard from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";
import { Redirect } from 'react-router-dom'
import logo from './Images/logo.png';
import baby from './Images/image1.png'
import CardDeck from 'react-bootstrap/CardDeck'
import Form from 'react-bootstrap/Form'
import stroller from './Images/stroller.jpg'
import blanket from './Images/blanket.jpg'
import shampoo from './Images/shampoo.jpg'
import Card from 'react-bootstrap/Card'
import sleep from './Images/sleep.jpg'
import cloth from './Images/clothing.jpg'
import eat from './Images/eat.jpg'
import learnMore from './Images/Other/image2.jpg'
import newborn from './Images/newborn.jpg'
import newborn2 from './Images/newborn2.jpg'
import eating from './Images/eating.jpg'
import eating2 from './Images/eating2.jpg'
import diaper from './Images/diaper.jpg'
import diaper2 from './Images/diaper2.jpg'
import email from './Images/email.png'




class Home extends Component {
  
  constructor(props) {
      super(props)
      this.state={
          show:false,
          showsignup:false,
          showArticle1:false,
          showArticle2:false,
          showArticle3:false,
          emailRe:false,
          redirect:false,
          layoutName: "default",
          input: ""
      }
  }
  change(){
      this.setState({show:!this.state.show})
  }
  changeSignup(){
      this.setState({redirect:true})
  }
  changeArticle1(){
      this.setState({showArticle1:!this.state.showArticle1})
  }
  changeArticle2(){
    this.setState({showArticle2:!this.state.showArticle2})
  }
  changeArticle3(){
    this.setState({showArticle3:!this.state.showArticle3})
  }
  redirectEmail(){
    this.setState({emailRe:!this.state.emailRe})
    console.log(this.state.emailRe)
  }
  
  
  render() {
    if(this.state.redirect){
        const path = `/login`
         return <Redirect to={path}/>;
       }
    
    return ( 
        
        <div className="firstdiv">
           
            
            <div className="secondDiv">

                <header class="header">
                <img className="brand"src={logo} className="logo" alt="logo" width="500" height="250"/>
                <div className="text1">
                    <h1 className="header1">How to Take Care of your <br></br>
                    <b> New Born Baby</b></h1>
                        <Button className="header1B" variant="outline-secondary" onClick={()=>{this.change()}}>Learn More</Button>
                        <div>
                        <Modal show={this.state.show}>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                How to Take Care of your Newborn
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="show-grid">
                                <Container>
                                <Row>
                                    <Col xs={12} md={8}>
                                    Hold off on giving your baby a bath for about the first week of life. Most newborn skin is covered in a creamy, white substance called the vernix caseosa, which is largely made up of oils from a baby’s sweat glands. This layer acts as a barrier, protecting your baby’s skin in utero. After birth, Dinning says this natural coating continues to ward off bacteria while keeping your baby’s sensitive skin healthy and moisturized. Within five to 10 days, the vernix will slough off on its own, and that’s a good time to give your baby her first bath.
                                    </Col>
                                    <Col xs={6} md={4}>
                                    <img src={learnMore} height="400px" width="150px" alt="" />
                                    </Col>
                                </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={()=>{this.change()}}>Close</Button>
                            </Modal.Footer>
                     </Modal>
                        </div>
                </div>
            <div className="signinM">
                <h1 className="header2">Already have an account?</h1>
                <Button className="buttonlogin"variant="outline-secondary" onClick={()=>{this.changeSignup()}}>Sign in</Button>
                </div>
                </header>
                
            
            <div className="circle">
                <span><span></span></span>
                <div class="wrap">
                <a href="#"><div></div></a>
                <a href="#"><div></div></a>
                <a href="#"><div></div></a>
                <a href="#"><div></div></a>
                <a href="#"><div></div></a>
            </div>
        </div>       
    </div>

    <div className="thirddiv"> 
            <h1 className="bestText">Best Deals</h1>
            <div className="bestDeals" >
            <CardDeck >
                <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body" style={{ height:'23rem', width: '14rem' }}>
                    <Card.Img variant="top" src={stroller} />
                    <Card.Title>Baby Stroller</Card.Title>
                    <footer className="blockquote-footer">
                    <br></br>
                    <Button variant="success" className="bestButton">Add to Cart</Button>
                    </footer>
                    </blockquote>
                </Card>
            <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body" style={{ height:'23rem', width: '14rem' }}>
                <Card.Img variant="top" src={blanket} />
                <Card.Title>Hooded Blanket</Card.Title>
                <footer className="blockquote-footer">
                <br></br>
                <Button variant="success" className="bestButton">Add to Cart</Button>
                </footer>
                </blockquote>
            </Card>
            <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body" style={{ height:'23rem', width: '14rem' }}>
                <Card.Img variant="top" src={shampoo} />
                <Card.Title>Gentle Baby Bath</Card.Title>
                <footer className="blockquote-footer">
                <br></br>
                <Button variant="success" className="bestButton">Add to Cart</Button>
                </footer>
                </blockquote>   
            </Card>
        </CardDeck>
        </div>
        
        
        <div className="ImageGallery">
        <h1 className="newBornText">Newborn Care</h1>
            <div className="ImageGalleryCont">
            
                <div class="wrapper">
                <div class="media">
                <div class="layer">
                    <p>Clothing</p>
                </div>
                <img src={cloth} />
                </div>
            <div class="media">
            <div class="layer">
                <p>Feeding</p>
            </div>
            <img src={eat} />
            </div>
            <div class="media">
            <div class="layer">
                <p>Bedtime</p>
            </div>
            <img src={sleep} />
            </div>
            </div>
        </div>
        </div>
        <div className="articles">
            <h1 className="babyctext">BabyCare Articles</h1>
            <h2 className="moretext">A newborn baby can feel small and fragile. Learn how to care for your newborn.</h2>
            <CardDeck >
                <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body" style={{ height:'20rem', width: '14rem' }}>
                    <Card.Img variant="top" src={newborn} />
                    <p className="paragraph">Congratulations! You've got a new member in your family.</p>
                    <footer className="blockquote-footer">
                    <br></br>
                    <Button variant="light" className="articleButton" onClick={()=>{this.changeArticle1()}}>learn more</Button>
                    </footer>
                    </blockquote>
                </Card>
            <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body" style={{ height:'20rem', width: '14rem' }}>
                <Card.Img variant="top" src={diaper} />
                <p className="paragraph">Changing diapers frequently is an important aspect</p>
                <footer className="blockquote-footer">
                <br></br>
                <br></br>
                <Button variant="light" className="articleButton" onClick={()=>{this.changeArticle2()}}>learn more</Button>
                </footer>
                </blockquote>
            </Card>
            <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body" style={{ height:'20rem', width: '14rem' }}>
                <Card.Img variant="top" src={eating} />
                <p className="paragraph">Here’s How You Can Get Your Kids to Eat Whole Grains</p>
                <footer className="blockquote-footer">
                <br></br>
                <br></br>
                <Button variant="light" className="articleButton" onClick={()=>{this.changeArticle3()}}>learn more</Button>
                </footer>
                </blockquote>   
            </Card>
        </CardDeck>
        </div>
        <div className="Article1">
                        <Modal show={this.state.showArticle1}>
                            <Modal.Header >
                                <Modal.Title >Congratulations! You've got a new member in your family</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="show-grid">
                                <Container>
                                <Row>
                               
                                    </Row> 
                                <Row>
                                    <Col xs={12} md={8}>
                                    Bring your infant car seat into the hospital the day you're going home.Make sure it meets the Canadian Motor Vehicle Safety Standards for infants, and learn how to use it correctly before your baby is born.Have diapers, blankets, clothes and a safe, firm, sleeping space ready at home. Plan to share in caring for your baby with your partner. Ask your partner to arrange for time off of work and to share in meal preparation and housework. Ask friends and family to help with older children and household chores once your baby arrives.
                                </Col>
                                <Col xs={6} md={4}>
                                    <img src={newborn2} height="300px" width="150px" alt="" />
                                    </Col>
                                    
                                </Row>
                                 
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={()=>{this.changeArticle1()}}>Close</Button>
                            </Modal.Footer>
                     </Modal>
                        </div>
                        <div className="Article2">
                        <Modal show={this.state.showArticle2}>
                            <Modal.Header >
                                <Modal.Title >Changing diapers frequently is an important aspect</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="show-grid">
                                <Container>
                                <Row>
                                    <Col xs={12} md={8}>
                                    Changing your baby's diapers regularly is important, as urine combined with the bacteria in poo can make skin sore and lead to diaper rash. Wetness doesn't bother most babies so don't expect her to cry or show discomfort every time she needs changing. Disposable diapers absorb moisture particularly well, so you may not always be able to gauge their wetness until they're saturated. To avoid the problem, check for wetness every couple of hours with a clean finger.
                                </Col>
                                <Col xs={6} md={4}>
                                    <img src={diaper2} height="300px" width="150px" alt="" />
                                    </Col>
                                    
                                </Row>
                                 
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={()=>{this.changeArticle2()}}>Close</Button>
                            </Modal.Footer>
                     </Modal>
                        </div>
                        <div className="Article3">
                        <Modal show={this.state.showArticle3}>
                            <Modal.Header >
                                <Modal.Title >Here’s How You Can Get Your Kids to Eat Whole Grains</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="show-grid">
                                <Container>
                                <Row>
                                    <Col xs={12} md={8}>
                                    There are so many different types and ways to offer whole grains. Consider buying whole grain bread, pita bread, sandwich buns, rolls, tortillas, pasta, cereal, crackers, oatmeal, brown rice, quinoa and bulgur in order to make half your grains whole. Sometimes kids will like one version of a product but not another. For instance, my oldest will not eat bread that has “grain/oatmeal” on the top crust, but is happy to eat whole grain bread without it. Sample different products and don’t give up!
                                </Col>
                                <Col xs={6} md={4}>
                                    <img src={eating2} height="300px" width="150px" alt="" />
                                    </Col>
                                    
                                </Row>
                                 
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={()=>{this.changeArticle3()}}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                        </div>

                        <div className="newsLetter">
                            <p class="email"><b>Subscribe to our Newsletter!</b></p>
                            <Button variant="outline-secondary" className="emailButton" onClick={()=>{this.redirectEmail()}}>Subscribe</Button>
                            
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                        <div>
                        <Modal show={this.state.emailRe}>
                            <Modal.Header >
                                <Modal.Title id="contained-modal-title-vcenter">
                                Subscribe to Our Newsletter
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                </Form>
                                                     
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="primary" onClick={()=>{this.redirectEmail()}} >submit</Button>  
                            </Modal.Footer>
                     </Modal>
                        </div>

                        
                        <div class="footer">
                        <div id="button"></div>
                        <div id="container">
                        <div id="cont">
                        <div class="footer_center">
                            <h3 className="fontType"><b>WeCare</b></h3>
                            <p className="fontType">____________________________<br></br>
                            ____________________________</p>
                        </div>
                       
                        </div>
                        </div>
                        </div>
    </div>
    </div>
      
    );
  }
  
}


export default Home;