// vendors
import { render, screen } from "@testing-library/react";

// components
import { App } from "../App";

// hooks
import * as usePokeHook from "../hooks/UsePoke.hook";

// constants
import { DATA_TEST_ID } from "../constants";

// mocks
import { mockPokesName } from "../mocks/Pokes.mock";

describe("App test suit with usePoke hook mocked", () => {
  it("should render the loader", () => {
    jest.spyOn(usePokeHook, "usePoke").mockReturnValue({
      pokesData: mockPokesName,
      isFetchingPokes: true,
      isFetchingPokesError: false,
      isFetchingPokesSuccess: false,
    });

    render(<App />);
    const Loader = screen.getByText(/Loading/i);

    expect(Loader).toBeInTheDocument();
  });

  it("should render error message", () => {
    jest.spyOn(usePokeHook, "usePoke").mockReturnValue({
      pokesData: mockPokesName,
      isFetchingPokes: false,
      isFetchingPokesError: true,
      isFetchingPokesSuccess: false,
    });

    render(<App />);
    const ErrorMessage = screen.getByText(/Error fetching pokes/i);

    expect(ErrorMessage).toBeInTheDocument();
  });

  it("should render 20 pokes", () => {
    jest.spyOn(usePokeHook, "usePoke").mockReturnValue({
      pokesData: mockPokesName,
      isFetchingPokes: false,
      isFetchingPokesError: false,
      isFetchingPokesSuccess: true,
    });

    render(<App />);
    const listTitle = screen.getByText(/First 20 pokemon/i);
    const pokeList = screen.getAllByTestId(DATA_TEST_ID.POKES.LIST_ITEM_NAME);

    expect(listTitle).toBeInTheDocument();
    expect(pokeList).toHaveLength(mockPokesName.length);
  });
});
