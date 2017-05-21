import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { LogListItem } from './loglistitem.model';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: '[log-list-item]',
    templateUrl: 'loglistitem.component.html',
   
})
export class LogListItemComponent {
    @Input() log: LogListItem;
    // @Output() detailsEvent = new EventEmitter();

    // details() {
    //     this.detailsEvent.emit(this.Log.id);
    // }

    constructor() { }
}