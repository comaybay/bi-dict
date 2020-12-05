import mockDB from '../tests/mockDB';

it("MockDB test: chín to nine", () => {
  const wordModel = mockDB.getWordModel("chín", "VN");
  expect(wordModel).toHaveProperty("language");

  expect(wordModel.word).toEqual("chín");
  expect(wordModel.definitionSections[0].type).toEqual("Số từ");
})