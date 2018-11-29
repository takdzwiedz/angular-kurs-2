import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
    selector: 'app-todo-task',
    templateUrl: './todo-task.component.html',
    styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

    taskList = [];

    constructor(private tasksService: TasksService) {
        this.tasksService.getTasksListObs().subscribe((tasks:Array<string>)=>{
            this.taskList = tasks;
        })
    }

    ngOnInit() {
    }

    done(task: string) {
        this.tasksService.done(task);
    }

    remove(task: string) {
        this.tasksService.remove(task);
    }
    getColor():string {
        return this.taskList.length >= 5 ? 'red' : 'green'
    }
}
