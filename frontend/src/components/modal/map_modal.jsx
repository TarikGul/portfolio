import React from 'react';
import data from '../../util/map_trails_data';

const MapModal = (props) => {
    const { route } = props;
    const trail = data.routes[route];


    return (
        <div className='map-modal-container'>
            'HEY this is george please open up'
        </div>
    )
}

export default MapModal;