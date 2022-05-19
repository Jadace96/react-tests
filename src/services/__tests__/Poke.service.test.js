// vendors
import { render, screen, waitFor } from "@testing-library/react";

// services
import { fetchPokes } from "services/Poke.service";

// mocks
import { mockFetchPokesResponse } from "mocks/data";
import { mockFetchSuccess, mockFetchError, mockConsole } from "mocks/methods";

describe("fetchPokes tests suit", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return success response", async () => {
    await mockFetchSuccess(mockFetchPokesResponse);

    const { isError, response } = await fetchPokes();

    expect(isError).toBeUndefined();
    expect(response.results).toHaveLength(20)
    expect(response).toEqual(mockFetchPokesResponse);
  });

  it("should return isError as true", async () => {
    mockConsole();
    const mockErrorMessage = "Some error message";
    await mockFetchError(mockErrorMessage);

    const { isError } = await fetchPokes();

    expect(isError).toBe(true);
    expect(global.console.error).toBeCalledWith(mockErrorMessage);
  });
});
