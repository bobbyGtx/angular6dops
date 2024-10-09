import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appInteractiveColoring]',
  standalone: true
})
export class InteractiveColoringDirective {
  @Input('interactiveColoring') selectedColor!: string;

  constructor(private elementRef: ElementRef, private rend:Renderer2) {
  }

  @HostListener('click', ['$event'])
  changeColor(event: MouseEvent) {
    this.rend.setStyle(event.target,'background-color',this.selectedColor);
  }
}
