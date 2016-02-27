import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 37.78,
  lng: -122.41
};

const SimpleMap = React.createClass({

// constructor(props){
//   super(props);
// }
//
// var newCoords = this.props.coordinates;
//console.log("Inside SimpleMap", this.props.coordinates);


  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    console.log("Inside SimpleMap", this.props.coordinates[0]);
    var lat, long;
    var len = this.props.coordinates.length;
    this.props.coordinates[0]?lat = this.props.coordinates[len-1].lat:lat = coords.lat;
    this.props.coordinates[0]?long = this.props.coordinates[len-1].lng:long = coords.long;

    return (
      <Gmaps
        width={'600px'}
        height={'600px'}
        lat={lat}
        lng={long}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>

        <Marker
          lat={lat}
          lng={long}
          draggable={true}
          onDragEnd={this.onDragEnd} />

        <InfoWindow
          lat={lat}
          lng={long}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />

        <Circle
          lat={lat}
          lng={long}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

});

export default SimpleMap;
