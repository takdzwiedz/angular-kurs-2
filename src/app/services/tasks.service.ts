import {Injectable} from '@angular/core';
import {BehaviorSubject} from '../../../node_modules/rxjs';
import {Observable} from '../../../node_modules/rxjs';
import {Subject} from '../../../node_modules/rxjs';
import {Task} from '../models/task';
import {HttpService} from './http.service';

@Injectable()
export class TasksService {

    private tasksListObs = new BehaviorSubject<Array<Task>>([]);

    constructor(private httpService: HttpService) {
        this.httpService.getTasks().subscribe(list => {
            this.tasksListObs.next(list);
        });
    }

    add(task: Task) {
        const list = this.tasksListObs.getValue();
        list.push(task);
        this.tasksListObs.next(list);
    }

    remove(task: Task) {
        const taskList = this.tasksListObs.getValue().filter(e => e !== task);
        this.tasksListObs.next(taskList);
    }

    done(task: Task) {
        task.end = new Date().toLocaleString();
        task.isDone = true;
        const list = this.tasksListObs.getValue();
        this.tasksListObs.next(list);
    }

    getTasksListObs(): Observable<Array<Task>> {
        return this.tasksListObs.asObservable();
    }
    saveTaskInDb() {
        this.httpService.saveTasks(this.tasksListObs.getValue());
    }
}