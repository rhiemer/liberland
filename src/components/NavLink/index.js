import React from 'react';
import {TouchableHighlight,} from 'react-native';

const NavLink = ({to, children}, context) => {
  const pressHandler = () => context.router.transitionTo(to);
  return (
    <TouchableHighlight onPress={pressHandler}>
      {children}
    </TouchableHighlight>
  )
}
NavLink.contextTypes = {router: React.PropTypes.object}

export default NavLink;