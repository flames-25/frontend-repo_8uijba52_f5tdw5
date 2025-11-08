export default function Footer() {
  return (
    <footer id="about" className="mt-20 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">About His Story</h3>
            <p className="mt-2 text-gray-700">
              Parenthood looks many ways. This space honors a trans man's pregnancy with warmth and respect — a reminder that love makes a family.
            </p>
          </div>
          <div className="md:text-right text-gray-600">
            Created with care. Be kind, be curious, and celebrate every journey.
          </div>
        </div>
      </div>
    </footer>
  );
}
