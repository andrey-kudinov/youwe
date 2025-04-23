import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';

export interface IRichtext {
  heading: TypedObject[];
}

export const Richtext = ({ heading: blocks }: Partial<IRichtext>) => {
  if (!blocks) return null;

  return (
    <section>
      {blocks.map((block, index) => (
        <PortableText key={index} value={block} />
      ))}
    </section>
  );
};
