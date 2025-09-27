import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false ////disables cashing 
})
export class SortPipe implements PipeTransform {
  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    if (!Array.isArray(value)) {
      return null;
    }
    const sorted = [...value].sort((a, b) => {
      if (direction === 'asc') {
        return a > b ? 1 : a < b ? -1 : 0;
      } else {
        return a < b ? 1 : a > b ? -1 : 0;
      }
    });
    return sorted;
  }
}
