import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, from } from 'rxjs';
import { HeaderService } from './shared/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private routeStream: Subscription;
  pageContent ?: any;
  toolbar ?: boolean = false;
  headerInfo: any;
  title = 'a6-portfolio';

  constructor(private _headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerInfo = []
  }

  ngOnDestroy() {
    this.routeStream.unsubscribe();
  }

  fetchPage() {
  }
}
