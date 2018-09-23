import React from 'react';
import { m } from '../../util/messages';
import Loading from '../Loading'
import Mensagem from '../Mensagem'

class LoadingLoadble extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
   
  static defaultProps = {        
     isLoading:false,
     error:false,
     mensagemLoading:m('components.load.loadMessage'),
     mensagemErro:m('components.load.erroCarregando'),    
  }; 
  
  render() {       
    
         const {isLoading,error,mensagemErro,mensagemLoading} = this.props;                   
          if (isLoading === true)
          {
            return(              
                <View>
                    <Loading>{mensagemLoading}</Loading>
                </View>
            );
          }
          else if (error)
          {            
            return(              
                <Mensagem mensagem={mensagemErro} />                  
            );
          }
          else
          {
            return null;
          }
 
  }  
  
  
}

export default LoadingLoadble;