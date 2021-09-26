import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GlobalNavigationComponent } from './components/global-navigation/global-navigation.component';

@NgModule({
  declarations: [AppComponent, GlobalNavigationComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'pr1',
          loadChildren: () =>
            import('pr1/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'pr2',
          loadChildren: () =>
            import('pr2/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
