import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCheckPermissions]',
  standalone: true
})
export class CheckPermissionsDirective {
  private hasView = false;//Помогает отследить был-ли отрисован контент
  private currentPermissions: string[] = ['viewPage', 'editContent'];
  //currentPermissions заглушка для необходимых разрешений, тут был бы запрос разрешений из сервиса

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
  //templateRef - шаблон к которому применена директива
  //viewContainer - контейнер, в котором можем разместить шаблон

  @Input() set appCheckPermissions(permissions: string[]) {
    const hasPermission = permissions.every((permission) =>
      this.currentPermissions.includes(permission)
    );

    if (hasPermission && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);//помещаем шаблон в контейнер
      this.hasView = true;
    } else if (!hasPermission && this.hasView) {
      this.viewContainer.clear();//Чистим контейнер от шаблона
      this.hasView = false;
    }
  }

  @Input() set appCheckPermissionsElse(templateRef: TemplateRef<any>) {
    //Сеттер принимающий шаблон. Если основное содержимое не отображается из-за недостатка разрешений,
    //эта часть директивы обеспечивает отображение альтернативного контента.
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(templateRef);
    }
  }
}
