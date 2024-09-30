import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[focusTrap]',
  standalone: true
})
export class FocusTrapDirective implements AfterViewInit {
  firstFocusableElement!:HTMLElement;
  lastFocusableElement!:HTMLElement;

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent):void {
    if ((event.key).toLowerCase() !=='tab') return
    if (event.shiftKey){
      if (document.activeElement === this.firstFocusableElement){
        event.preventDefault();
        this.lastFocusableElement.focus();

      }
    }else{
      if (document.activeElement === this.lastFocusableElement){
        event.preventDefault();
        this.firstFocusableElement.focus();
      }
    }
  }

  ngAfterViewInit() {
    const focusableElements = this.el.nativeElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    this.firstFocusableElement = focusableElements[0];
    this.firstFocusableElement.focus();
    this.lastFocusableElement = focusableElements[focusableElements.length - 1];
  }

}
