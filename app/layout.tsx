import QueryProvider from "./_providers/QueryProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-full">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
