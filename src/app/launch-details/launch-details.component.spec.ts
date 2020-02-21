import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from "@angular/material/card";
import { Apollo } from 'apollo-angular';
import { MatIconModule } from "@angular/material/icon";
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { StoreModule } from '@ngrx/store';
import { launchReducers } from '../store/reducers';

import { LaunchDetailsComponent } from './launch-details.component';

describe('LaunchDetailsComponent', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        MatCardModule,
        MatIconModule,
        NgxGalleryModule,
        StoreModule.forRoot(launchReducers),
      ],
      declarations: [ 
        LaunchDetailsComponent 
      ],
      providers: [ 
        Apollo 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
