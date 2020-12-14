import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {

    let words = value.split(" ");

    for(let i=0;i<words.length;i++) {
      if(i>0 && this.isProposition(words[i])) 
        words[i] = words[i].toLowerCase();
      else 
        words[i] = this.toTitleCase(words[i]);      
    }

    return words.join(' ');
  }

  private isProposition(word: string): boolean {
    let propositions = [
      "of",
      "the"
    ];

    return propositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }
  
}
