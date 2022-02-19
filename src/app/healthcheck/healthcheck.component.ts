import { Component } from "@angular/core";

@Component({
    selector: 'healthcheck',
    templateUrl: './healthcheck.component.html',
    //styleUrls:['./healthcheck.component.css']
})
export class HealthCheckComponent{

    apiHealthStatus :string="Unhealthy me!";

    getApiHealthCheck(){
         this.apiHealthStatus = "Healthy now when I was clicked!";
    }
}