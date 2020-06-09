import React from 'react';
import mapboxgl from 'mapbox-gl';
import '../../styles/map.scss'

import { mapBoxPublicKey } from '../../config/keys_front'

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
            loader: true
        }

        this.updateLocation = this.updateLocation.bind(this);
    }

    componentDidMount() {
        // Receive the current location before setting up the map
        // or polling the database for updated location
        this.props.fetchLocations()
            .then(() => {
                mapboxgl.accessToken = mapBoxPublicKey;

            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/mapbox/light-v10',
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom
            })

            let size = 200;

            // implementation of CustomLayerInterface to draw a pulsing dot icon on the map
            // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
            let pulsingDot = {
                width: size,
                height: size,
                data: new Uint8Array(size * size * 4),

                // get rendering context for the map canvas when layer is added to the map
                onAdd: function () {
                    let canvas = document.createElement('canvas');
                    canvas.width = this.width;
                    canvas.height = this.height;
                    this.context = canvas.getContext('2d');
                },

                // called once before every frame where the icon will be used
                render: function () {
                    let duration = 1000;
                    let t = (performance.now() % duration) / duration;

                    let radius = (size / 2) * 0.3;
                    let outerRadius = (size / 2) * 0.7 * t + radius;
                    let context = this.context;

                    // draw outer circle
                    context.clearRect(0, 0, this.width, this.height);
                    context.beginPath();
                    context.arc(
                        this.width / 2,
                        this.height / 2,
                        outerRadius,
                        0,
                        Math.PI * 2
                    );
                    context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
                    context.fill();

                    // draw inner circle
                    context.beginPath();
                    context.arc(
                        this.width / 2,
                        this.height / 2,
                        radius,
                        0,
                        Math.PI * 2
                    );
                    context.fillStyle = 'rgba(255, 100, 100, 1)';
                    context.strokeStyle = 'white';
                    context.lineWidth = 2 + 4 * (1 - t);
                    context.fill();
                    context.stroke();

                    // update this image's data with data from the canvas
                    this.data = context.getImageData(
                        0,
                        0,
                        this.width,
                        this.height
                    ).data;

                    // continuously repaint the map, resulting in the smooth animation of the dot
                    map.triggerRepaint();

                    // return `true` to let the map know that the image was updated
                    return true;
                }
            };

            map.on('load', function () {
                map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

                map.addSource('points', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-122.465270, 37.753830]
                                }
                            }
                        ]
                    }
                });
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'pulsing-dot'
                    }
                });
            })
            setTimeout(() => {
                this.setState({ loader: false })
                console.log('success')
            }, 2500);

            // We are polling the database because it is not expensive for us,
            // because of the low latency/ zero traffic
            // This will need to be changed into a websocket connection though. 
            this.updateLocation();
        });
    }

    updateLocation() {
        setInterval(() => {
            this.props.fetchLocations()
        }, 6000) 
    }

    render() {
        const { loader } = this.state;

        return (
            <div>
                <div ref={el => this.mapContainer = el} className='map-container' />
                {
                    loader ?
                    (
                        <div className='loader-container'>
                            <div className='lds-dual-ring'></div>
                        </div>
                    ) : (
                        null
                    )
                }
    
            </div>
        )
    }
}

export default Map;
