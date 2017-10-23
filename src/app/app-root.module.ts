import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRootComponent} from './app-root.component';
import {AppPageTitleComponent} from './page-title/page-title.component';
import {FormsModule} from '@angular/forms';
import {MountainService} from './mountain/mountain.service';

@NgModule({
  declarations: [
    AppRootComponent,
    AppPageTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MountainService],
  bootstrap: [AppRootComponent]
})
export class AppRootModule {
}
