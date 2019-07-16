import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'



export default class StatsBar extends React.Component {
render() {
    console.log(this.props)
    return (
        <div className="card" >
            <div className="card-body d-flex justify-content-between">
                <div className="d-flex">
                    <h2 className="card-title">{this.props.number}</h2>
                    <h2 className="card-text ml-3">{this.props.name}</h2>

                </div>
                <button className="btn btn-light">
                    <h3>
                        <FontAwesomeIcon icon={faAlignLeft} />
                    </h3>
                </button>
            </div>
        </div>
    );}
}

