import {Directive, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[trackUserTime]',
  standalone: true
})
export class TrackUserTimeDirective implements OnInit, OnDestroy {
  @Input() saveInterval: number = 5;
  mainValue: number = 0;//Переменная для значения
  mainTimer: ReturnType<typeof setInterval>|null = null;
  saveTimer: ReturnType<typeof setInterval>|null = null;

  constructor() {}

  @Output() sendValue: EventEmitter<number> = new EventEmitter<number>();
  @Output() sendLastSaveValue: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    if (localStorage.getItem('trackUserTime') && !isNaN(parseInt(localStorage.getItem('trackUserTime')!))) {
      this.mainValue=parseInt(localStorage.getItem('trackUserTime')!);
      this.sendValue.emit(this.mainValue);
      this.sendLastSaveValue.emit(this.mainValue);
    }
    this.mainTimer = setInterval(() => {
      this.incrementValue();
    },1000);
    this.saveInterval=this.saveInterval*1000;
    this.saveTimer = setInterval(() => {
      this.saveToLocalStorage();
    },this.saveInterval);

  }

  incrementValue(): void {
    this.mainValue++;
    this.sendValue.emit(this.mainValue);
  }

  saveToLocalStorage() {
    localStorage.setItem('trackUserTime', String(this.mainValue));
    this.sendLastSaveValue.emit(this.mainValue);
  }

  ngOnDestroy() {
    if (this.mainTimer) {
      clearTimeout(this.mainTimer);
    }
    if (this.saveTimer) {
      clearTimeout(this.saveTimer);
    }
  }

}
