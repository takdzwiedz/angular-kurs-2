import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    taskList: Array<string> = [];
    taskDone: Array<string> = [];

    ngOnInit(): void {
        this.taskList = ['Przeczytać Finansowego Ninja', 'Zrobić Kurs Angulara', 'Zrobić Szpagat', 'Zrobić widok akcji polisowych', 'Przeżyć dzień w skupieniu na przepływie powietrza']
    }

    add(task:string) {
        this.taskList.push(task);
    }

    remove(task: string) {
        this.taskList = this.taskList.filter(e => e !== task);
    }

    done(task: string) {
        this.taskDone.push(task);
        this.remove(task);
    }
}
