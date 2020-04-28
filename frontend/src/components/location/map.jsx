import React from 'react';
import mapboxgl from 'mapbox-gl';
import '../../styles/map.scss'

import { mapBoxPublicKey } from '../../config/keys_front'
// import '../../styles/map.scss'

class Map extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lng: -122.44,
            lat: 37.76,
            zoom: 11,
            map: '',
            allMarkers: [],
            dispalyNotAssignedTasks: true,
        }
    }

    componentDidMount() {
        mapboxgl.accessToken = mapBoxPublicKey;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} className='map-container' />
            </div>
        )
    }
}

export default Map;
