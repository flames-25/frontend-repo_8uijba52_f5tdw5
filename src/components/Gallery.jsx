import { useState } from 'react';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1200&auto=format&fit=crop',
    alt: 'His hands forming a heart over his belly'
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    alt: 'Cozy home photoshoot with soft light'
  },
  {
    src: 'https://images.unsplash.com/photo-1577634157755-c825e9226cf0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3p5JTIwaG9tZSUyMHBob3Rvc2hvb3QlMjB3aXRofGVufDB8MHx8fDE3NjI1OTIxNzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Baby clothes and tiny shoes on a bed'
  },
  {
    src: 'https://images.unsplash.com/photo-1760727772969-cb5cd59c6f30?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYWJ5JTIwY2xvdGhlcyUyMGFuZCUyMHRpbnl8ZW58MHwwfHx8MTc2MjU5MjE3Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Warm cup of tea and journal on a table'
  }
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="moments" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Little Moments</h2>
          <p className="mt-2 text-gray-600">Snapshots that tell his story of anticipation and joy.</p>
        </div>
        <div className="hidden sm:flex gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              aria-label={`Show photo ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 w-8 rounded-full transition-colors ${active === i ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {photos.map((p, i) => (
          <figure key={i} className={`relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm ${active === i ? 'ring-2 ring-pink-400' : ''}`}>
            <img src={p.src} alt={p.alt} className="h-64 w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent text-white text-sm">
              {p.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
