import React from "react";
import { MapView } from "expo";
import styles from './styles';

 export default class MapaBusca extends React.PureComponent {   
   
  static defaultProps = {        
     region:{
            latitude: 40.76727216,
            longitude: -73.99392888,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
    provider:"google"          
  };    

  render() {
    const {style,...props} = this.props;     
    return (
      <MapView style={[styles.mapaBusca,style]} {...props}/>
    );
  }
}

