import MainHeaderBackground from '@/components/MainHeaderBackground/MainHeaderBackground';
import './globals.css';

import MainHeader from '@/components/MainHeader/MainHeader';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader></MainHeader>
        {children}
      </body>
    </html>
  );
}
