import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'



function StatsBar() {
    return (
        <div className="card" >
            <div className="card-body d-flex justify-content-between">
                <div className="d-flex">
                    <h2 className="card-title">6</h2>
                    <h2 className="card-text ml-3">Articles</h2>

                </div>
                <button className="btn btn-light">
                    <h3>
                        <FontAwesomeIcon icon={faAlignLeft} />
                    </h3>
                </button>
            </div>
        </div>
    );
}

export default StatsBar
