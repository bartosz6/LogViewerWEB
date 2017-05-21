import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { LogListItem } from '../log-list-item/loglistitem.model';
import { UUID } from 'angular2-uuid';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'log-list',
    templateUrl: 'loglist.component.html'
})
export class LogListComponent {
    @Input() logs: LogListItem[];
    @Input() hasMoreData: boolean;
    @Input() page: number;
    @Input() pageSize: number;
    @Output() changePageEvent = new EventEmitter();

    get showNext(): boolean { return this.hasMoreData; }
    get showPrev(): boolean { return this.page > 1; }

    nextPage() {
        if (this.showNext)
            this.changePageEvent.emit({
                startIndex: this.pageSize*this.page,
                length: this.pageSize
            });
    }

    prevPage() {
        if (this.showPrev)
            this.changePageEvent.emit({
                startIndex: this.pageSize*(this.page-2),
                length: this.pageSize
            });
    }

    constructor() {
    }
}