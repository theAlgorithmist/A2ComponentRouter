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
import { Component         } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

// base Flux component
import { FluxComponent } from './flux.component';

@Component({
  moduleId: module.id,

  selector: 'app-root',

  directives: [ROUTER_DIRECTIVES],

  templateUrl: 'app.component.html',

  styleUrls: ['app.component.css']
})

/**
 * Root component for The Three Stooges demo 
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export class AppComponent extends FluxComponent
{
 /**
  * @inheritDoc
  */
  constructor()
  {
    super();
  }
}
