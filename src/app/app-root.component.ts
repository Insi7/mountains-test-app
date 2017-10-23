import {Component} from '@angular/core';
import {MountainClass} from './mountain/mountain.class';
import {MountainService} from './mountain/mountain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css']
})
export class AppRootComponent {

  private mountains: Array<MountainClass>;

  constructor(private mountainService: MountainService) {
    this.mountains = [];

    this.mountainService.getAllMountains().subscribe(
      data => data.forEach(mountain =>
        this.mountains.push(new MountainClass(mountain.name, mountain.height))
      )
    );
  }
}
