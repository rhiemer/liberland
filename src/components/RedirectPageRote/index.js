
const compareDefault = ({history,from}) =>
{
    const pathname = history && history.location && history.location.pathname;     
    return (from && pathname && pathname === from);     
}

export default ({compare,to,children,...props}) => 
{   
  const _compare = compare || (()=>{return compareDefault(props)});
  const {history} = {...props};
  if (history && to && _compare(props) === true)    
    history.push(to);
  return children;
} 


