import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'length',
})
export class LengthPipe implements PipeTransform {
  transform(str: string, length: number): string {
    const arr = str.split(' ');
    let result = '';

    for (let i = 0; i < arr.length; i++) {
      if (result.length + arr[i].length + 1 > length) {
        result = result
          .trim()
          .replace(/[.,?!-'":;]$/g, '')
          .concat('...');
        break;
      } else {
        result += ` ${arr[i]}`;
      }
    }

    return result;
  }
}
