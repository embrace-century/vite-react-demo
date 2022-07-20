export {};

declare global {
  interface Window {
    [key: string]: unknown;
  }

  type IPoint = `POINT (${number} ${number})`;
}
