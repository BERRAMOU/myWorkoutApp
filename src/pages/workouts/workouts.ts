import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../services/wourkout.service";

@Component({
  selector: 'workout',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage implements OnInit{

  constructor(public navCtrl: NavController , private _workoutService : WorkoutService) {
  }


    ngOnInit():void {
      this._workoutService.getWorkouts().subscribe(
          workouts =>{
            console.log(workouts);
          }
      );
    }
}
