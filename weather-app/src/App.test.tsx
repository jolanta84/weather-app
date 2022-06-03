import axios from "axios";


jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("App component", () => {
  test("should fetch weather data", () => {
    const weatherData = [
      { main: "Clouds", description: "zachmurzenie małe", icon: "03d" },
    ];
    const res = { data: weatherData };
    mockedAxios.get.mockResolvedValue(res as any);
  });
});
