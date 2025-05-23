// https://gist.github.com/reecelucas/2f510e6b8504008deaaa52732202d2da

import { useRef } from 'react';

const safeDocument = typeof document !== 'undefined' ? document : {};

/**
 * Usage:
 * const [blockScroll, allowScroll] = useScrollBlock();
 */
export const useScrollBlock = () => {
  const scrollBlocked = useRef(true);
  const html = (safeDocument as Document).documentElement;
  const { body } = safeDocument as Document;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */
    html.style.position = 'relative'; /* [1] */
    html.style.overflow = 'hidden'; /* [2] */
    body.style.position = 'fixed'; /* [1] */
    body.style.overflow = 'hidden'; /* [2] */
    // body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = 'static';
    body.style.overflow = '';
    // body.style.paddingRight = '';

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};
