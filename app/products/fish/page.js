// app/products/fish/page.js
import FishGallery from '@/components/FishGallery.jsx';

export const metadata = {
  title: 'Atl Ecosystem — Peces',
  description: 'Galería y catálogo de peces para estanques y acuarios.',
};

export default function FishPage({ searchParams }) {
  const initialCategorySlug = searchParams?.cat ?? null;

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <FishGallery
      />
    </main>
  );
}
