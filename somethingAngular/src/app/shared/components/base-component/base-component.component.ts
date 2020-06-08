import { Component, OnInit, HostListener, OnDestroy, Injector } from '@angular/core';

export abstract class BaseComponent implements OnInit, OnDestroy {

  abstract onInit();
  abstract onDestroy();

  constructor(public injector: Injector) { }

  ngOnDestroy() {
    this.onInit();
  }

  ngOnInit() {
    this.onDestroy();
  }
}
