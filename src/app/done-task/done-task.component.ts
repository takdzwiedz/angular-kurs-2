import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../models/task';

@Component({
    selector: 'app-done-task',
    templateUrl: './done-task.component.html',
    styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

    taskDone: Array<Task> = [];

    constructor(private tasksService: TasksService) {
        this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) =>{
            this.taskDone = tasks.filter(t => t.isDone == true);
        })
    }

    ngOnInit() {
    }

}
