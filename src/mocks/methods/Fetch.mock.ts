export const mockFetchSuccess = (response: any) => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => response,
    })
  );
};

export const mockFetchError = (error: any) => {
  global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));
};
