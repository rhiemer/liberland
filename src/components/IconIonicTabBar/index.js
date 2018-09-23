import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IconIonicTabBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    static defaultProps = {          
        active:false,
        color:'rgb(204,204,204)',
        activeColor:'rgb(59,89,152)',
      };
      

    render() {
        const {active,activeColor,color,...props} = {...this.props}; 
        return (
            <Icon  color={active? activeColor : color}  {...props}/>
        );
        
      }    

}
