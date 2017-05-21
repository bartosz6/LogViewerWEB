import { Component, OnInit, OnDestroy, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { LogListItem } from '../../../childs/logs/log-list/log-list-item/loglistitem.model';
import { UUID } from 'angular2-uuid';
import { State, Store } from "@ngrx/store";
import { AppState } from '../../../../app.reducer';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/skip';
import 'rxjs/add/observable/combineLatest';
import * as logListReducer from './loglist.reducer';
import * as logListActions from './loglist.actions';
import { go, replace, search, show, back, forward } from '@ngrx/router-store';

@Component({
    //  changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'log-list-container',
    templateUrl: 'loglist.container.html'
})
export class LogListContainer implements OnInit, OnDestroy {
    logs: Observable<LogListItem[]>;
    hasMoreData: Observable<boolean>;
    pageNumber: Observable<number>;
    pageSize: Observable<number>;

    changePage(request) {
        this._store.dispatch(
            new logListActions.ChangePage(request)
        );
    }

    ngOnInit() {
        this._store.dispatch(
            new logListActions.ChangePage({
                startIndex: 0,
                length: 5
            })
        );
    }

    ngOnDestroy() {
        
    }

    constructor(
        private _store: Store<AppState>, 
        private _route: ActivatedRoute) {
        this.logs = _store.select(a => a.logList).let(logListReducer.getLogs);
        this.hasMoreData = _store.select(a => a.logList).let(logListReducer.getHasMoreData);
        this.pageNumber = _store.select(a => a.logList).let(logListReducer.getPageNumber);
        this.pageSize = _store.select(a => a.logList).let(logListReducer.getPageSize);
    }
}