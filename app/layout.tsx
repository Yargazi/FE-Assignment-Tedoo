import "../styles/globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import { LikesProvider } from "./context/LikesContext";
import { DM_Sans } from "next/font/google";

export const metadata = {
  title: "Tedooo Feed",
  description: "A simple feed application",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <ReactQueryProvider>
          <LikesProvider>{children}</LikesProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
