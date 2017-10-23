export class MountainClass {

  constructor(private _name: string, private _height: number) {
    this._name = _name;
    this._height = _height;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get height(): number {
    return this._height;
  }

  set height(height: number) {
    this._height = height;
  }
}
