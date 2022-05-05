export const mockSuccess = (response: any) => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => response,
    })
  );
};

export const mockError = (error: any) => {
  global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));
};
