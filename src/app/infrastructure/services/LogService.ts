import { Http, Response, Request } from '@angular/http';
import { LogListItem } from '../../components/childs/logs/log-list/log-list-item/logListItem.model';
import { ILogService } from './ILogService';
import { URLSearchParams, QueryEncoder, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AppConsts } from '../../app.consts';

@Injectable()
export class LogService implements ILogService {
    constructor(
        private http: Http,
        private appConsts: AppConsts
    ) { }

    getLogs(query: any): Observable<LogListItem[]> {
        let params: URLSearchParams = new URLSearchParams();
        
        params.set('start', query.startIndex.toString());
        params.set('limit', query.length.toString());

        let result = this.http.get(this.appConsts.API_URL + "logs", {
            search: params
        });
        
        return result.map(response => response.json());
    }
}

