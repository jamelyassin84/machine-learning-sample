import {GetLastValuePipe} from './core/pipes/get-last-value.pipe'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {LinearRegressionComponent} from './modules/linear-regression/linear-regression.component'
import {DecisionTreesComponent} from './modules/decision-trees/decision-trees.component'
import {RandomForestComponent} from './modules/random-forest/random-forest.component'
import {NeuralNetworksComponent} from './modules/neural-networks/neural-networks.component'
import {SvmComponent} from './modules/svm/svm.component'
import {DayOfWeekPipe} from './core/pipes/day-of-week'
import {FormsModule} from '@angular/forms'
import {PercentageDifferencePipe} from './core/pipes/compare-percentage.pipe'

const components = [
    AppComponent,
    LinearRegressionComponent,
    DecisionTreesComponent,
    RandomForestComponent,
    NeuralNetworksComponent,
    SvmComponent,
]

const pipes = [DayOfWeekPipe, PercentageDifferencePipe, GetLastValuePipe]

const modules = [BrowserModule, AppRoutingModule, FormsModule]

@NgModule({
    declarations: [...components, ...pipes],
    bootstrap: [AppComponent],
    imports: [...modules],
    providers: [],
})
export class AppModule {}
