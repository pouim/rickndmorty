import { generateGenderPrefix } from ".";

test("generateGenderPrefix function", () => {
  expect(generateGenderPrefix("Adam", "Male")).toBe("Mr. Adam");
  expect(generateGenderPrefix("Sara", "Female")).toBe("Mrs. Sara");
  expect(generateGenderPrefix("Anonymous", "unknown")).toBe("Anonymous");
});
