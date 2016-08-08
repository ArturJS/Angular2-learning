/**
 * Created by Artur_Nizamutdinov on 8/8/2016.
 */

import {
  Pipe,
  PipeTransform,
  Injectable
} from '@angular/core';

@Pipe({
  name: 'duration'
})
@Injectable()
export class DurationPipe implements PipeTransform {
  transform(duration : number): string {//todo fix ( ~~  <== hack for truncating of fraction part of division)
    let hours : number = ~~(duration / 60);
    let minutes : number = ~~(duration % 60);

    let hoursStr : string = 'час';
    let minutesStr : string = 'минут';

    let hoursPer100modulo : number = ~~(hours % 100);
    let hoursPer10modulo : number = ~~(hours % 10);

    let minutesPer100modulo : number = ~~(minutes % 100);
    let minutesPer10modulo : number = ~~(minutes % 10);

    console.log('hours '+hours);
    console.log('minutes '+minutes);
    console.log('hoursPer100modulo '+hoursPer100modulo);
    console.log('hoursPer10modulo '+hoursPer10modulo);
    console.log('minutesPer100modulo '+minutesPer100modulo);
    console.log('minutesPer10modulo '+minutesPer10modulo);


    if (hoursPer100modulo >= 11 &&
        hoursPer100modulo <= 14 ||
        hoursPer10modulo === 0 ||
        hoursPer10modulo >= 5) {
      hoursStr += 'ов';
    } else if (hoursPer10modulo >= 2 && hoursPer10modulo <= 4) {
      hoursStr += 'а';
    }

    if (!(minutesPer100modulo >= 11 &&
          minutesPer100modulo <= 14)) {
      if (minutesPer10modulo === 1) {
        minutesStr += 'а';
      } else if (minutesPer10modulo >= 2 &&
                 minutesPer10modulo <= 4){
        minutesStr += 'ы';
      }
    }


    if (hours > 0 && minutes > 0) {
      return [hours, ' ', hoursStr, ' ', minutes, ' ', minutesStr ].join('');
    }

    if (hours > 0 && minutes === 0) {
      return [hours, ' ', hoursStr].join('');
    }

    if (hours === 0 && minutes === 0) {
      return [minutes, ' ', minutesStr].join('');
    }
  }
}
