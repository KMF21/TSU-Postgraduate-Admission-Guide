// app/components/PlatformIntegritySection.tsx

"use client";

export const PlatformIntegritySection: React.FC = () => {
  return (
    <section id="platform-integrity" className="py-10 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Platform Integrity
        </h2>

        {/* Body Text */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          The TSU Postgraduate Admissions Guide is an independent, non-official platform. 
          All content is verified against official notices to ensure accuracy. 
          This platform does not guarantee admission and is provided solely to support applicants.
        </p>
      </div>
    </section>
  );
};
