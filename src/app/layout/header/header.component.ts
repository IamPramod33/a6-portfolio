import { Component, OnInit, Input } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  @Input() private headerInfo: any;
  ngOnInit() {
  }

  closeNavItems() {
    $('#menuToggle').css('display', 'block');
    $('#body-content').css('display', 'block');
    $('#close-icon').css('display', 'none');
    $('#header-menu').css('display', 'none');
  }

  openNavItems() {
    $('#menuToggle').css('display', 'none');
    $('#body-content').css('display', 'none');
    $('#close-icon').css('display', 'block');
    $('#header-menu').css('display', 'flex');
  }
}
