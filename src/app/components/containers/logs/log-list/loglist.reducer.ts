import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/count';
import *  as actions from './loglist.actions'
import { Observable } from 'rxjs';
import { LogListItem } from '../../../childs/logs/log-list/log-list-item/loglistitem.model';
import { UUID } from 'angular2-uuid';
import { Action } from '@ngrx/store';

export interface LogListState {
    logs: Array<LogListItem>;
    hasMoreData: boolean;
    page: number;
    pageSize: number;
}

const initialState: LogListState = {
    logs: [],
    page: 1,
    pageSize: 5,
    hasMoreData: false
}

export function logListReducer(state = initialState, action: Action): LogListState {
    switch (action.type) {
        case actions.ActionTypes.CHANGE_PAGE:
            {
                const payload: actions.ChangePageModel = action.payload;
                console.log(payload);
                return Object.assign({}, state, {
                    page: payload.startIndex / state.pageSize + 1
                });
            }
        case actions.ActionTypes.CHANGE_PAGE_OK:
            {
                const payload: actions.ChangePageOkModel = action.payload;

                return Object.assign({}, state, {
                    logs: [...payload.logs],
                    hasMoreData: payload.hasMoreData
                });
            }
        case actions.ActionTypes.CHANGE_PAGE_ERROR:
            {
                console.info(action.payload.message);
                return state;
            }
        default:
            return state;
    }
}

export function getLogs(state$: Observable<LogListState>) {
    return state$.select(state => state.logs);
}

export function getLogsCount(state$: Observable<LogListState>) {
    return state$.select(state => state.logs.length);
}

export function getHasMoreData(state$: Observable<LogListState>) {
    return state$.select(state => state.hasMoreData);
}

export function getPageSize(state$: Observable<LogListState>) {
    return state$.select(state => state.pageSize);
}

export function getPageNumber(state$: Observable<LogListState>) {
    return state$.select(state => state.page);
}