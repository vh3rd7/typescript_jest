import { helloWorld } from './index';

it("should be true", () => {
  expect(true).toBeTruthy();
});

describe("test group", () => {

  it("should return false", () => {
    const result = () => (true);
    expect(result()).toBeFalsy();
  });

  fit("should the helloWorld function return a string 'Hello World!'", () => {
    // Arrange
    const expected = "Hello World!";
    // Act
    const received = helloWorld();
    // Assert
    expect(typeof received).toBe("string");
    expect(received).toEqual(expected);
  });
});
