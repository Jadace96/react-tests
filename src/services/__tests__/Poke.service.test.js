// vendors
import { render, screen, waitFor } from "@testing-library/react";

// services
import { fetchPokes } from "services/Poke.service";

// mocks
import { mockFetchPokesResponse } from "mocks/data/Pokes.mock";
import { mockSuccess, mockError } from "mocks/methods/Fetch.mock";

describe("fetchPokes tests suit", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return success data", async () => {
    await mockSuccess(mockFetchPokesResponse);
    const response = await fetchPokes();

    expect(response).toEqual(mockFetchPokesResponse);
  });

  it("should return error message", async () => {
    const mockErrorMessage = "Some error message";
    await mockError(mockErrorMessage);
    const response = await fetchPokes();

    expect(response).toEqual(mockErrorMessage);
  });
});
