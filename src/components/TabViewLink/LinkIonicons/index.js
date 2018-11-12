import React from 'react';
import {View,TouchableOpacity,} from 'react-native';
import { Link } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const verificarIconAtivoDefault = (to,pathname) => {
    return to === pathname;
}

export default class LinkIonicons extends React.Component {   
    
  static defaultProps = {      
     sizeIcon:30,
     coloIcon:"rgb(204,204,204)",
     colorIconActive:"rgb(59,89,152)",
     active:false,
   };      

  render() {
    const {to,nameIcon,active,sizeIcon,stylesIcon,stylesLink,stylesTouch,coloIcon,colorIconActive,pathname,verificarIconAtivo,...props} = this.props;     
    const _active = active || verificarIconAtivo || (to && verificarIconAtivoDefault(to,pathname));
    return (
        <TouchableOpacity style={[styles.tab,stylesTouch]} {...props} >
            <Link to={to} style={stylesLink}>   
                <Icon
                    style={stylesIcon}                    
                    name={nameIcon}
                    size={sizeIcon}
                    color={_active?colorIconActive:coloIcon}/>                 
             </Link> 
        </TouchableOpacity>
    );    
  }


}

   
