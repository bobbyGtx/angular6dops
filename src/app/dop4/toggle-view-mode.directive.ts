import {AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';
import {ViewStyle} from "./dop4.component";

@Directive({
  selector: '[toggleViewMode]',
  standalone: true
})
export class ToggleViewModeDirective implements AfterViewInit, OnChanges {
  @Input() toggleViewModeStyle: ViewStyle = ViewStyle.listStyle;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.el.nativeElement.classList.add(this.toggleViewModeStyle);
  }
  ngOnChanges() {
    let classes: Array<string> = this.el.nativeElement.classList;
    let newClasses:Array<string> = [];
    classes.forEach(item => {
      if (item !==ViewStyle.gridStyle && ViewStyle.listStyle) {
        newClasses.push(item);
      }
    });
    newClasses.push(this.toggleViewModeStyle);
    this.el.nativeElement.classList.clear;
    this.el.nativeElement.classList=newClasses.join(' ');
  }

  private updateViewMode(mode: 'list' | 'grid') {
    const nativeElement = this.el.nativeElement;

    if (mode === 'list') {
      this.renderer.removeClass(nativeElement, 'grid');
      this.renderer.addClass(nativeElement, 'list');
    } else {
      this.renderer.removeClass(nativeElement, 'list');
      this.renderer.addClass(nativeElement, 'grid');
    }
  }

}
