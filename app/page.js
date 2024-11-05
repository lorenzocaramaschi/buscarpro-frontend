// /app/page.js

import Image from "next/image";
import Link from "next/link";

const API_URL = "https://buscarpro-backend.onrender.com/products";

export default async function HomePage() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(
        `Error de la API: ${response.status} ${response.statusText}`
      );
    }
    const products = await response.json();

    const formatPrice = (price) => {
      return new Intl.NumberFormat("es-AR", { style: "decimal" }).format(price);
    };

    return (
      <main style={styles.main}>
        <h1 className="text-4xl sm:text-7xl" style={styles.title}>
          BuscarPro
        </h1>

        {/* Description Section */}
        <p className="text-md sm:text-2xl" style={styles.description}>
          Ofrecemos las mejores cámaras de acción y accesorios, para
          inmortalizar tus nuevas experiencias extremas
        </p>

        {/* Product Grid */}
        <div style={styles.gridContainer}>
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <div style={styles.productCard}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.productImage}
                />
                <h2 style={styles.productTitle}>{product.name}</h2>
                <p style={styles.productPrice}>${formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Section */}
        <footer style={styles.footer}>
          <p>© 2024 BuscarPro. Todos los derechos reservados.</p>
          <div style={styles.footerIcons}>
            <a
              href="https://www.instagram.com/buscarpro"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram" style={styles.icon}></i>
            </a>
            <a
              href="https://wa.me/5491145310463"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
              aria-label="WhatsApp"
            >
              <i className="bx bxl-whatsapp" style={styles.icon}></i>
            </a>
          </div>
        </footer>
      </main>
    );
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return <div>Error al cargar productos. Inténtalo más tarde.</div>;
  }
}

// Define styles as a JavaScript object
const styles = {
  main: {
    backgroundColor: "#F2F2F2",
    color: "#0D0D0D",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    color: "black",
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  description: {
    color: "#0367A6",
    textAlign: "center",
    marginBottom: "30px",
    padding: "0 10px",
    lineHeight: "1.5",
  },
  gridContainer: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  },
  productCard: {
    backgroundColor: "#07B0F2",
    color: "#F2F2F2",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  productTitle: {
    color: "#0D0D0D",
  },
  productPrice: {
    fontWeight: "bold",
    color: "white",
  },
  footer: {
    backgroundColor: "#0D0D0D",
    color: "#F2F2F2",
    textAlign: "center",
    padding: "15px 0",
    marginTop: "30px",
    fontSize: "0.9rem",
  },
  footerIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  iconLink: {
    color: "#F2F2F2",
    textDecoration: "none",
  },
  icon: {
    fontSize: "1.5rem",
  },
};

// Optional: Add a media query for extra fine-tuning on smaller screens
const mediaStyles = `
  @media (max-width: 600px) {
    main {
      padding: 10px;
    }
    h1 {
      font-size: 1.5em;
    }
    .productCard {
      padding: 15px;
    }
    .productImage {
      height: 150px;
    }
  }
`;

// Append media styles to the head of the document
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = mediaStyles;
  document.head.appendChild(styleSheet);
}
