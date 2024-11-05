import "./globals.css";

export const metadata = {
  title: "BuscarPro",
  description:
    "Ofrecemos las mejores cámaras de acción y accesorios, para inmortalizar tus nuevas experiencias extremas",
};

// /app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="../public/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
