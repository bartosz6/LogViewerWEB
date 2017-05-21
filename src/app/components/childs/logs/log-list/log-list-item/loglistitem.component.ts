import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { LogListItem } from './loglistitem.model';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: '[log-list-item]',
    templateUrl: 'loglistitem.component.html',
   
})
export class LogListItemComponent {
    @Input() log: LogListItem;
    
    constructor() { }
}