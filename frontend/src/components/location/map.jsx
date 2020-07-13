import React, { useState, useEffect, useReducer, useRef } from 'react';
import ReactGA from 'react-ga';
import mapboxgl from 'mapbox-gl';
import '../../styles/map.scss';

import * as dataGeo from '../../trails/PCT.json';
import * as CDTGeo from '../../trails/CDT.json'
import {createPulsingDot} from './util/pulsing_dot';
import { mapBoxPublicKey } from '../../config/keys_front';
import { parseLocation } from '../../util/location_util';

const Map = (props) => {
    // Destructure props
    const { fetchLocations, fetchGeojson, adventures } = props;
    const mapContainer = useRef(null);

    const [mapOptions, setMapOptions] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            lng: -122.44,
            lat: 37.76,
            zoom: 9,
        }
    );

    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
    const [map, setMap] = useState('');
    const [loader, setLoader] = useState(true);

    const handleMap = (res) => {
        mapboxgl.accessToken = mapBoxPublicKey;

        let data;
        if (res.data === undefined) {
            data = {
                data: {
                    location: mapOptions.lat.toString() + ',' + mapOptions.lng.toString()
                }
            }
        } else {
            data = res.data.data
        }

        const coords = parseLocation(Object.values(data)[0], false);
        setLng(coords[1])
        setLat(coords[0])

        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/light-v10',
                center: [coords[1], coords[0]],
                zoom: mapOptions.zoom
            });

            setMap(map);

            // We are writing the data into a function to handle any potential errors
            // and too keep our code DRY because we use this in multiple places in
            // order to configure the map in realtime. 
            let updatedData = (coords) => {
                let long;
                let lat;
                if (coords === undefined) {
                    long = mapOptions.lng;
                    lat = mapOptions.lat;
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

            const setSourceOfRoutes = (data) => {
                const routes = ['PCTroute', 'CDTroute', 'CCTroute'];

                if(routes.length !== data.length) return;

                for (let i = 0; i < routes.length; i++) {
                    map.addSource(routes[i], {
                        'type': 'geojson',
                        'data': data[i]
                    });

                    map.addLayer({
                        'id': routes[i],
                        'type': 'line',
                        'source': routes[i],
                        'layout': {
                            'line-join': 'round',
                            'line-cap': 'round'
                        },
                        'paint': {
                            'line-color': '#555',
                            'line-width': 4
                        }
                    });
                }
            }

            map.on('load', () => {
                map.addImage('pulsing-dot', createPulsingDot(map), { pixelRatio: 3 });

                map.addSource('points', {
                    'type': 'geojson',
                    'data': updatedData(coords)
                });

                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'pulsing-dot'
                    }
                });
                if(Object.keys(props.adventures).length === 0) {
                    fetchGeojson()
                        .then(res => setSourceOfRoutes(res.data.data))
                } else {
                    setSourceOfRoutes(adventures);
                }
            });

            // map.on('mouseover', 'CDTroute', (e) => {
            //     let value = e.features[0].layer.id
            //     map.setPaintProperty(value, 'line-color', '#111')
            // });
        };
        if (!map) initializeMap({ setMap, mapContainer });
    }


    useEffect(() => {

        fetchLocations()
            .then((res) => {
                handleMap(res);
            })
            .then((res) => {
                setTimeout(() => {
                    setLoader(false);
                }, 2500);
            })

        if (window.location.hostname !== 'localhost') {
            ReactGA.initialize('UA-162754702-2');
            ReactGA.pageview('/location');
        }
        console.log(props)
    }, [map]);

    return (
        <div>
            <div ref={el => mapContainer.current = el} className='map-container' />
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

export default Map;
