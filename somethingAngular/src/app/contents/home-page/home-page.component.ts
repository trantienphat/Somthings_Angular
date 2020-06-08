import { Component, OnInit, Injector, HostListener } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BaseComponent {

  constructor(public injector: Injector) {
    super(injector);
  }

  onInit() {
  }

  onDestroy() {
  }
}
