import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { AuthHttp } from 'angular2-jwt';

//reducers
import { logListReducer } from './components/containers/logs/log-list/loglist.reducer';

//containers
import { AppComponent } from './app.component';
import { LogListContainer } from './components/containers/logs/log-list/loglist.container';

//childs
import { SimpleInputComponent } from './components/childs/common/input/simpleinput.component';
import { LogListComponent } from './components/childs/logs/log-list/log-list/loglist.component';
import { LogListItemComponent } from './components/childs/logs/log-list/log-list-item/loglistitem.component';

//effects
import { LogsEffects } from './components/containers/logs/effects/logs.effects';

//common
import { AppConsts } from './app.consts';

//services
import { LogService } from './infrastructure/services/LogService';
import { ILogService } from './infrastructure/services/ILogService';

const appRoutes: Routes = [
  { path: 'logs/:page', component: LogListContainer },
  { path: '**', redirectTo: 'logs/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, LogListContainer,
    
    LogListComponent, LogListItemComponent, SimpleInputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({
      router: routerReducer,
      logList: logListReducer
    }),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 50
    }),
    EffectsModule.run(LogsEffects),
    ReactiveFormsModule
  ],
  providers: [
    { provide: AppConsts, useClass: AppConsts },
    { provide: ILogService, useClass: LogService },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
