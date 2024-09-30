import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[ellipsisTooltip]',
  standalone: true
})
export class EllipsisTooltipDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const element = this.el.nativeElement.querySelectorAll('.tooltips');
    if (element && element.length > 0) {
      let inputElement:HTMLInputElement = element[0];
      const textWidth:number=this.getTextWidth(inputElement.value);
      if(textWidth > inputElement.offsetWidth){
        const fullText:string = inputElement.value;
        inputElement.value = inputElement.value.substring(0, 20)+' ...';
        let tooltipEl:HTMLElement=this.renderer.createElement('span');
        this.renderer.addClass(tooltipEl,'tool-tip');
        tooltipEl.innerText=fullText;
        this.renderer.insertBefore(this.el.nativeElement,tooltipEl, this.renderer.nextSibling(inputElement));
      }
    }
  }

  getTextWidth(text:string) :number {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context!.font = '16px Times New Roman';
    const textWidth:number = context!.measureText(text).width;
    canvas.remove();
    return textWidth;
  }
}


