import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[autoSelectSingleOption]',
  standalone: true
})
export class AutoSelectSingleOptionDirective implements AfterViewInit {
  private selectEl: HTMLSelectElement;
  private timeout: ReturnType<typeof setTimeout> | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.selectEl = this.el.nativeElement as HTMLSelectElement;
  }

  ngAfterViewInit() {
    if (this.selectEl.options.length === 1) {
      this.timeout=setTimeout(() => {
        this.selectEl.value = this.selectEl.options[0].value;
        clearTimeout(this.timeout!);
      }, 1000);
    }
  }
}
