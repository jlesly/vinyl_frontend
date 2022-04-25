import React from 'react';
import { connect } from 'react-redux';
import { fetchVinyls } from '../actions/vinylsActions';
import Vinyls from '../components/Vinyls';
import { Switch, Route } from 'react-router-dom'

class VinylsContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.fetchVinyls)
        this.props.fetchVinyls(this.props.category.id);
    }

    render() {
        return(
        <div className='vinylcontainer'>
            <Switch>
                <Route exact path='/categories/:id/vinyls' component={(routeInfo) => {
                    return <Vinyls routeInfo={routeInfo} category={this.props.category} vinyls={this.props.vinyls}/>
                } } />


            </Switch>
        </div>
        
    )
}
}

const mapStateToProps = state => {
return {
    categories: state.categories
}
}

export default connect(mapStateToProps, { fetchVinyls })(VinylsContainer);