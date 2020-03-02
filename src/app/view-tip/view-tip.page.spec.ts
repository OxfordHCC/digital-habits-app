import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewTipPageRoutingModule } from './view-tip-routing.module';

import { ViewTipPage } from './view-tip.page';

describe('ViewTipPage', () => {
  let component: ViewTipPage;
  let fixture: ComponentFixture<ViewTipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTipPage ],
      imports: [IonicModule.forRoot(), ViewTipPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
