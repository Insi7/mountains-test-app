export interface Mountain {
  readonly id: string;
  name: string;
  height: number;
}

export class MountainClass {

  private readonly _id: string;
  private _name: string;
  private _height: number;

  constructor(mountainData: Mountain) {
    this._id = mountainData.id;
    this._name = mountainData.name;
    this._height = mountainData.height;
  }

  get id(): string {
    return this._id;
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
