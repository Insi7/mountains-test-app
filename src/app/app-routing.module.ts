import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMountainListComponent} from './mountain/list/mountain-list.component';
import {AppTopMountainsComponent} from './top-mountains/top-mountains.component';
import {AppMountainDetailComponent} from './mountain/detail/mountain-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/top-mountains', pathMatch: 'full'},
  {path: 'top-mountains', component: AppTopMountainsComponent},
  {path: 'mountains', component: AppMountainListComponent},
  {path: 'detail/:id', component: AppMountainDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
