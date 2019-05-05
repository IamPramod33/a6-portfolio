import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';
import { from, Subscription } from 'rxjs';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private routeStream: Subscription;
  toolbar:boolean;
  pageContent ?: any;
  tagLineData: any;
  constructor(private _headerService:HeaderService,
    private wowService: NgwWowService) {
      this.wowService.init();
  }

  ngOnInit() {
    
    this.tagLineData = [];
    this._headerService.pageLoaded.emit();
  }

}
