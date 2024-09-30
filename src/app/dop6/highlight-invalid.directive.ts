import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[highlightInvalid]',
  standalone: true
})
export class HighlightInvalidDirective {
  private _formElementsTags = ['INPUT', 'SELECT', 'TEXTAREA'];
  @Input('highlightInvalidClassName') invalidClassName: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event'])
  onFormSubmit(event: Event) {
    if (!'BUTTON'.includes((event.target as HTMLInputElement).tagName)) return;

    event.preventDefault();
    const formElements = this.el.nativeElement.elements;

    let firstInvalidElement: HTMLInputElement | null = null;
    for (const element of formElements) {
      if (!this._formElementsTags.includes(element.tagName)) return;

      if (!element.validity.valid) {
        this.renderer.addClass(this.renderer.parentNode(element), this.invalidClassName);
        if (!firstInvalidElement) {
          firstInvalidElement = element;
        }
      } else {
        this.renderer.removeClass(this.renderer.parentNode(element), this.invalidClassName);
      }

      if (firstInvalidElement) {
        firstInvalidElement.focus();
      }

    }
  }
}
