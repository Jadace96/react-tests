type ConsoleType = "error" | "log" | "warn";

export const mockConsole = (consoleType: ConsoleType = "error") => {
  global.console[consoleType] = jest.fn();
};
