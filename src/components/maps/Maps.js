import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';

export class Maps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    var icon1 = {
      url: "https://cdn4.iconfinder.com/data/icons/ghost-face-1/600/264_happy_surprised_emoji_emoticon_smiley_ghost-512.png", // url
      scaledSize: new this.props.google.maps.Size(60, 60), // scaled size
    };
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <Marker onClick={this.onMarkerClick} name={'Blue Circle'} icon={icon1} scaledSize={ new this.props.google.maps.Size(90, 42)} position={{lat: 28.527083333333334 , lng: 77.57249999999999}} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCoI2T2FnxNjIrGr-VdkVntcEfItuvMSos'
})(Maps);