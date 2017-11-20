import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Mountain} from './mountain.class';

const MOUNTAINS_MOCK: Mountain[] = [
  {
    id: '1',
    name: 'Rysy',
    height: 2503
  },
  {
    id: '2',
    name: 'Świnica',
    height: 2301
  },
  {
    id: '3',
    name: 'Giewont',
    height: 1894
  },
  {
    id: '4',
    name: 'Kozi Wierch',
    height: 2291
  },
  {
    id: '5',
    name: 'Kasprowy Wierch',
    height: 1987
  }
];

const TOP_MOUNTAINS_MOCK: Mountain[] = [
  {
    id: '1',
    name: 'Rysy',
    height: 2503
  },
  {
    id: '4',
    name: 'Kozi Wierch',
    height: 2291
  }
];

@Injectable()
export class MountainService {
  public getAllMountains(): Observable<Mountain[]> {
    return of(MOUNTAINS_MOCK);
  }

  public getTopMountains(): Observable<Mountain[]> {
    return of(TOP_MOUNTAINS_MOCK);
  }

  public getMountain(id: string): Observable<Mountain> {
    return of(MOUNTAINS_MOCK.find(el => el.id === id));
  }
}
