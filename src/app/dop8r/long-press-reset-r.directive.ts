import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[longPressResetR]',
  standalone: true
})
export class LongPressResetRDirective {

  @Input() duration:number = 3000;
  @Output() onReset:EventEmitter<any> = new EventEmitter();
  private pressing: boolean = false;
  private longPressTimer: ReturnType<typeof setTimeout> | null = null;

  @HostListener('mousedown')
  onMouseDown(): void {
    this.pressing = true;
    this.longPressTimer = setTimeout(() => {
      if (this.pressing) {
        this.onReset.emit();
      }
    }, this.duration);
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this.resetPressingAndTimeout();
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.resetPressingAndTimeout();
  }

  resetPressingAndTimeout(): void {
    this.pressing = false;
    if (this.longPressTimer) clearTimeout(this.longPressTimer);
  }
}
