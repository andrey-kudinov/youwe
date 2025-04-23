/* eslint-disable @typescript-eslint/no-explicit-any */
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

export const shuffle = (array: any) =>
  array
    .map((value: any) => ({ value, sort: Math.random() }))
    .sort((a: any, b: any) => a.sort - b.sort)
    .map(({ value }: any) => value);

export const loader = ({ src }: { src: string }) => `${src}`;
