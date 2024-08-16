import "./globals.css";
export const metadata = {
  title: "my registration form",
  description: "created by nazeer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
