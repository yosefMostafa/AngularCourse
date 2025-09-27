import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temprature',
  standalone: true,
})
export class TempraturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputUnit: 'C' | 'F',
    outputUnit: 'C' | 'F'
  ): string {
    if (value === null) {
      return '';
    }
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    const fromCtoFr = (val * 9) / 5 + 32;
    const fromFrtoC = ((val - 32) * 5) / 9;
    if (inputUnit === 'C' && outputUnit === 'F') {
      return fromCtoFr.toFixed(2) + '°F';
    } else if (inputUnit === 'F' && outputUnit === 'C') {
      return fromFrtoC.toFixed(2) + '°C';
    }
    return val.toFixed(2) + '°' + inputUnit;
  }
}
