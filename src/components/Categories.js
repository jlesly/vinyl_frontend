import React from 'react';
import { connect } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Categories = ({ categories }) => {
    return(
        <Container fluid>
            <br></br>
        <h3>Explore the collection by clicking a genre below.</h3>
        <br></br>
        <Row xs={1} md={1} className="g-4">    
            {categories.map(category => 
            <Col key={category.id} className='fluid'>
            <Card border="info" className= 'bg-light text-black text-center'>
            <Card.Body>
                <Card.Title>{category.name}</Card.Title>  
                <Card.Link href={`/categories/${category.id}/vinyls`}>See collection here</Card.Link> 
            </Card.Body> 
            </Card>
        </Col>)}
        </Row>
        </Container>
    )
}


const mapStateToProps = state => {
    return { categories: state.categories }
}


export default connect(mapStateToProps)(Categories);