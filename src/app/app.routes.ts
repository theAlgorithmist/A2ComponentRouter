/** 
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// platform imports
import { provideRouter, RouterConfig } from '@angular/router';

// routable components
import { ScriptComponent    } from './script.component';
import { HistoryComponent   } from './history.component';
import { BiosComponent      } from './bios.component';
import { StoogeBioComponent } from './stooge-bio.component';
import { EpisodesComponent  } from './episodes.component';

// route configuration
const routes: RouterConfig = [
  // map '/script' to the script component
  {
    path: 'script',
    component: ScriptComponent
  },
  // map '/history' to the history component
  {
    path: 'history',
    component: HistoryComponent
  },
  // map '/bios' to the bio component
  {
    path: 'bios',
    component: BiosComponent
  },
  // map bios children to the StoogeBio component
  {
    path: 'bios/:id',
    component: StoogeBioComponent
  },
  // map episodes to the Episodes component
  {
    path: 'episodes',
    component: EpisodesComponent
  },
  // map '/' to '/script', default route
  {
    path: '',
    redirectTo: '/script',
    pathMatch: 'full'
  },
];

// this can be used when bootstrapping the app
export const APP_ROUTER_PROVIDERS = [ provideRouter(routes) ];