import { Action } from '@ngrx/store';
import { UUID } from 'angular2-uuid';
import { LogListItem } from '../../../childs/logs/log-list/log-list-item/loglistitem.model';

export const ActionTypes = {
    CHANGE_PAGE : "CHANGE_PAGE",
    CHANGE_PAGE_OK : "CHANGE_PAGE_OK",
    CHANGE_PAGE_ERROR : "CHANGE_PAGE_ERROR"
}

export interface ChangePageModel {
    startIndex: number;
    length: number; 
}

export interface ChangePageOkModel {
    hasMoreData: boolean;
    logs: Array<LogListItem>;
}

export interface ChangePageErrorModel {
    message: any;
}

export class ChangePage implements Action {
    type = ActionTypes.CHANGE_PAGE;
    constructor(public payload: ChangePageModel) {};
}

export class ChangePageOk implements Action {
    type = ActionTypes.CHANGE_PAGE_OK;
    constructor(public payload: ChangePageOkModel) {};
}
export class ChangePageError implements Action {
    type = ActionTypes.CHANGE_PAGE_ERROR;
    constructor(public payload: ChangePageErrorModel) {};
}


