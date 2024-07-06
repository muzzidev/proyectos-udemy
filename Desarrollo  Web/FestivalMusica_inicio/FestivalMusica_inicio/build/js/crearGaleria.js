function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement('picture');
    // biome-ignore lint/correctness/noVoidElementsWithChildren: <explanation>
    <source srcset="build/img/imagen_vocalista.avif" type="image/avif">
      {/* biome-ignore lint/correctness/noVoidElementsWithChildren: <explanation> */}
      <source srcset={"build/img/imagen_vocalista.webp"} type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/imagen_vocalista.jpg" alt="Imagen Vocalista" />
        console.log(imagen);
  }

}</></>;
  }
}
