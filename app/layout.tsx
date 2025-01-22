import "../styles/globals.css";
import ReactQueryProvider from "./ReactQueryProvider";

export const metadata = {
  title: "Tedooo Feed",
  description: "A simple feed application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
