import {Injectable} from '@angular/core';
import {BehaviorSubject} from '../../../node_modules/rxjs';
import {Observable} from '../../../node_modules/rxjs';

@Injectable ()
export class TasksService {
    private taskList: Array<string> = [];
    private taskDone: Array<string> = [];

    private tasksListObs = new BehaviorSubject<Array<string>>(this.taskList);
    private tasksDoneObs = new BehaviorSubject<Array<string>>(this.taskList);

    constructor() {
        this.taskList = ['Przeczytać Finansowego Ninja', 'Zrobić Kurs Angulara', 'Zrobić Szpagat', 'Zrobić widok akcji polisowych', 'Przeżyć dzień w skupieniu na przepływie powietrza'];
        this.tasksListObs.next(this.taskList)
    }

    add(task: string) {
        this.taskList.push(task);
        this.tasksListObs.next(this.taskList);
    }

    remove(task: string) {
        this.taskList = this.taskList.filter(e => e !== task);
        this.tasksListObs.next(this.taskList);
    }

    done(task: string) {
        this.taskDone.push(task);
        this.remove(task);
        this.tasksDoneObs.next(this.taskDone);
    }

    getTasksListObs():Observable<Array<string>> {
        return this.tasksListObs.asObservable();
    }
    getTasksDoneObs():Observable<Array<string>> {
        return this.tasksDoneObs.asObservable();
    }
}