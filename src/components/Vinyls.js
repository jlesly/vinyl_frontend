import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Vinyls = ({ vinyls, category }) => {
    const [search, setSearch] = useState("")
    return (
        <div className='categoryvinyls'>

        <input type="text" className="searchbar" placeholder="Search by artist" 
        onChange={event => {setSearch(event.target.value)}}/>
        
        {vinyls.filter((value)=> {
            if (search === ""){
                return value
        }   else if (value.name.toLowerCase().includes(search.toLowerCase())){
            return value
        }
        }).map(vinylItem => <div key={vinylItem.id}>
            <br/>
            <p>
                <Link to={`/categories/${vinylItem.category_id}/vinyls/${vinylItem.id}`}>
                    <button>{vinylItem.name}</button>
                </Link>
                
            </p>
        </div>)}
    
    </div>
    )
}

const mapStateToProps= state => {
    return { vinyls: state.vinyls}
}

export default connect(mapStateToProps)(Vinyls);