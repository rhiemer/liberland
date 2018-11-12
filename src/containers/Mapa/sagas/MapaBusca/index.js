import { call} from 'redux-saga/effects';
import { fromJS } from 'immutable';
import {listarEstacoes as listarEstacoesService} from '../../../../services/segmentosDeMercado';

export function* listarEstacoes() {  
    yield verificarError(
       function*()
       {
           const repos = yield call(listarEstacoesService);
           yield removePutChangeField(FORM,LISTA_MODALIDADE_INCENTIVO_FIELD,fromJS(repos.data));
       }
    ,m(messages,'erroListarModalidadeIncentivoSaga'));
  }