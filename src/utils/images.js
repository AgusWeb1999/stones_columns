const images = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true });

const formattedImages = {};
for (const path in images) {
  const fileName = path.split('/').pop();
  formattedImages[fileName] = images[path].default;
}

export default formattedImages;
