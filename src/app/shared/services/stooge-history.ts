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
 * StoogeHistory - This service retrieves historical information on the stooges and returns it as an Object
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Injectable    } from '@angular/core';
import { SimpleService } from './simple-service';

@Injectable()
export class StoogeHistoryService extends SimpleService 
{
  // quick-n-dirty :)
  constructor()
  {
    super();

    this._data['history'] = "Moe Howard (born Moses Harry Horwitz ) and Shemp Howard (born Samuel Horwitz), brothers from Brooklyn New York, began their comedy careers acting separately in Vaudeville acts. By 1916, they first teamed as a comedy act performing a blackface routine.<br/><br/>Beginning in 1922, Moe and Shemp team with comedian Ted Healy.  After the trio discover comedian Larry Fine (born Louis Feinberg) performing in a comedy act, the 'Haney Sisters and Fine', they convince him to join their comedy troupe and call themselves 'Ted Healy and his Three Southern Gentleman', later 'Ted Healy and the Three Stooges.'<br/><br/>-Healy, Moe and Shemp Howard along with Larry Fine make their film debut in 20th Century Fox’s 'Soup to Nuts' in 1930.<br/>- Shortly after the release of 'Soup to Nuts', Moe and Shemp Howard and Larry Fine break away from Healy.<br/>- Shemp Howard left the Three Stooges in 1931 to pursue a solo acting career.<br/>- Jerry 'Curly' Howard (born Jerome Lester Horowitz), replaced his brother Shemp in 1932 on the condition he shave his head.<br/>- March 19, 1934, Larry Fine, Curly Howard, and Moe Howard sign a contract with Columbia Pictures for a single two reel comedy for $1,000 with an option for an additional 8 two-reelers at a similar salary and officially become known as <em>The Three Stooges.</em><br/>- The trio of Moe Howard, Larry Fine and Curly Howard made 97 films between 1934 and 1947.<br/>- Between July 1, 1936 and May 15, 1937, Columbia Pictures paid the trio a total of $21,000.<br/>- The Stooges appeared in 10 original feature length movies, more than 200 short films and more than 3,000 personal appearances on behalf of Columbia Studios.<br/>- In 1934, the Three Stooges received their first and only Academy Award nomination (for Best Short Subject) for 'Men in Black' but failed to come away with the Oscar, losing to a cartoon, 'La Cucaracha.'<br/>- Beginning in 1941, the Stooges add the pie fight to their repertoire, their victims usually members of the upper class.";
    this._data['source' ] = "'The Three Stooges: The Triumphs and Tragedies of The Most Popular Comedy Team of All Time' by Jeff Forrester and Tom Forrester;  'The Three Stooges: An Illustrated History, from Amalgamated Morons to American Icons' by Michael Fleming";
  }
}
