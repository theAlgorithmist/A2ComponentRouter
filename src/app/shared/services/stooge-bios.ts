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
 * StoogeBios - This service retrieves biographical information regarding the stooges and returns it as an Object
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Injectable    } from '@angular/core';
import { SimpleService } from './simple-service';

@Injectable()
export class StoogeBiosService extends SimpleService 
{
  // in this version, the data is hardcoded; in the next demo, the data will come from an external source
  constructor() 
  {
    super();

    this._data['M' ] = "via Wikipedia, Moses Harry Horwitz (June 19, 1897 – May 4, 1975), known professionally as Moe Howard, was an American actor and comedian best known as the de facto leader of the Three Stooges, the farce comedy team who starred in motion pictures and television for four decades.<br/><br/>That group originally started out as Ted Healy and His Stooges, an act that toured the vaudeville circuit. Moe's distinctive hairstyle came about when he was a boy and cut off his curls with a pair of scissors, producing a ragged shape approximating a bowl cut.  Horwitz was born on June 19, 1897 in the Brooklyn, New York neighborhood of Bensonhurst to Solomon Horwitz and Jennie Gorovitz, the fourth-born of five brothers of Lithuanian Jewish ancestry. He was named Moe when still very young and later called himself Harry. His parents were not involved in show business, but Moe, older brother Shemp Howard, and younger brother Curly Howard all eventually became world-famous as members of <em>The Three Stooges.</em>";
    this._data['L' ] = "via Wikipedia, Louis Feinberg (October 5, 1902[1] – January 24, 1975), known professionally as Larry Fine, was an American comedian, actor, violinist, and boxer, who is best known as a member of the comedy act The Three Stooges.  Fine was born to a Jewish family as Louis Feinberg,[2] at 3rd and South Street in Philadelphia, Pennsylvania.[3] His father, Joseph Feinberg (who was Russian Jewish), and mother, Fanny Lieberman, owned a watch repair and jewelry shop.<br/><br/> In early childhood, Larry's arm was burned with acid that his father used to test whether or not gold was real. Having mistaken it for a beverage, Larry had raised the acid bottle to his lips when his father noticed, and knocked it from his hand, accidentally splashing Larry's forearm. He was later given violin lessons to help strengthen the damaged muscles, a skill which would be put to use in many of the Stooge films.";
    this._data['C' ] = "via Wikipedia, Jerome Lester Horwitz (October 22, 1903 – January 18, 1952), better known by his stage name Curly Howard, was an American comedian and vaudevillian actor. He was best known as the most outrageous and energetic member of the American farce comedy team the Three Stooges, which also featured his older brothers Moe and Shemp Howard and actor Larry Fine. Curly was generally considered the most popular and recognizable of the Stooges. He was well known for his high-pitched voice and vocal expressions ('nyuk-nyuk-nyuk!', 'woob-woob-woob!', 'soitenly!' (certainly), and barking like a dog) as well as his physical comedy (e.g., falling on ground and pivoting on his shoulder as he 'walked' in circular motion), improvisations, and athleticism.<br/><br/> An untrained actor, Curly borrowed (and significantly exaggerated) the 'woob woob' from 'nervous' and soft-spoken comedian Hugh Herbert. Curly's unique version of 'woob, woob, woob' was firmly established by the time of the Stooges' second Columbia film, Punch Drunks, in 1934.  Curly was forced to leave the Three Stooges act in 1946 when a massive stroke ended his showbusiness career. He suffered through serious health issues and several more strokes until his death in 1952 at age 48.";
    this._data['S' ] = "via Wikipedia, Shemp Howard (March 11, 1895 – November 22, 1955) was an American actor and comedian. Born Samuel Horwitz, he was called 'Shemp' because 'Sam' came out that way in his mother's thick Litvak accent. He is best known today for his role as the third stooge in the Three Stooges, a role he first portrayed at the beginning of the act in the early 1920s (1923–1932) while the act was still associated with Ted Healy and known as 'Ted Healy and his Stooges', and again from 1947 until his death in 1955. Between his times with the Stooges, Shemp had a successful film career as a solo comedian.";
    this._data['JD'] = "via Wikipedia, Joe 'Curly Joe' DeRita (July 12, 1909 – July 3, 1993), born Joseph Wardell, was an American actor and comedian who is best known for his stint as the sixth member of the Three Stooges, and the second to be billed as Curly, under the persona of 'Curly Joe'.  DeRita was born into a show-business family in Philadelphia, Pennsylvania, the son of Florenz (DeRita) and Frank Wardell, and of French-Canadian and English ancestry. He was the youngest of his 5 brothers. Wardell's father was a stage technician, his mother a professional stage dancer, and the three often acted on stage together from his early childhood.<br/><br/> Taking his mother's maiden name, DeRita, the actor joined the burlesque circuit during the 1920s, gaining fame as a comedian. During World War II, DeRita joined the USO, performing through Britain and France with such celebrities as Bing Crosby and Randolph Scott.";
    this._data['JB'] = "via Wikipedia, Joe Besser (August 12, 1907 – March 1, 1988) was an American comedian, known for his impish humor and wimpy characters. He is best known for his brief stint as a member of the Three Stooges in movie short subjects of 1957–59. He is also remembered for his television roles: Stinky, the spoiled impish bratty overgrown man-child in The Abbott and Costello Show, and Jillson, the maintenance man in The Joey Bishop Show.\n\nBesser was born in St. Louis, Missouri. He was the ninth child of Morris and Fanny Besser, who were Jewish immigrants from Eastern Europe.<br/><br/>He had seven older sisters, and an older brother Manny who was in show business, primarily as an ethnic Jewish comic. From an early age, Joe was fascinated with show business, especially the magic act of Howard Thurston that visited his town annually. When Joe was 12, Thurston allowed him to be an audience plant. Besser was so excited by this, he sneaked into Thurston's train after the St. Louis run of the show was over, and was discovered the next day sleeping on top of the lion's cage in Detroit.";
  }
}
