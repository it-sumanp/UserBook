import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighLightPipe implements PipeTransform {
  transform(text: string, search): string {
    return search && text ? text.replace(new RegExp(search, 'i'), `<span class="highlight">${search}</span>`) : text;
  }
}
