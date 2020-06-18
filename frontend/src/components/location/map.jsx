import React from 'react';
import ReactGA from 'react-ga';
import mapboxgl from 'mapbox-gl';
import '../../styles/map.scss'

import { mapBoxPublicKey } from '../../config/keys_front';
import { parseLocation } from '../../util/location_util';


class Map extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lng: -122.44,
            lat: 37.76,
            zoom: 9,
            map: '',
            updated: false,
            loader: true
        }

        this.handleMap = this.handleMap.bind(this);
    }

    componentDidMount() {
        this.handleMap();
    }

    handleMap() {
        // Receive the current location before setting up the map
        // or polling the database for updated location
        this.props.fetchLocations()
            .then((res) => {
                // Here we are making sure that the state is positioned correctly,
                // for the component to mount

                let data;
                if(res.data === undefined) {
                    data = {
                        data: {
                            location: this.state.lat.toString() + ',' + this.state.lng.toString()
                        }
                    }
                } else {
                    data = res.data.data
                }
                
                const coords = parseLocation(Object.values(data)[0], false);

                this.setState({
                    lng: coords[1],
                    lat: coords[0]
                });

                //setup the map
                mapboxgl.accessToken = mapBoxPublicKey;

                const map = new mapboxgl.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/mapbox/light-v10',
                    center: [this.state.lng, this.state.lat],
                    zoom: this.state.zoom
                })

                // Save map to the state
                this.setState({ map })

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

                // We are writing the data into a function to handle any potential errors
                // and too keep our code DRY because we use this in multiple places in
                // order to configure the map in realtime. 
                let updatedData = (coords) => {
                    let long;
                    let lat;
                    if (coords === undefined) {
                        long = this.state.lng;
                        lat = this.state.lat;
                    } else {
                        long = coords[1];
                        lat = coords[0];
                    }
                    return {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [long, lat]
                                }
                            }
                        ]
                    }
                }

                map.on('load', () => {
                    map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 3 });
                    window.setInterval(() => {
                        this.props.fetchLocations()
                            .then(res => {
                                // We are polling the database, and it is not expensive for us,
                                // because of the low latency/ zero traffic
                                // This will need to be changed into a websocket connection though. 
                                const updatedCoords = res.data.data;
                                const location = parseLocation(Object.values(updatedCoords)[0], false);

                                // This allows us to choose which attribute of the map we want,
                                // and change it and see those reflections on the map itself. 
                                map.getSource('points').setData(updatedData(location));
                                map.flyTo({ center: [location[1], location[0]] });
                            })
                    }, 30000);

                    map.addSource('points', {
                        'type': 'geojson',
                        'data': updatedData()
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

                // This is a hard coded timeout for the loading spinner. 
                setTimeout(() => {
                    this.setState({ loader: false })
                }, 2500);
            });

        if (window.location.hostname !== 'localhost') {
            ReactGA.initialize('UA-162754702-2');
            ReactGA.pageview('/blog');
        }
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
