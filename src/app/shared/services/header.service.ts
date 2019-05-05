import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderService {

  public pageLoaded = new EventEmitter<any>();
  public pageNotLoaded = new EventEmitter<any>();

}
