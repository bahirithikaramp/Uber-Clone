import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZWxlZ2VuZCIsImEiOiJja3ZseDB3OGIwYnljMzNxZjllbHlqaW1qIn0.Hpfog2_pya3x3zhuQJ80GQ';


const Map = (props) => {
    
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3,
        });
        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates)
        }
        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates)
        }
        if (props.dropoffCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.dropoffCoordinates, props.pickupCoordinates
            ], {
                padding: 60
            })
        }
    }, [props.pickupCoordinates, props.dropoffCoordinates])

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }

    return (
        <Wrapper id='map'>
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1 h-1/2
`
