import { Baby, CalendarCheck2, Stethoscope, Sparkles } from 'lucide-react';

const events = [
  {
    title: 'First Ultrasound',
    description: 'Hearing the heartbeat for the first time — unforgettable.',
    icon: Stethoscope,
    date: 'Week 8'
  },
  {
    title: 'Cravings & Laughs',
    description: 'Pickles with peanut butter? If it sparks joy, it stays.',
    icon: Sparkles,
    date: 'Week 15'
  },
  {
    title: 'Bump Photoshoot',
    description: 'Capturing growth and glow with a cozy at-home session.',
    icon: CalendarCheck2,
    date: 'Week 24'
  },
  {
    title: 'Name Brainstorm',
    description: 'A list on the fridge and a lot of happy debates.',
    icon: Baby,
    date: 'Week 30'
  }
];

export default function Timeline() {
  return (
    <section id="journey" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Journey Highlights</h2>
      <p className="mt-2 text-gray-600">A few precious milestones from the road to parenthood.</p>

      <ol className="mt-10 relative border-s-2 border-dashed border-gray-200 pl-6 space-y-8">
        {events.map((e, i) => (
          <li key={i} className="relative">
            <div className="absolute -left-[39px] h-8 w-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 grid place-items-center text-white shadow">
              <e.icon className="h-4 w-4" />
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{e.title}</h3>
                <span className="text-xs text-gray-500">{e.date}</span>
              </div>
              <p className="mt-2 text-gray-700">{e.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
