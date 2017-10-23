import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MountainService {
  public getAllMountains(): any {
    const response = [
      {
        name: 'Rysy',
        height: 2503
      },
      {
        name: 'Świnica',
        height: 2301
      }
    ];

    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(response);
        observer.complete();
      }, 100);
    });
  }
}
