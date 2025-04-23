import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import vsLight from 'prism-react-renderer/themes/vsLight';

import styles from './Article.module.scss';

export interface ICode {
  code: {
    code: string;
    language: Language;
  };
}

export const Code = ({ code: _code }: Partial<ICode>) => {
  const { code, language } = _code ?? {};

  if (!code || !language) return null;

  return (
    <section className={styles.code}>
      <Highlight {...defaultProps} theme={vsLight} code={code} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre className={className}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </section>
  );
};
