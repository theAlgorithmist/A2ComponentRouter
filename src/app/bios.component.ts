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
import { ROUTER_DIRECTIVES } from '@angular/router';

// base Flux component
import { FluxComponent } from './flux.component';

// actions
import { BasicActions } from './shared/actions/StoogeAppActions';

@Component({
  moduleId: module.id,

  directives: [ROUTER_DIRECTIVES],

  templateUrl: 'bios.component.html',

  styleUrls: ['bios.component.css']
})

/**
 * Bios component for The Three Stooges demo 
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export class BiosComponent extends FluxComponent
{
  // this component offers biographical data on various actors appearing in The Three Stooges.  As always, there is one and only on single source of truth
  // regarding the application and that is the global store.  That is the data source for this component

  private _names: Array<Object> = [];       // each object contains an id (string) property and full name of an actor who played one of the stooges

 /**
  * @inheritDoc
  */
  constructor()
  {
    super();

    this._model.dispatchAction(BasicActions.GET_NAMES);
  }

  // update the component based on new model data.  See documentation for stooge history component for more info.
  protected __onModelUpdate(data:Object): void
  {
    // we can get away with direct assignment since the data returned from the global store is always a copy
    if (data['action'] == BasicActions.GET_NAMES)
    {
      if (data.hasOwnProperty('names'))
        this._names = data['names'];
    }
  }
}
