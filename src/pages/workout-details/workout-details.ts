/**
 * Created by beramos on 5/26/17.
 */
import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import {WorkoutService} from "../../services/wourkout.service";
import {WorkoutsPage} from "../workouts/workouts";

@Component({
    selector: 'workout-detail',
    templateUrl: 'workout-details.html'
})
export class WorkoutDetailPage {
    workout : any ;
    constructor(public navCtrl: NavController , private navParams: NavParams , private _workoutSevice: WorkoutService) {
    this.workout = navParams.get("workout");
    }

    onDelete(workout_id){
        // console.log(workout_id);
        this._workoutSevice.deleteWorkout(workout_id).subscribe(
            data => {
                console.log(data)
            },
            err => {
                console.log(err)
            },
            () => console.log(" workout deleted  ..")
        );

        this.navCtrl.setRoot(WorkoutsPage);
    }
}
