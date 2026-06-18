import Image from "next/image";

const OurVision = () => {
  return (
    <section className="bg-[#030B2A] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
              alt="Vision"
              width={800}
              height={500}
              className="h-[320px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030B2A] via-[#030B2A]/70 to-transparent" />

            <div className="absolute bottom-0 p-8">
              <h3 className="mb-3 text-2xl font-semibold">The Vision</h3>
              <p className="text-sm leading-7 text-slate-300">
                We envision a world where technology doesn&apos;t just serve
                people, but anticipates their needs through autonomous,
                self-healing infrastructures.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
              alt="Mission"
              width={800}
              height={500}
              className="h-[320px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030B2A] via-[#030B2A]/70 to-transparent" />

            <div className="absolute bottom-0 p-8">
              <h3 className="mb-3 text-2xl font-semibold">The Mission</h3>
              <p className="text-sm leading-7 text-slate-300">
                To deliver high-fidelity software engineering services that
                redefine industry standards for performance, security, and
                user-centric design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;