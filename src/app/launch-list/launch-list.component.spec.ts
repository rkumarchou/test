import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from "@angular/material/card";
import { StoreModule } from '@ngrx/store';
import { launchReducers } from '../store/reducers';
import { Apollo } from 'apollo-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LaunchListComponent } from './launch-list.component';
import { DateAgoPipe } from '../core/helpers/pipes/date-ago.pipe'


describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        MatCardModule,
        StoreModule.forRoot(launchReducers),
        MatProgressSpinnerModule
      ],
      declarations: [ 
        LaunchListComponent, 
        DateAgoPipe 
      ],
      providers: [
        Apollo
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
