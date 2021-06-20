export type MockMap<T extends Record<string, unknown>> = Record<
  keyof T,
  ReturnType<typeof jest.fn>
>;
