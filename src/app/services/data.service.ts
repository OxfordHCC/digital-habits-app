import { Injectable } from '@angular/core';

export interface Tip {
  title: string;
  explanation: string;
  tags: string;
  id: number;
  hasAction: boolean;
  actionText: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tips: Tip[] = [
    {
      id: 0,
      title: 'Turn off non-human notifications',
      explanation: 'Restrict notifications to what is strictly necessary. You can also try turning off notifications entirely.',
      tags: '#notifications',
      hasAction: false,
      actionText: 'Step 1 anaja \nStep 2 oasdhasd\nStep 3 sadasdsda',
    },
    {
      id: 1,
      title: 'Turn off all notifications',
      explanation: 'Restrict notifications to what is strictly necessary.' +
          'If you fear missing out, you can also try turning off non-human notifications only.',
      tags: '#notifications',
      hasAction: false,
      actionText: '',
    }
  ];

  private readonly shuffledTips: Tip[];

  constructor() {
    this.shuffledTips = DataService.shuffle(this.tips);
  }

  private static shuffle(array: any[]): any[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  public getTips(): Tip[] {
    return this.shuffledTips;
  }

  public getTipById(id: number): Tip {
    return this.shuffledTips[id];
  }
}
