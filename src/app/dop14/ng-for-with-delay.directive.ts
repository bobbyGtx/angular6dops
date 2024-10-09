import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngForWithDelay]',
  standalone: true
})
export class NgForWithDelayDirective implements OnInit {
  timeout: ReturnType<typeof setTimeout>|null = null;
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) {
  }

  @Input('ngForWithDelayOf') elementList!:unknown[];
  @Input('ngForWithDelayDelay') delay: number=1000;

  ngOnInit() {
    this.elementList.forEach((item,index )=> {
      this.timeout=setTimeout(() => {
        this.viewContainer.createEmbeddedView(this.templateRef,{$implicit: item});
        clearTimeout(this.timeout!);
      },this.delay*index);
    });
  }
}
