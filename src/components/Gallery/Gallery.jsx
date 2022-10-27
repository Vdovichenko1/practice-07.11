import React, { Component } from 'react';
import { Button, Container, Navbar, ListGroup, Card } from 'react-bootstrap';
export default class Gallery extends Component {
  state = {
    images: [],
  };

  fetchImages = () => {
    fetch(
      'https://pixabay.com/api/?key=30230166-d77a5ca1fbfdccb59d50824e5&q=yellow+flowers&image_type=photo'
    )
      .then(r => r.json())
      .then(r =>
        r.hits.map(({ webformatURL, id, tags }) => ({
          Url: webformatURL,
          id,
          tags,
        }))
      )
      .then(r=>(this.setState({images:r})));
  };

  clearGallery=()=>{
this.setState({images: []})
  }
//   closeOneItem=({target:{id}})=>{
//     this.setState({images:this.state.images.filter(item=> Number(item.id) !== Number(id))})
//   }
  closeOneItem=(id)=>{
    this.setState({images:this.state.images.filter(item=> item.id !== id)})
  }
  render() {
    const { images } = this.state;
    const { fetchImages,clearGallery,closeOneItem } = this;
    return (
      <>
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand href="#home">
              <Button variant="primary" onClick={fetchImages}>
                Get photos
              </Button>
              <Button variant="primary" onClick={clearGallery}>
               Clear gallery
              </Button>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <ListGroup>
          {images.map(({ Url, id, tags }) => (
            <ListGroup.Item key={id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Url} />
                <Card.Body>
                  <Card.Title>{tags}</Card.Title>
                  {/* <Button variant="primary" onClick={closeOneItem} id={id}>Delete</Button> */}
                  <Button variant="primary" onClick={()=>closeOneItem(id)}>Delete</Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  }
}
