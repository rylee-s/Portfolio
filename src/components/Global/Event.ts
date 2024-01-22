/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
export const log = (label: string, data: any) => {
  // @ts-ignore
  gtag("event", label, data);
}