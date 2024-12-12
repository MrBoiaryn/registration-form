import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakOn',
})
export class BreakOnPipe implements PipeTransform {
  // transform(values: string[] | null | undefined): string {
  //   return values ? values.join('\n') : '';
  // }
  transform(values: string[] | null | undefined): string {
    console.log(values);

    return values
      ? values
          .map((value) => value.replace(/^[\s\u00A0]+|[\s\u00A0]+$/g, ''))
          .join('\n')
      : '';
  }
}
