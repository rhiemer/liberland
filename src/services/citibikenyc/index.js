import {requestGET} from '../../framework/request'
import {URL_CITIBIKENYC} from './constants'

export function listarEstacoes() {    
  return requestGET(URL_CITIBIKENYC);        
} 