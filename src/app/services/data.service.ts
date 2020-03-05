import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// @ts-ignore
import data from './data.json';

export interface Goal {
  tipId: number;
  added: Date;
  helpful: number;
  daysStreak: number;
  duration: number;
}

export interface Tip {
  title: string;
  subtitle: string;
  tags: string;
  id: number;
  text: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals: Goal[] = [];
  private tips: Tip[] = data;

  constructor(private storage: Storage) {
    this.storage.get('goals').then( goals => {
      if (goals) {
        this.goals = goals;
      }
    });
  }

  public isGoal(tipId: number): boolean {
    return this.findGoal(tipId) >= 0;
  }

  public findGoal(tipId: number): number {
    for (const [index, goal] of this.goals.entries()) {
      if (goal.tipId === tipId) {
        return index;
      }
    }
    return -1;
  }

  public async toggleGoal(tipId: number) {
    const index = this.findGoal(tipId);

    if (index >= 0) {
      this.goals.splice(index, 1);
    } else {
      const goal: Goal = {
        tipId,
        added: new Date(),
        helpful: 0,
        daysStreak: 0,
        duration: 1
      };

      this.goals.push(goal);
    }
    await this.saveGoals();
  }

  private async saveGoals() {
    await this.storage.set('goals', this.goals.filter( value => value !== undefined));
  }

  public async setDuration(tipId: number, duration: number) {
    const goal = this.goals[this.findGoal(tipId)];
    goal.duration = duration;
    await this.saveGoals();
  }
  public async setHelpful(tipId: number, helpful: number) {
    const goal = this.goals[this.findGoal(tipId)];
    goal.helpful = helpful;
    await this.saveGoals();
  }

  public getGoals(): Goal[] {
    return this.goals;
  }

  public getTips(): Tip[] {
    return this.tips;
  }

  public getTipById(id: number): Tip {
    for (const tip of this.tips) {
      if (tip.id === id) {
        return tip;
      }
    }
  }
}
