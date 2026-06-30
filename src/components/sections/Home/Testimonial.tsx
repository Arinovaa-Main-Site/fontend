import Link from "next/link";

const Testimonial = () => {
  return (
    <section className="bg-[#020B2D] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA Section */}
        <div className="relative mt-24 overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-[#121E48] to-[#0A1434] px-8 py-20 text-center">
          {/* Glow Effects */}
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h3 className="text-4xl font-bold text-[#DCE4FF] md:text-5xl">
              Lets Build Something Amazing Together
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#A8B4D8]">
              Ready to transform your technical vision into a scalable digital
              product? Our team is standing by.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
              >
                Contact Us
              </Link>

              <Link
                href="https://cal.id/arinovaa-labs"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
