import React from 'react';
import { View } from 'react-native';
import { m } from '../../util/messages';
import LoadingIcon from '../LoadingIcon';

class Loading extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  static defaultProps = {          
    show:true,
    children:m('components.load.carregando'),
    enableLoad:true,
    load:<LoadingIcon/>,    
  };
  
   renderIcon() {
    const {enableLoad,load} = this.props;  
    if (load && enableLoad)    
    {
       return load;
    }
    else
    {
       return null;
    }
  }
  
  render() {
    const {show,children,} = this.props;  
    if (show)    
    {
       return (
         <View>
            {this.renderIcon()}
            {children}
         </View>         
       );
    }
    else
    {
       return null;
    }
  }


}

export default Loading;