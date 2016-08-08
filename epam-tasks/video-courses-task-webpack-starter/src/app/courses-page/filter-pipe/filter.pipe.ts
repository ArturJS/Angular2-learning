/**
 * Created by Артур on 07.08.2016.
 */

import {
  Pipe,
  PipeTransform,
  Injectable
} from '@angular/core';

@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], fields : string[], value : string = ''): any[] {
    if (!items) return [];

    value = value.toLowerCase();

    return items.filter(it => {
      for(let field of fields) {
        if (it[field].toString().toLowerCase().indexOf(value) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
}
