import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-todo-task',
    templateUrl: './todo-task.component.html',
    styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

    @Input()
    taskList = [];

    @Output()
    emitDone = new EventEmitter<string>();
    @Output()
    emitRemove = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    done(task: string) {
        this.emitDone.emit(task);
    }

    remove(task: string) {
        this.emitRemove.emit(task);
    }
    getColor():string {
        return this.taskList.length >= 5 ? 'red' : 'green'
    }
}
