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

export class SimpleService 
{
  protected _data: Object = {};  // data Object

  // data is hardcoded in this demo; in the part 2, the data will come from an external service
  constructor() 
  {
    // empty
  }

 /**
  * Retrieve data from this service
  *
  * @return Object - Data Object
  */
  public getData():Object
  {
    return JSON.parse(JSON.stringify(this._data));
  }
}
