
export  function objError(response) {
  const error = new Error(response.statusText);
  error.response = response;
  return error;
}

export  function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  else
  {
     throw objError(response);   
  }
}

export  function parseJSON(response) {  
  return response.json();
}    

export  function request(url,options) {
  let params = !options ? {} : options;
  return fetch(url, params)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => {    
       console.error(err);
       throw err;
    });
}

export  function wrapRequest(url, m, options) {
  return request(url, {
    method: m,
    ...options
   });   
}

export  function addBody(body,options) {  
  if (body)
  {
    const _options = {body,...options};
    return _options;
  }  
  else 
   return options;   
}    

export  function requestGET(url,options) {
  return wrapRequest(url,'GET',options);   
}

export  function requestPOST(url,body,options) {
  return wrapRequest(url,'POST',addBody(body,options));   
}

export  function requestPUT(url,body,options) {
  return wrapRequest(url,'PUT',addBody(body,options));   
}

export  function requestDELETE(url,options) {
  return wrapRequest(url,'DELETE',options);   
}

