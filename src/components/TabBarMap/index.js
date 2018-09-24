import React from 'react';

export default ({tabs,propsTouch,...props}) =>   
    <View>
        {tabs.map((tab, i) => {      
            return 
            <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} {...propsTouch} >
               <Icon                
                name={tab}                
                ref={(icon) => { this.tabIcons[i] = icon; }}
                {...props}
              />
            </TouchableOpacity>;
        })}    
    </View>  
