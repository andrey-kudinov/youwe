import { ReactNode } from 'react';

import { Footer } from '@/components/base/Footer/Footer';
import { Header } from '@/components/base/Header/Header';

export const Page = ({ children }: { children?: ReactNode }) => (
  <>
    <Header />
    <main className="page-wrapper">{children}</main>
    <Footer />
  </>
);
