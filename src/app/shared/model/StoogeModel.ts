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

/**
 * StoogeModel - This is the global store for the Three Stooges application.  While most often an anti-pattern, there really
 * should only be ONE instance of this store, so it is implemented as a Singleton.  This will be easier with access
 * visibility for constructors in TS 2.0
 *
 * The model is Redux-style in the sense that it maintains immutability, accepts action dispatch with type and payload,
 * internally reduces the model as needed, and then sends copies of relevant slices of the model to subscribers.  In terms
 * of the general Flux architecture, there is no formal dispatcher.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

 // platform imports
 import { Injectable } from "@angular/core";

 // interfaces
 import { IReduxModel } from '../interfaces/IReduxModel';

 // actions
 import { BasicActions } from '../actions/StoogeAppActions';

 // services
 import { StoogeBiosService     } from '../services/stooge-bios';
 import { StoogeHistoryService  } from '../services/stooge-history';
 import { StoogeEpisodesService } from '../services/stooge-episodes';

 // rxjs
 import { Subject } from 'rxjs/Subject';

 // The Stooges
 import { TheStooges } from '../stooges/Stooges';

 @Injectable()
 export class StoogeModel implements IReduxModel
 {
   private _bioService: StoogeBiosService;              // reference to service to fetch biographical data
   private _historyService: StoogeHistoryService;       // reference to service to fetch historical data
   private _episodesService: StoogeEpisodesService;     // reference to service to fetch episode data

   // singleton instance
   private static _instance: StoogeModel = new StoogeModel();

   // reference to actual store - this remains private to support compile-time immutability
   private _store: Object = new Object();

   // subscribers to model updates
   private _subscribers:Array<Subject<any>>;

  /**
   * Construct a new Stooges model
   *
   * @return Nothing - A Redux-style store for the Three Stooges demo is created that maintains Singleton state outside of injector
   */
   constructor() 
   {
     if (StoogeModel._instance) 
       return StoogeModel._instance;

     this._bioService      = new StoogeBiosService();      // service to retrieve biographical data
     this._historyService  = new StoogeHistoryService();   // service to retrieve historical data
     this._episodesService = new StoogeEpisodesService();  // service to retrieve episodes data

     // define the structure of the application store
     this._store['history' ] = "";                         // a brief history of The Three Stooges
     this._store['source'  ] = "";                         // reference source for the history
     this._store['bios'    ] = {};                         // brief biographical data on the stooges
     this._store['episodes'] = [];                         // Array of Objects, each of which contains data on a stooges episode
     this._store['names'   ] = [];                         // stooge (string) id and full name
     this._store['action'  ] = BasicActions.NONE;          // most recent action

     // list of subscribers to updates to the store
     this._subscribers = new Array<Subject<any>>();

     // Singleton instance (preserves unique instance even if used outside injector)
     StoogeModel._instance = this;
   }

  /**
   * Subscribe a new Subject to the model
   *
   * @param subject: Subject<any> Subject<any> with at least an onNext handler
   *
   * @return Nothing - The Subject's onNext handler will be invoked on model updates.  This will pass an Object containing a copy of a slice of the global store, which
   * will always include the 'action' property.
   */
   public subscribe( subject: Subject<any> ): void
   {
     // for a full-on, production app, would want to make this test tighter
     if (subject)
       this._subscribers.push(subject);
   }

  /**
   * Dispatch an Action to the model, which causes the model to be changed - application of a reducer - and then a slice of the new model
   * is sent to all subscribers.  This includes the action that caused the reduction.  A copy of model data is always sent to perserve
   * immutability.  This takes the place of a dispatcher in the Flux pattern.
   *
   * @param action: Number Action type
   *
   * @param payload: Object (optional) Payload for the action, which may be used by a reducer
   *
   * @return Nothing - All subscribers are notified after the model is updated
   */
   public dispatchAction(action: number, payload: Object=null): void
   {
     let validAction: Boolean = false;
     let data:Object;

     switch (action)
     {
       case BasicActions.GET_HISTORY:
         data                   = this._historyService.getData();
         this._store['history'] = data['history'];
         this._store['source' ] = data['source' ];

         this._store['action'] = BasicActions.GET_HISTORY;
         validAction           = true;
       break;

       case BasicActions.GET_BIOS:
         this._store['bios'  ] = this._bioService.getData();
         this._store['action'] = BasicActions.GET_BIOS;
     
         validAction = true;
       break;

       case BasicActions.GET_EPISODES:
         data                    = this._episodesService.getData();
         this._store['episodes'] = data['episodes'];
         this._store['action'  ] = BasicActions.GET_EPISODES;

         validAction = true;
       break;

       case BasicActions.GET_NAMES:
         this._store['names' ] = TheStooges.getStooges().slice();
         this._store['action'] = BasicActions.GET_NAMES;

         validAction = true;
       break;

       case BasicActions.ALL:
         // to be implemented as an exercise - required refactoring this section of code
       break;
     }

     if (validAction)
     {
       // send copy of current store to subscribers, which includes most recent action - this keeps global store immutable
       let store: Object = JSON.parse( JSON.stringify(this._store) );

       this._subscribers.map( (s:Subject<any>) => s.next(store) );
     }     
   }
 }