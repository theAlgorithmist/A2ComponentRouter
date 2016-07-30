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
import { Component   } from '@angular/core';

// base Flux component
import { FluxComponent } from './flux.component';

// actions
import { BasicActions } from './shared/actions/StoogeAppActions';

@Component({
  moduleId: module.id,

  templateUrl: 'history.component.html',

  styleUrls: ['history.component.css']
})

/**
 * History component for The Three Stooges demo 
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export class HistoryComponent extends FluxComponent
{
  // this component manages the display of two data items.  these items come from the global store; the component does not know, nor does it care
  // where that data comes from and how it is retrieved.  that's the way it's supposed to be :)

  private _historyTxt: string = "";   // brief history of the three stooges
  private _sourceTxt: string  = "";   // source for the history

 /**
  * @inheritDoc
  */
  constructor()
  {
    super();

    this._model.dispatchAction(BasicActions.GET_HISTORY);
  }

  // update the component based on new model data.  this can be done every update by checking for the presence of 'history' and 'source' at the risk of 
  // redundant updates when something non-history related was changed.  you can also test the most recent action to see if it is a history update.  Both
  // tests are provided below.  yet another alternative to enable time-travel is to create an action called 'all' in which case the update is performed
  // if the action is history-related or 'all'.  your choice.
  protected __onModelUpdate(data:Object): void
  {
    if (data['action'] == BasicActions.GET_HISTORY)
    {
      if (data.hasOwnProperty('history'))
        this._historyTxt = data['history'];

      if (data.hasOwnProperty('source'))
        this._sourceTxt = data['source'];
    }
  }
}
