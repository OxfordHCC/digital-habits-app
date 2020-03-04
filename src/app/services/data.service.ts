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

  constructor(private storage: Storage) {
    this.shuffledTips = DataService.shuffle(this.tips);

    this.storage.get('goals').then( goals => {
      console.log(goals);

      if (goals) {
        this.goals = goals;
      }
      // this.addGoal(0);
    });
  }
  private goals: Goal[] = [];
  private tips: Tip[] = data;
  public readonly shuffledTips: Tip[];

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

  public findGoal(tipId: number): number {
    for (const [index, goal] of this.goals.entries()) {
      if (goal.tipId === tipId) {
        return index;
      }
    }
    return -1;
  }

  public toggleGoal(tipId: number) {
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
    this.saveGoals();
  }

  private saveGoals() {
    this.storage.set('goals', this.goals.filter( value => value !== undefined));
  }

  public setDuration(tipId: number, duration: number) {
    const goal = this.goals[this.findGoal(tipId)];
    goal.duration = duration;
    this.saveGoals();
  }
  public setHelpful(tipId: number, helpful: number) {
    const goal = this.goals[this.findGoal(tipId)];
    goal.helpful = helpful;
    this.saveGoals();
  }

  public getGoals(): Goal[] {
    return this.goals;
  }

  public getTips(): Tip[] {
    return this.shuffledTips;
  }

  public getTipById(id: number): Tip {
    for (const tip of this.shuffledTips) {
      if (tip.id === id) {
        return tip;
      }
    }
  }
}
