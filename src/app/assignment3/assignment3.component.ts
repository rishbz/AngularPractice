import { Component } from "@angular/core";

@Component({
    selector: 'assignment3',
    templateUrl: './assignment3.component.html'
})
export class Assignment3{

    arrayOfData =[0];
    i=0;
    showme:boolean = true;
    toggle(){
        this.i+=1;
        this.arrayOfData.push(this.i);
        if(this.showme){
            this.showme = false;
        }
        else{
            this.showme = true;
        }
    }

    getStatus(){
        return this.showme;
    }
}