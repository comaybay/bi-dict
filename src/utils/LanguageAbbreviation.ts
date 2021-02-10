const config = new Map(Object.entries({
  "vi": "VN",
  "en": "EN",
}));

const reverseMapping = (m: Map<string, string>): Map<string, string> => {
  const res: Map<string, string> = new Map();
  m.forEach((value, key) => res.set(value, key))
  return res;
}

export default class LanguageAbbreviation {
  private static readonly _ISOtoAbbrMap = config;
  private static readonly _AbbrToISOMap = reverseMapping(config);

  public static fromISOLanguageCode(isoLanguageCode: string): string {
    const abbr = this._ISOtoAbbrMap.get(isoLanguageCode);
    if (!abbr)
      throw new Error(`given code "${isoLanguageCode}" is not implemented or invalid`)
    else
      return abbr
  }

  public static toISOLanguageCode(abbr: string): string {
    const iso = this._AbbrToISOMap.get(abbr);
    if (!iso)
      throw new Error(`given abbr "${abbr}" is not implemented or invalid`)
    else
      return iso
  }

  public static all(): IterableIterator<string> {
    return this._ISOtoAbbrMap.values();
  }
}
