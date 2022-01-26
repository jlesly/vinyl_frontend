import React from 'react';
import { connect } from 'react-redux';
import { fetchVinyls } from '../actions/vinylsActions';
import Vinyls from '../components/Vinyls'

class VinylsContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.fetchVinyls)
        this.props.fetchVinyls();
    }

    render() {
        return(
            <div> vinyls
            <Vinyls />
            </div>
        )
    }
}

export default connect(null, { fetchVinyls})(VinylsContainer);