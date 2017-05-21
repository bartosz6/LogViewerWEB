# LogViewer web application
Angular2 + ngrx application for log browsing.

## Test environment
http://logviewerweb.azurewebsites.net/

## How to run it locally
1. Clone or download repository
2. Install @angular/cli: 1.0.0-rc.1
3. Host https://github.com/bartosz6/LogViewerAPI locally or use http://logviewerapi.azurewebsites.net
4. Make sure APIs url in app.consts.ts is correct
5. Use 'ng serve' from repository directory
6. Open localhost:4200 in your browser

## Features
- pagination
- sorting by date/ response code/ response size

## Used libs
1. Angular2
2. ngrx/store
3. ngrx/router-store
4. materializecss
