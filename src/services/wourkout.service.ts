import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {
    apiKey      : string ;
    workoutsUrl : string ;
    
    constructor(private http:Http){
        this.apiKey = 'x7avv4pC6ZeHqQ3_dHOUxKpgW-jstD8D';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkoutapp/collections/workouts';
        console.log("service connected ...")
    }

    getWorkouts(){
        return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }
}