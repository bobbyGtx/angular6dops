import { Component } from '@angular/core';
import {RecursiveTemplateDirective} from "./recursive-template.directive";
import {RecursiveTemplateSetterDirective} from "./recursive-template-setter.directive";

@Component({
  selector: 'app-dop13',
  standalone: true,
  imports: [
    RecursiveTemplateDirective,
    RecursiveTemplateSetterDirective
  ],
  templateUrl: './dop13.component.html',
  styleUrl: './dop13.component.scss'
})
export class Dop13Component {
  menuData: Menu[] = [
    {
      title: 'Файл',
      children: [
        {
          title: 'Новый',
          action: 'create-new',
          children: [
            {
              title: 'Документ',
              action: 'create-new-document'
            },
            {
              title: 'Изображение',
              action: 'create-new-image'
            }
          ]
        },
        {
          title: 'Открыть',
          action: 'open'
        },
        {
          title: 'Сохранить',
          action: 'save'
        }
      ]
    },
    {
      title: 'Правка',
      children: [
        {
          title: 'Отменить',
          action: 'undo'
        },
        {
          title: 'Повторить',
          action: 'redo'
        }
      ]
    },
    {
      title: 'Просмотр',
      children: [
        {
          title: 'Масштаб',
          children: [
            {
              title: 'Увеличить',
              action: 'zoom-in'
            },
            {
              title: 'Уменьшить',
              action: 'zoom-out'
            }
          ]
        }
      ]
    }
  ];
}

export interface Menu{
  title: string,
  action?: string,
  children?:Array<Menu>
}
