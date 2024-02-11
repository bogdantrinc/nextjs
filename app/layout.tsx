'use client'

import './globals.css';
import { Upload } from './components/Upload';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col items-center justify-between p-24'>
        <header>
          <Upload />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
