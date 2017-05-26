/**
 * Created by beramos on 5/26/17.
 */
import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';

@Component({
    selector: 'workout-detail',
    templateUrl: 'workout-details.html'
})
export class WorkoutDetailPage {
    workout : any ;
    constructor(public navCtrl: NavController , private navParams: NavParams) {
    this.workout = navParams.get("workout");
    }
}
