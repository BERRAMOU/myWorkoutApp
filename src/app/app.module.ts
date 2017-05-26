import {NgModule, ErrorHandler} from '@angular/core';
import { HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {WorkoutsPage} from "../pages/workouts/workouts";
import {AddWorkoutPage} from "../pages/add-workout/add-workout";
import {WorkoutService} from "../services/wourkout.service";
import {WorkoutDetailPage} from "../pages/workout-details/workout-details";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        WorkoutsPage,
        AddWorkoutPage,
        WorkoutDetailPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        WorkoutsPage,
        AddWorkoutPage,
        WorkoutDetailPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WorkoutService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
