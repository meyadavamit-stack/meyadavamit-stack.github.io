import './globals.css';

export const metadata = {
  title: 'Amit Rao Yadav | Director – Finance & Operations',
  description: 'Executive Portfolio of Amit Rao Yadav - Director of Finance & Operations, Supply Chain & Logistics Strategy, Vendor Lifecycle, and Cost Optimization.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

