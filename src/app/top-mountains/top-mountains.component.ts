import {Component, OnInit} from '@angular/core';
import {Mountain, MountainClass} from '../mountain/mountain.class';
import {MountainService} from '../mountain/mountain.service';

@Component({
  selector: 'app-top-mountains',
  templateUrl: './top-mountains.component.html'
})
export class AppTopMountainsComponent implements OnInit {

  public topMountains: Mountain[];

  constructor(private mountainService: MountainService) {
  }

  ngOnInit(): void {
    this.getTopMountains();
  }

  public getTopMountains(): void {
    this.topMountains = [];

    this.mountainService.getTopMountains()
      .subscribe(data => data.forEach(mountain =>
          this.topMountains.push(new MountainClass(mountain))
        )
      );
  }

}
