const envVariableRecuperarValor = (propriedade,valorDefault='') => {    
  return process.env.hasOwnProperty(propriedade)?process.env[propriedade]:valorDefault;    
};

const envVariablesRecuperarValor = (propriedades,valorDefault='') => {
  const result = propriedades.filter(propriedade => propriedades.hasOwnProperty(propriedade));
  return (result.length > 0)?process.env[result[0]]:valorDefault;         
};

export {
  envVariableRecuperarValor,
  envVariablesRecuperarValor,
}; 