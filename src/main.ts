import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { RecipeBookModule} from '../src/app/recipe-book/recipe-book.module'
import { AddServerAppModule } from './app/add-server-app/add-server-app.module';
import { GameModule } from './app/game/game.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(GameModule)
  .then(() => console.log('Add server Module is bootstrap first'))
  .catch(err => console.error(err));