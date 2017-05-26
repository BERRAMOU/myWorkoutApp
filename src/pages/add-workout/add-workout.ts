/**
 * Created by beramos on 5/26/17.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WorkoutService} from "../../services/wourkout.service";
import {WorkoutsPage} from "../workouts/workouts";

@Component({
    selector: 'addworkout',
    templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {
    title:string;
    type:string;
    note:string;

    constructor(public navCtrl:NavController, private _workoutService:WorkoutService) {
    }

    onSubmit() {
        var workout = {
            title: this.title,
            note: this.note,
            type: this.type
        };
        this._workoutService.addWorkout(workout).subscribe(
            workout => {
                console.log(workout)
            },
            err => {
                console.log(err)
            },
            () => console.log(" workout added ..")
        );
        this.navCtrl.setRoot(WorkoutsPage);
    }

}
