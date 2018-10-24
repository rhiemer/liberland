import React from "react";
import MapaBusca from '../../components/MapaBusca';

 export default class Mapa extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = { isLoading: true, markers: [] };
  }

  componentDidMount() {
    this.fetchMarkerData();
  }

  fetchMarkerData() {
    fetch("https://feeds.citibikenyc.com/stations/stations.json")
      .then(response => response.json())
      .then(responseJson => {        
        this.setState({
          isLoading: false,
          markers: responseJson.stationBeanList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderMarkers() {

    return this.state.isLoading
      ? null
      : this.state.markers.map((marker, index) => {
          const coords = {
            latitude: marker.latitude,
            longitude: marker.longitude
          };

          const metadata = `Status: ${marker.statusValue}`;
          

          return (
            <MapView.Marker
              key={index}
              coordinate={coords}
              title={marker.stationName}
              description={metadata}
            />
          );
        });
  }
  

  render() {    
    return (
        <MapaBusca key="mapApp">
          {this.renderMarkers()}
        </MapaBusca>
    );
  }
}

