import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { RecipeBookModule} from '../src/app/recipe-book/recipe-book.module'
import { AddServerAppModule } from './app/add-server-app/add-server-app.module';
import { GameModule } from './app/game/game.module';
import { ActiveInactiveUserModule } from './app/active-inactive-user-app/active-inactive-user/active-inactive-user.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ActiveInactiveUserModule)
  .then(() => console.log('Active and Inactive user app is bootstrap first'))
  .catch(err => console.error(err));