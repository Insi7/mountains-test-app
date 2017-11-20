import {Component, OnInit} from '@angular/core';
import {Mountain, MountainClass} from '../mountain.class';
import {MountainService} from '../mountain.service';

@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html'
})
export class AppMountainListComponent implements OnInit {

  private mountains: Array<Mountain>;

  constructor(private mountainService: MountainService) {

  }

  ngOnInit(): void {
    this.getMountains();
  }

  public getMountains(): void {
    this.mountains = [];
    this.mountainService.getAllMountains()
      .subscribe(data => data.forEach(mountain =>
          this.mountains.push(new MountainClass(mountain))
        )
      );
  }
}
