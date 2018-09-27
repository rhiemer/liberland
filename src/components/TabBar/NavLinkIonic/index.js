import React from 'react';
import Icon from './IconIonic'
import NavLink from './NavLink'

export default ({tabs,to,icon,nameIcon,propsTouch,active,...props}) =>   
    <NavLink to={to} {...props} >
        <Icon name={nameIcon} ref={icon} active={active} {...propsTouch}/>
    </NavLink>;
