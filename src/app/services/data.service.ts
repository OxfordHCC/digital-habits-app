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
  public tips: Tip[] = [
    {
      id: 0,
      title: 'Turn off non-human notifications',
      explanation: 'Restrict notifications to what is strictly necessary. You can also try turning off notifications entirely.',
      tags: '#notifications',
      hasAction: false,
      actionText: '',
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

  constructor() { }

  public getTips(): Tip[] {
    return this.tips;
  }

  public getTipById(id: number): Tip {
    return this.tips[id];
  }
}
