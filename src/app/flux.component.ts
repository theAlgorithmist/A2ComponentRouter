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
import { Component } from '@angular/core';

// Global store
import { StoogeModel } from './shared/model/stoogeModel';

// rxjs imports
import { Subject      } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

/**
 * A generic Flux-style component for The Three Stooges demo.  In terms of interaction with the oustide world, this component may only dispatch
 * actions and subscribe to updates from the store.  Any component may be inserted anywhere in the heirarchy and the application flow remains
 * deterministic.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export class FluxComponent
{
  protected _model:StoogeModel;       // reference to the global (Singleton) store

 /**
  * Construct a new Flux-style component
  *
  * @return Nothing
  */
  constructor()
  {
    this._model = new StoogeModel();      // even when constructed normally, there will be only one actual instance of the global store

    let subject: Subject<any>      = new Subject<any>();
    let subscription: Subscription = subject.subscribe( (data:Object) => this.__onModelUpdate(data) ); 

    this._model.subscribe(subject);
  }

  // update the component based on new model data. 
  protected __onModelUpdate(data:Object): void
  {
    // override in sub-class
  }
}
