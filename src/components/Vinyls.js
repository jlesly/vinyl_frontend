import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'


const Vinyls = ({ vinyls, category }) => {
    return (
        <div className='vinylsforcategory'>
            <h1>{category.name} Vinyls!</h1>
            
            <Container fluid>
            <Row xs={1} md={2} lg={4} xl={6} className='g-8'>
                {vinyls.map(vinylCat=> 
                <Col key={vinylCat.id} className='d-flex'>
                <Card border="dark" style={{ width: '18rem'}} className= 'text-center'>
                <Link to={`/categories/$vinylCat.category_id}/vinyls/${vinylCat.id}`}></Link>
                <Card.Img variant="top" src={vinylCat.image_url} alt={`Album cover for ${vinylCat.album}`}/>
                <Card.Body>
                    <Card.Title>{vinylCat.artist}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroupItem>Album: {vinylCat.album}</ListGroupItem>
                <ListGroupItem>Released: {vinylCat.year}</ListGroupItem>
                </ListGroup>
                </Card>
                </Col>)}
            </Row>
            </Container>   
    
        </div>
    )
}

const mapStateToProps = state => {
    return { vinyls: state.vinyls }
}

export default connect(mapStateToProps)(Vinyls);
