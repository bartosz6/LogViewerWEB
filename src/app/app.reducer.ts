import { LogListState } from './components/containers/logs/log-list/loglist.reducer';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
    logList: LogListState,
    router: RouterState
}