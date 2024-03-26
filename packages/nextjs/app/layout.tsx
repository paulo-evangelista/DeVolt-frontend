import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";

export const metadata: Metadata = {
  title: "DeVolt | The distributed charging network",
  description: "Charge your car or sell your exceeding energy in the most blockchain way possible!",
  icons: "https://www.devolt.xyz/favicon.ico",
  openGraph: {
    images: "https://www.devolt.xyz/ogimage.png",
    type: "website",
    url: "https://www.devolt.xyz",
    locale: "en",
  }
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
