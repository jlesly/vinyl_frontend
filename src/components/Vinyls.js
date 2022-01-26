import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap'


const Vinyls = ({ vinyls, category }) => {
    return (
        <div className='vinylsforcategory'>
            <h1>{category.name} Vinyls!</h1>
            {vinyls.map(vinylCat=> <ul key={vinylCat.id}>
                <br/>
            <Container fluid>
                <Card style={{ width: '18rem'}}>
                <Link to={`/categories/$vinylCat.category_id}/vinyls/${vinylCat.id}`}></Link>
                <Card.Img variant="top" src={vinylCat.image_url} alt={`Album cover for ${vinylCat.album}`}/>
                <Card.Body>
                    <Card.Title>{vinylCat.artist}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroupItem>{vinylCat.album}</ListGroupItem>
                <ListGroupItem>{vinylCat.year}</ListGroupItem>
                </ListGroup>
                </Card>
            </Container>   
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { vinyls: state.vinyls }
}

export default connect(mapStateToProps)(Vinyls);
