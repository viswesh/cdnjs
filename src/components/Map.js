import React, { Component } from 'react';
import './App.css';
import geoJSON from '../data/worldGeoJSON';
// import trends from '../data/trendsSample';
import { geoMercator, geoPath } from 'd3-geo';
import { zoom } from 'd3-zoom';

class Map extends Component {
    handleMarker(d) {
        alert(d.geoName);
    }
    render() {
        const info = this.props.info;
        const markersData = info.trends.geoMapData;

        const projection = geoMercator()
            .scale(120)
            .translate([430, 250]);
        const pathGenerator = geoPath().projection(projection)
        const countries = geoJSON.features
            .map((d, i) => <path
                key={'path' + i}
                d={pathGenerator(d)}
                style={mapStyle}
                fill={`rgba(240,219,79,${1 / geoJSON.features.length * i})`}
                className='countries'
            />)

        let markers = markersData && markersData
            .map((d, i) => <circle
                key={'marker' + i}
                cx={projection([d.coordinates.lng, d.coordinates.lat])[0]}
                cy={projection([d.coordinates.lng, d.coordinates.lat])[1]}
                r={(d.value[0] / 10)}
                fill="#009ACD"
                onClick={() => this.handleMarker(d)}
                className="marker" />)

        let noMarkers = false;
        if (!(markers && markers.length > 0)) {
            markers = <text style={textStyle} x="350" y="200">No data available</text>
            noMarkers = true;
        }


        const baseSVg = (
            <svg viewBox="50 0 800 500" preserveAspectRatio="xMinYMin meet" style={svgStyle}>
                <g className={(noMarkers) ? 'svgMuted' : 'svgStyle'} >
                    {countries}
                </g>

                <g className="markers">
                    {markers}
                </g>
        </svg>)

        return baseSVg;

    }
}

const svgStyle = {

}

const textStyle = {
    fontSize: "24px",
    fill: "rgba(0,0,0,.6)"
}

const svgMuted = {
    opacity: "0.2"
}

const mapStyle = {
    stroke: "black",
    strokeOpacity: 0.5
}
export default Map;