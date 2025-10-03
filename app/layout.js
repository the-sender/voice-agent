export const metadata = { title: "Voice Agent" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto' }}>{children}</body>
    </html>
  );
}
