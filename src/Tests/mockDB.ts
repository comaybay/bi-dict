import Language from "../types/LanguageType";
import IWordModel from "../types/WordModelTypes";

class MockDB {
  constructor(
    private readonly dicts: { [language: string]: DictDB },
    private readonly languageMap: LanguageMap
  ) { };

  getWordModel(word: string, wordLanguage: Language): IWordModel | null {
    const wordModel = this.dicts[wordLanguage][word];
    return wordModel ? wordModel : null;
  }

  getTranslation(word: string, from: Language, to: Language): string[] | null {
    const translations = this.languageMap[from][word];
    return (translations && translations[to]) ? translations[to] : null;
  }
}

interface DictDB {
  [word: string]: IWordModel,
}

interface LanguageMap {
  [language: string]: { [word: string]: Translations }
};

interface Translations {
  [language: string]: string[]
}

const nineWordModel: IWordModel = {
  language: "EN",
  word: "nine",
  pronunciation: "/nīn/",
  definitionSections: [
    {
      type: "noun",
      definitions: [{
        content: "equivalent to the product of three and three; one more than eight, or one less than ten; 9.",
        example: "nine of the twelve members"
      },
      {
        content: "a symbol for this number, as 9 or IX.",
      },
      ]
    },
    {
      type: "adjective",
      definitions: [
        {
          content: "amounting to nine in number."
        }
      ]
    }
  ]
}

const chinWordModel: IWordModel = {
  language: "VN",
  word: "chín",
  pronunciation: "ʨɨn˧˥",
  definitionSections: [
    {
      type: "Số từ",
      definitions: [{
        content: "Số tự nhiên tiếp theo số tám, dẫn trước mười.",
        example: "Chín tháng mười ngày Chín bỏ làm mười (tục ngữ)."
      }]
    },
    {
      type: "Tính từ",
      definitions: [{
        content: "(Quả) già, thường đỏ hoặc vàng ngoài vỏ, ruột mềm, thơm ngon.",
        example: "Chuối chín cam chín vàng."
      },
      {
        content: "(Sâu, tằm) già, chuẩn bị làm kén, hoá nhộng.",
        example: "Tằm đã chín."
      },
      {
        content: "(Sự suy nghĩ) Kỹ lưỡng, đầy đủ mọi khía cạnh.",
        example: "Nghĩ cho chín rồi hãy làm."
      }
      ],

    }
  ]
}

const ENWordModels = [nineWordModel];
const VNWordModels = [chinWordModel];

let ENDict: DictDB = {};
let VNDict: DictDB = {};

ENWordModels.forEach((wordModel) => {
  ENDict[wordModel.word] = wordModel;
});

VNWordModels.forEach((wordModel) => {
  VNDict[wordModel.word] = wordModel;
});



const languageMap: LanguageMap = {
  VN: { chín: { "EN": ["nine, ripe"] } },
  EN: { nine: { "VN": ["chín"] } },
}

export const mockDB: MockDB = new MockDB({ EN: ENDict, VN: VNDict }, languageMap);
export default mockDB;