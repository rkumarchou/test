import { launchReducers } from "./store/reducers/index";
import { launchEffects } from "./store/effects/index";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LaunchListComponent } from "./launch-list/launch-list.component";
import { LaunchDetailsComponent } from "./launch-details/launch-details.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { RelativeTimePipe } from "./core/helpers/pipes/relative-time/relative-time.pipe";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DateAgoPipe } from './core/helpers/pipes/date-ago.pipe'
import { MatIconModule } from "@angular/material/icon";
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    LaunchDetailsComponent,
    RelativeTimePipe,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    StoreModule.forRoot(launchReducers),
    EffectsModule.forRoot(launchEffects),
    StoreDevtoolsModule.instrument(),
    MatProgressSpinnerModule,
    MatIconModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
