import FadeIn from './FadeIn';

interface Certificate {
  number: string;
  title: string;
  issuer: string;
  image: string;
}

const CERTIFICATES: Certificate[] = [
  {
    number: '01',
    title: 'State Level Polytechnic Project Expo 2026',
    issuer: 'Solamalai Institutions',
    image: '/certificates/SM .jpeg',
  },
  {
    number: '02',
    title: 'Kalloori Kalai Thiruvizha',
    issuer: 'Tamil Nadu Government Polytechnic college Madurai',
    image: '/certificates/KKT.jpeg',
  },
  {
    number: '03',
    title: 'InnovateTN Madurai Innovation Camp',
    issuer: 'Forge Innovation & Ventures',
    image: '/certificates/IMC.jpeg',
  },
  {
    number: '04',
    title: 'Google Ads for Beginners',
    issuer: 'Coursera',
    image: '/certificates/GA.jpeg',
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative bg-white rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[60px] -mt-8 sm:-mt-12 md:-mt-14 z-20 px-4 sm:px-8 md:px-12 pt-16 sm:pt-24 pb-24 sm:pb-36"
    >
      <FadeIn delay={0} y={30} as="div">
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-10 xs:mb-14 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 150px)' }}
        >
          Certificates
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {CERTIFICATES.length ? (
          CERTIFICATES.map((certificate, index) => (
            <FadeIn key={certificate.number} delay={index * 0.08} y={25} as="article">
              <div className="h-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#0C0C0C]/15 bg-[#0C0C0C] p-3 sm:p-4 shadow-xl">
                <div className="aspect-[4/3] overflow-hidden rounded-[16px] sm:rounded-[22px] bg-[#D7E2EA]/10">
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-5 px-1 pb-1">
                  <span className="text-[#D7E2EA] font-black leading-none text-3xl sm:text-4xl">
                    {certificate.number}
                  </span>
                  <div>
                    <h3 className="text-[#D7E2EA] font-medium uppercase text-base sm:text-lg leading-tight">
                      {certificate.title}
                    </h3>
                    <p className="text-[#D7E2EA]/60 uppercase tracking-wider text-xs mt-1">
                      {certificate.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))
        ) : (
          <FadeIn delay={0.1} y={25} as="div" className="sm:col-span-2 lg:col-span-3">
            <div className="rounded-[24px] sm:rounded-[32px] border-2 border-dashed border-[#0C0C0C]/20 p-8 sm:p-12 text-center">
              <p className="text-[#0C0C0C] font-medium uppercase tracking-wider text-sm sm:text-base">
                Certificate gallery ready for your images
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
