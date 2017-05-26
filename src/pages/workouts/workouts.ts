import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WorkoutService} from "../../services/wourkout.service";
import {WorkoutDetailPage} from "../workout-details/workout-details";

@Component({
    selector: 'workout',
    templateUrl: 'workouts.html'
})
export class WorkoutsPage implements OnInit {
    workouts:Array<Object>;

    constructor(public navCtrl:NavController , private navParams : NavParams , private _workoutService:WorkoutService) {
        this._workoutService.getWorkouts().subscribe(
            workouts => {
                this.workouts = workouts;
            });
    }

    ngOnInit():void {
        this._workoutService.getWorkouts().subscribe(
            workouts => {
                this.workouts = workouts;
            });
    }

    workoutSelected(event, workout) {

        this.navCtrl.push(WorkoutDetailPage,{
            workout: workout
        });
        // console.log(workout)
    }
}
