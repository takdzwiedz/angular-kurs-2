import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-lista-zadan',
    templateUrl: './lista-zadan.component.html',
    styleUrls: ['./lista-zadan.component.css']
})
export class ListaZadanComponent implements OnInit {

    newTask: string;
    taskList: Array<string> = [];
    doneList: Array<string> = [];

    add() {
        this.taskList.push(this.newTask);
        this.newTask = '';
    }

    remove(task: string) {
        this.taskList = this.taskList.filter(e => e !== task);
    }

    done(task: string) {
        this.doneList.push(task);
        this.remove(task);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
