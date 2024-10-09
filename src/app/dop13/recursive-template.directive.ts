import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Menu} from "./dop13.component";

@Directive({
  selector: '[appRecursiveTemplate]',
  standalone: true
})
export class RecursiveTemplateDirective implements OnInit {
  @Input('appRecursiveTemplate') value?:Menu[];

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.renderMenu(this.value!);
  }

  private renderMenu(menuItems: any[], level = 0): void {

    menuItems.forEach((item) => {
      const context = { item, level };
      this.viewContainer.createEmbeddedView(this.templateRef, context);
      if (item.children && item.children.length > 0) {
        this.renderMenu(item.children, level + 1);
      }
    });
  }
}
