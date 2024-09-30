import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[timeColor]',
  standalone: true
})
export class TimeColorDirective implements OnChanges {
  colors = {
    morning: '',
    day: '',
    evening: '',
    night: ''
  }
  @Input() time: string = '';

  @Input('timeColorMorningColor')
  set isMorning(morningColor: string) {
    this.colors.morning = morningColor ? morningColor : 'yellow';
  }

  @Input('timeColorDayColor')
  set isDay(dayColor: string) {
    this.colors.day = dayColor ? dayColor : 'blue';
  }

  @Input('timeColorEveningColor')
  set isEvening(timeColorEveningColor: string) {
    this.colors.evening = timeColorEveningColor ? timeColorEveningColor : 'orange';
  }

  @Input('timeColorNightColor')
  set isNight(nightColor: string) {
    this.colors.night = nightColor ? nightColor : 'darkblue';
  }

  constructor(private el: ElementRef, private rend: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.changeColor();
  }

  changeColor() {
    let time: number = 0;
    if (!this.time) {
      let date = new Date().toLocaleTimeString('ru-RU');
      time = parseInt(date.split(':')[0]) + parseInt(date.split(':')[1]) / 60;
    } else {
      time = parseInt(this.time.split(':')[0]) + parseInt(this.time.split(':')[1]) / 60;
    }

    if (time > 6 && time < 12) {
      this.rend.setStyle(this.el.nativeElement, 'background-color', this.colors.morning);
    } else if (time > 12 && time < 18) {
      this.rend.setStyle(this.el.nativeElement, 'background-color', this.colors.day);
    } else if (time > 18 && time < 24) {
      this.rend.setStyle(this.el.nativeElement, 'background-color', this.colors.evening);
    } else {
      this.rend.setStyle(this.el.nativeElement, 'background-color', this.colors.night);
    }
  }
}
