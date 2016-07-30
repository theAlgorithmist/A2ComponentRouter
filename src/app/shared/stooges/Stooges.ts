export class TheStooges
{
  public static MOE: string        = "M";
  public static LARRY: string      = "L";
  public static CURLY: string      = "C";
  public static SHEMP: string      = "S";
  public static JOE_DERITA: string = "JD";
  public static JOE_BESSER: string = "JB";

  constructor()
  {
    // empty
  }

  public static getStooges(): Array<Object>
  {
    return [
            { id:TheStooges.MOE, name:TheStooges.toFullName(TheStooges.MOE) }, 
            { id:TheStooges.LARRY, name:TheStooges.toFullName(TheStooges.LARRY) },
            { id:TheStooges.CURLY, name:TheStooges.toFullName(TheStooges.CURLY) },
            { id:TheStooges.SHEMP, name:TheStooges.toFullName(TheStooges.SHEMP) },
            { id:TheStooges.JOE_DERITA, name:TheStooges.toFullName(TheStooges.JOE_DERITA) },
            { id:TheStooges.JOE_BESSER, name:TheStooges.toFullName(TheStooges.JOE_BESSER) }
           ];
  }

  public static toFullName(id: string): string
  {
    switch (id)
    {
      case this.MOE:
        return "Moe Howard";

      case this.LARRY:
        return "Larry Fine";

      case this.CURLY:
        return "Jerome Horiwitz (Curly)";

      case this.SHEMP:
        return "Shemp Howard";

      case this.JOE_DERITA:
        return "Joe Derita";

      case this.JOE_BESSER:
        return "Joe Besser";

      default:
        return "";
    }
  }
}