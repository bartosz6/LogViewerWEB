import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import * as logsListActions from '../log-list/loglist.actions';
import { ILogService } from '../../../../infrastructure/services/ILogService';

@Injectable()
export class LogsEffects {
    constructor(
        private actions$: Actions,
        private logsService: ILogService
    ) { }

    @Effect() loadPosts$ = this.actions$.ofType(logsListActions.ActionTypes.CHANGE_PAGE)
        .map(action => action.payload)
        .switchMap(payload => this.logsService.getLogs(payload))
        .map(result => new logsListActions.ChangePageOk({
            logs: result.data,
            hasMoreData: result.hasMoreData
        }))
        .catch(ex => {
            return Observable.of(new logsListActions.ChangePageError({
                message: ex
            }))
        });
}