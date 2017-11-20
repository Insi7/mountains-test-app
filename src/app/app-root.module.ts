import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRootComponent} from './app-root.component';
import {AppPageTitleComponent} from './page-title/page-title.component';
import {FormsModule} from '@angular/forms';
import {MountainService} from './mountain/mountain.service';
import {AppMountainDetailComponent} from './mountain/detail/mountain-detail.component';
import {AppMountainListComponent} from './mountain/list/mountain-list.component';
import {AppRoutingModule} from './/app-routing.module';
import {AppTopMountainsComponent} from './top-mountains/top-mountains.component';
import {AppPageNavComponent} from './page-nav/page-nav.component';

@NgModule({
  declarations: [
    AppMountainDetailComponent,
    AppMountainListComponent,
    AppRootComponent,
    AppPageTitleComponent,
    AppTopMountainsComponent,
    AppPageNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MountainService],
  bootstrap: [AppRootComponent]
})
export class AppRootModule {
}
