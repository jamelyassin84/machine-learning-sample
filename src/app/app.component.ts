import {Component} from '@angular/core'
import {TABS} from './core/navigations/home-tabs'
import {BehaviorSubject} from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    readonly TABS = TABS

    activeTab$ = new BehaviorSubject(TABS[0].id)
}
