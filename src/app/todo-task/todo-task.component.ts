import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../models/task';

@Component({
    selector: 'app-todo-task',
    templateUrl: './todo-task.component.html',
    styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

    taskList: Array<Task> = [];

    constructor(private tasksService: TasksService) {
        this.tasksService.getTasksListObs().subscribe((tasks:Array<Task>)=>{
            this.taskList = tasks.filter(t=> t.isDone === false)
        })
    }

    ngOnInit() {
    }

    done(task: Task) {
        this.tasksService.done(task);
    }

    remove(task: Task) {
        this.tasksService.remove(task);
    }
    getColor():string {
        return this.taskList.length >= 5 ? 'red' : 'green'
    }
    save(){
        this.tasksService.saveTaskInDb();
    }
}
1