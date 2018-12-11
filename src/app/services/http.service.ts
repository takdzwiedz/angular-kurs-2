import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Task} from '../models/task';
import {Observable} from '../../../node_modules/rxjs';

@Injectable()
export class HttpService {

    readonly URL_DB = 'https://api.mlab.com/api/1/databases/angular_db/collections/tasks';
    readonly param = new HttpParams().set('apiKey', 'AOvLJDMR-6JCBwlH8J8YPd3aJSpjTtZw');


    constructor(private http: HttpClient) {
        this.getTasks();
    }

    getTasks(): Observable<Array<Task>> {
        return this.http.get<Array<Task>>(this.URL_DB, {params: this.param});
    }

    saveTasks(data: Array<Task>) {
        this.http.put(this.URL_DB, data, {params: this.param}).subscribe(tasks => {
            console.log(data);
        });
    }
}