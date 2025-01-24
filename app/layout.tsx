import "../styles/globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import { LikesProvider } from "./context/LikesContext";

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
        <ReactQueryProvider>
          <LikesProvider>{children}</LikesProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
