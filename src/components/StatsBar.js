import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'



export default class StatsBar extends React.Component {

render() {
    let iconName;
    console.log(this.props, 'props')
    switch (this.props.name) {
        case 'articles':
            iconName = faAlignLeft;
            break;
        case 'comments':
            iconName = faComments;
            break;
    }
    return (
        <div className="card" >
            <div className="card-body d-flex justify-content-between">
                <div className="d-flex">
                    <h2 className="card-title">{this.props.number}</h2>
                    <h2 className="card-text ml-3">{this.props.name}</h2>

                </div>
                <button className="btn btn-light">
                    <h3>
                        <FontAwesomeIcon icon={iconName} />
                    </h3>
                </button>
            </div>
        </div>
    );}
}

