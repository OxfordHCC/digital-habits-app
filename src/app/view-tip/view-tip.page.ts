import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Tip } from '../services/data.service';

@Component({
  selector: 'app-view-tip',
  templateUrl: './view-tip.page.html',
  styleUrls: ['./view-tip.page.scss'],
})
export class ViewTipPage implements OnInit {
  public tip: Tip;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tip = this.data.getTipById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Home' : '';
  }
}
