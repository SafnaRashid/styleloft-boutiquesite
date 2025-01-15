import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
import '../style/Style.css'
import arrival1 from '../assets/arrival1.jpg'
import arrival2 from '../assets/arrival2.webp'
import arrival3 from '../assets/arrival3.jpg'
import arrival4 from '../assets/arrival4.webp'
import arrival5 from '../assets/arrival5.jpg'
import arrival6 from '../assets/arrival6.jpg'
import arrival7 from '../assets/arrival7.jpg'
import arrival8 from '../assets/arrival8.webp'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className=" text-black text-left mb-4 py-5  " id="home">
      <Container className='mt-5 py-5 '>
        <h1 className='text-black'>Get up to 30% Off</h1>
        <h1 className='text-black' >New Arrivals</h1>
        {/* <p className="lead">The best place to enjoy your favorite coffee</p> */}
        <Button variant="warning" href="#menu">
          {/* Shop Now */}
          <Link to={'/home'} className='btn btn-warning text-black'>Shop Now</Link>
        </Button>
      </Container>
 </div>
 <div>
 <Container className="py-5" id="menu">
      <h2 className="text-center text-black mb-4"><em>New Arrivals</em></h2>
      <Row>
        <Col md={3}>
          <Card className="mb-3 " style={{width:'100%'}}>
            <Card.Img
              variant="top"
              src={arrival1}
              alt="Custom Solutions"
              style={{height:'290px'}}
            />
            <Card.Body className='bg-warning text-black'>
              
              <Card.Title className='text-center  '>Jaipuri Adaah</Card.Title>
              <Card.Text className='text-center '>₹ 699</Card.Text>
           </Card.Body>
          </Card>
        </Col>

       <Col md={3}>
          <Card className="mb-3" >
            <Card.Img
              variant="top"
              src={arrival2}
              alt="Custom Solutions"
              style={{height:'290px'}}
            />
            <Card.Body className='bg-warning text-black'>
              <Card.Title className='text-center '>A Line Dress</Card.Title>
              <Card.Text className='text-center'>₹ 649</Card.Text>
            </Card.Body>
          </Card>
        </Col>
<Col md={3}>
          <Card className="mb-3">
            <Card.Img
              variant="top"
              src={arrival3}
              alt="Custom Solutions"
              style={{height:'290px'}}
            />
            <Card.Body className='bg-warning text-black'>
              <Card.Title className='text-center '>Rihani Fab</Card.Title>
              <Card.Text className='text-center'>₹ 525</Card.Text>
            </Card.Body>
          </Card>
        </Col>
<Col md={3}>
          <Card className="mb-3">
            <Card.Img
              variant="top"
              src={arrival4}
              alt="Custom Solutions"
              style={{height:'290px'}}
            />
            <Card.Body className='bg-warning text-black'>
              <Card.Title className='text-center  '>Classy Modern</Card.Title>
              <Card.Text className='text-center'>₹ 699</Card.Text>
            </Card.Body>
          </Card>
        </Col>
<Col md={3}>
          <Card className="mb-3">
            <Card.Img
              variant="top"
              src={arrival5}
              alt="Custom Solutions"
              style={{height:'290px'}}
            />
            <Card.Body  className='bg-warning text-black'>
              <Card.Title className='text-center '>Jivika ensemble</Card.Title>
              <Card.Text className='text-center'>₹ 599</Card.Text>
            </Card.Body>
          </Card>
        </Col>
<Col md={3}>
          <Card className="mb-3">
            <Card.Img
              variant="top"
              src={arrival6}
              alt="Custom Solutions"
              style={{height:'290px'}}
            />
            <Card.Body  className='bg-warning text-black'>
              <Card.Title className='text-center '>Printed Fit and Flare</Card.Title>
              <Card.Text className='text-center'>₹ 735</Card.Text>
            </Card.Body>
          </Card>
        </Col>
<Col md={3}>
          <Card className="mb-3">
            <Card.Img
              variant="top"
              src={arrival7}
              alt="Custom Solutions"
              style={{height:'290px'}}
            />
            <Card.Body className='bg-warning text-black'>
              <Card.Title className='text-center '>Sanskruti Western</Card.Title>
              <Card.Text className='text-center'>₹ 499</Card.Text>
            </Card.Body>
          </Card>
        </Col>
<Col md={3}>
          <Card className="mb-3">
            <Card.Img
              variant="top"
              src={arrival8}
              alt="Custom Solutions"
              style={{height:'290px'}}
            />
            <Card.Body className='bg-warning text-black'>
              <Card.Title className='text-center '>Buccly Polyster</Card.Title>
              <Card.Text className='text-center'>₹ 599</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
 </div>
 </>
  );
}

export default Home;
