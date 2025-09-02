import './globals.css';

export const metadata = {
  title: 'App',
  description: 'Running app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
