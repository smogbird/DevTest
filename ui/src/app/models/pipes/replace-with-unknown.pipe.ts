import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'replaceWithUnknown'})
export class ReplaceWithUnknownPipe implements PipeTransform {
  transform(value: string): string {
    if(!value){
        return 'Unknown';
    }
    return value;
  }
}