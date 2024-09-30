import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[autoExpandTextarea]',
  standalone: true
})
export class AutoExpandTextareaDirective implements OnInit {
  private initialHeight: number;

  constructor(private el: ElementRef) {
    this.initialHeight = 1;

  }

  ngOnInit() {
    const textarea = this.el.nativeElement as HTMLTextAreaElement;
    this.initialHeight = textarea.offsetHeight;
    this.adjustHeight();
  }

  @Input() maxHeight: number=0;

  @HostListener('input')
  onInput(): void {
    this.adjustHeight();
  }

  adjustHeight() {
    const textarea = this.el.nativeElement as HTMLTextAreaElement;
    textarea.style.height = 'auto';//Сбрасываем текущую высоту под авто
    textarea.style.resize = 'none';//Отключаем изменение размера пользователем

     let newHeight = textarea.scrollHeight;
    newHeight = Math.max(newHeight, this.initialHeight);
    if (this.maxHeight) {
      newHeight = Math.min(newHeight, this.maxHeight);
    }

    textarea.style.height = `${newHeight}px`;

    if (this.maxHeight && newHeight >= this.maxHeight) {
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.overflowY = 'hidden';
    }
  }
}
