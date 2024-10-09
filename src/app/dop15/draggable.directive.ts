import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDraggable]',
  standalone: true
})
export class DraggableDirective {
  private startX: number = 0;
  private startY: number = 0;
  private initialX: number = 0;
  private initialY: number = 0;
  private dragging: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'move');
    this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
  }
  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent): void {
    this.dragging = true;
    this.startX = event.clientX - this.el.nativeElement.offsetLeft;
    this.startY = event.clientY - this.el.nativeElement.offsetTop;
    event.preventDefault();
  }
  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent): void {
    if (this.dragging) {
      this.initialX = event.clientX - this.startX;
      this.initialY = event.clientY - this.startY;
      this.renderer.setStyle(this.el.nativeElement, 'left', `${this.initialX}px`);
      this.renderer.setStyle(this.el.nativeElement, 'top', `${this.initialY}px`);
    }
  }

  @HostListener('document:mouseup') onMouseUp(): void {
    this.dragging = false;
  }
}


