import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Menu} from "./dop13.component";

@Directive({
  selector: '[appRecursiveTemplateSetter]',
  standalone: true
})
export class RecursiveTemplateSetterDirective {
  @Input('appRecursiveTemplateSetter') set menuItems(value: Menu[]) {
    this.renderMenu(value);
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

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
