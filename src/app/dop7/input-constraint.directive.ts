import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[inputConstraint]',
  standalone: true
})
export class InputConstraintDirective {
  @Input('inputConstraintRegexp') regExp: string = '';

  constructor(private el: ElementRef) {
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const regExpStr:RegExp=new RegExp(this.regExp);
    const inputElement: HTMLInputElement = this.el.nativeElement as HTMLInputElement;
    if (!regExpStr.test(inputElement.value)){
      inputElement.value = inputElement.value.slice(0,inputElement.value.length-1);
    }
  }
}
