export {};

declare global {
  interface Window {
    [key: string]: unknown;
  }

  type IPointDef = `POINT (${number} ${number})`;
}
