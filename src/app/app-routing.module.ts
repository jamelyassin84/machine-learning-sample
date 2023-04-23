import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LinearRegressionComponent} from './modules/linear-regression/linear-regression.component'
import {DecisionTreesComponent} from './modules/decision-trees/decision-trees.component'
import {RandomForestComponent} from './modules/random-forest/random-forest.component'
import {NeuralNetworksComponent} from './modules/neural-networks/neural-networks.component'
import {SvmComponent} from './modules/svm/svm.component'

const routes: Routes = [
    {
        path: '',
        component: LinearRegressionComponent,
    },
    {
        path: 'decision-tree',
        component: DecisionTreesComponent,
    },
    {
        path: 'neural-network',
        component: NeuralNetworksComponent,
    },
    {
        path: 'random-forest',
        component: RandomForestComponent,
    },
    {
        path: 'svm',
        component: SvmComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
