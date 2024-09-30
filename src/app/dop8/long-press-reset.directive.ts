import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[longPressReset]',
  standalone: true
})
export class LongPressResetDirective implements AfterViewInit {
  timeout: ReturnType<typeof setTimeout>|null = null;
  timer: ReturnType<typeof setInterval>|null = null;
  counter:number = 0;
  caption:string='';

  constructor(private el: ElementRef) { }

  ngAfterViewInit(){
    this.caption=this.el.nativeElement.innerText;
  }

  @HostListener('click', ['$event'])
  onClick(event:Event) {
    if (this.counter===0){
      if (this.timeout) clearTimeout(this.timeout);
      this.el.nativeElement.innerText = this.caption;
      this.counter=3;
    }else{
      event.preventDefault();
    }
  }

  @HostListener('mousedown', ['$event'])
  clearForm(event:Event) {
    this.counter=3;
    this.el.nativeElement.innerText = this.caption+' ('+this.counter+')';
    this.timer = setInterval(() => {
      this.counter--;
      this.el.nativeElement.innerText = this.caption+' ('+this.counter+')';
      if (this.counter===0) {this.el.nativeElement.click()}
    },1000);
  }
  @HostListener('mouseup', ['$event'])
  onMouseUp() {
    this.cancelClearing();
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut() {
    this.cancelClearing();
  }

  cancelClearing(){
    if (this.timeout) clearTimeout(this.timeout);
    if(this.timer) clearInterval(this.timer);
    this.el.nativeElement.innerText = this.caption;
  }

}
