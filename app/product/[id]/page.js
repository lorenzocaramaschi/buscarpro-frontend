"use client";

import React, { useEffect, useState } from "react"; // Import React and hooks
import Link from "next/link"; // Import Link for navigation

const API_URL = "https://buscarpro-backend.onrender.com/products";

export default function ProductPage({ params }) {
  const id = React.use(params).id; // Unwrap the params using React.use
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return; // Prevent fetching if id is not available

      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
          throw new Error(
            `Error de la API: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-brand-blue-3 flex items-center justify-center min-h-screen">
        <p className="text-4xl text-white font-bold">Cargando...</p>
      </div>
    );
  }

  if (!product) {
    return <div>Error al cargar el producto. Inténtalo más tarde.</div>;
  }

  return (
    <main className="bg-white">
      <header className="bg-brand-blue-1 p-4 sticky top-0 z-10 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-2xl">
          BuscarPro
        </Link>        
      </header>
      <div className="flex flex-col lg:flex-row items-center justify-center m-5">
        <img
          className="w-full lg:w-5/12 p-2 bg-slate-800 rounded-lg"
          src={product.image}
          alt={product.name}
        />
        <div className="flex flex-col w-full lg:w-5/12 mt-4 lg:mt-0 lg:ml-5">
          <h1 className="text-3xl lg:text-5xl text-black font-bold">
            {product.name}
          </h1>
          <p className="text-white bg-brand-blue-1 w-1/2 p-2 rounded-lg mt-2 text-2xl lg:text-4xl">
            ${product.price.toLocaleString("es-AR")}
          </p>

          <p className="text-black mt-4">{product.desc}</p>
          <a
            href="https://wa.me/5491145310463"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-700 w-1/2 p-3 mt-4 rounded-lg font-bold"
          >
            Contactar al vendedor
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>© 2024 BuscarPro. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://www.instagram.com/buscarpro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="Instagram"
          >
            <i className="bx bxl-instagram text-2xl"></i>
          </a>
          <a
            href="https://wa.me/5491145310463"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="WhatsApp"
          >
            <i className="bx bxl-whatsapp text-2xl"></i>
          </a>
        </div>
      </footer>
    </main>
  );
}
