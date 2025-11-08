import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] grid lg:grid-cols-2 items-center max-w-6xl mx-auto px-4 sm:px-6 py-16 gap-10">
      <div className="relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-4">
          New Chapter
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          The Beautiful Story of a Pregnant Man
        </h1>
        <p className="mt-5 text-lg text-gray-700 max-w-prose">
          A celebration of love, resilience, and the endlessly diverse ways families are formed. Follow along as he navigates appointments, cravings, and all the magic in between.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a href="#journey" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            Explore the Journey
          </a>
          <a href="#moments" className="px-5 py-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 text-gray-900 transition-colors">
            See Moments
          </a>
        </div>
      </div>
      <div className="relative h-[380px] sm:h-[520px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
        <Spline scene="https://prod.spline.design/jeY7e7b9izKJpKOH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/40" />
      </div>
    </section>
  );
}
