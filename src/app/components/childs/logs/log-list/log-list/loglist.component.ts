import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { LogListItem } from '../log-list-item/loglistitem.model';
import { UUID } from 'angular2-uuid';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'log-list',
    templateUrl: 'loglist.component.html'
})
export class LogListComponent implements OnInit {
    @Input() logs: LogListItem[];
    @Input() hasMoreData: boolean;
    @Input() page: number;
    @Input() pageSize: number;

    @Output() changePageEvent = new EventEmitter();
    @Output() changeSortColumnEvent = new EventEmitter();

    get showNext(): boolean { return this.hasMoreData; }
    get showPrev(): boolean { return this.page > 0; }

    get noContent(): boolean { return this.logs.length === 0; }

    nextPage() {
        if (this.showNext)
            this.changePageEvent.emit({
                page: this.page+1,
                length: this.pageSize
            });
    }

    prevPage() {
        if (this.showPrev)
            this.changePageEvent.emit({
                page: this.page-1,
                length: this.pageSize
            });
    }

    ngOnInit(): void {
    }

    sort(columnName) {
        this.changeSortColumnEvent.emit({
            columnName
        });
    }

    constructor() {
    }
}