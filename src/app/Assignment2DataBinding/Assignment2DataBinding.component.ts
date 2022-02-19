import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'assignment2',
    templateUrl: './Assignment2DataBinding.component.html'
})

export class Assignment2DataBindingComponent{

    username='jj';

    reset(){
        this.username='';
    }

    checkUName(){
        return this.username=='';
    }

}