import {Component} from '@angular/core';
import {Mountain, MountainClass} from '../mountain.class';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MountainService} from '../mountain.service';

@Component({
  selector: 'app-mountain-detail',
  templateUrl: './mountain-detail.component.html',
})
export class AppMountainDetailComponent {
  private mountain: Mountain;

  constructor(private activatedRoute: ActivatedRoute, private mountainService: MountainService, private location: Location) {
    this.getMountain();
  }

  public goBack(): void {
    this.location.back();
  }

  private getMountain(): void {
    const id: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.mountainService.getMountain(id)
      .subscribe(mountain => this.mountain = new MountainClass(mountain));
  }
}
