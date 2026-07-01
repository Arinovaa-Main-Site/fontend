import React from "react";

const About = () => {
  return (
    <main className="bg-[#020B2D] text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-slate-400">
          Architecting The Future
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Engineering excellence
          <br />
          through precision.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300">
          Arinovaa Labs is a premier digital transformation consultancy
          dedicated to solving complex technical challenges for world-changing
          enterprises.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-[#010820] py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white">
              Our Origin
              <br />
              & Mission
            </h2>
          </div>

          {/* Right Side */}
          <div>
            <p className="mb-8 leading-8 text-slate-300">
              Founded in 2026, Arinovaa Labs was built on a simple observation: the bridge between visionary business goals and technical execution is often brittle.
            </p>

            <p className="mb-10 leading-8 text-slate-300">
              We established our practice on the principles of structural integrity and algorithmic transparency. Unlike traditional consultancies, we embed ourselves deep within the engineering lifecycle, treating every line of code as a critical asset for our {"client's"} long-term scalability.
            </p>

            {/* Quote Card */}
            <div className="rounded-2xl border border-slate-700 bg-[#08112F] p-6 shadow-lg">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600">
                ✦
              </div>

              <p className="italic leading-8 text-slate-300">
               We are dedicated to delivering exceptional solutions with a strong commitment to client satisfaction, building reliable, scalable, and innovative software that helps businesses achieve their goals with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;