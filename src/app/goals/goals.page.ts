import { Component } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'goals.page.html',
  styleUrls: ['goals.page.scss']
})
export class GoalsPage {

  constructor(public data: DataService) {}

}
