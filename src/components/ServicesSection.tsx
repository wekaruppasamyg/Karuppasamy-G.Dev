import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Web Development',
    description:
    'I create modern, responsive, and high-performance websites.Designed to deliver a smooth experience across all devices.',
  },
  {
    number: '02',
    name: 'Web Application Development',
    description:
      'I build modern, scalable, and user-friendly web applications using the latest technologies and best practices.',
  },
  {
    number: '03',
    name: 'App Development',
    description:
      'I create modern, responsive, and high-performance mobile applications for iOS and Android platforms.',
  },
  {
    number: '04',
    name: 'AI-Powered Applications',
    description:
      'Creating intelligent, data-driven applications that leverage artificial intelligence to provide enhanced functionality and user experiences.',
  },
  {
    number: '05',
    name: 'AI Chatbots & Assistants',
    description:
      'I create smart AI chatbots and virtual assistants for businesses. They can handle conversations, provide information, and automate tasks.',
  },
   {
    number: '06',
    name: 'E-Commerce Development',
    description:
      'I build modern, scalable, and user-friendly e-commerce solutions that provide a seamless shopping experience for customers.',
  },
   {
    number: '07',
    name: 'UI/UX Design',
    description:
      'I create intuitive and visually appealing user interfaces and experiences that enhance user satisfaction and engagement.',
  },
   {
    number: '08',
    name: 'Custom Software Development',
    description:
      'I create custom software solutions tailored to the specific needs of each client, ensuring optimal performance and user satisfaction.',
  },
   {
    number: '09',
    name: 'Dashboard & Admin Panels',
    description:
      'I create intuitive and user-friendly dashboard and admin panels that provide a seamless experience for managing and monitoring applications.',
  },
   {
    number: '10',
    name: 'API Development & Integration',
    description:
      'I create robust and scalable APIs that enable seamless integration between different systems and applications.',
  },
   {
    number: '11',
    name: 'Database Development',
    description:
      'I create efficient and scalable database solutions that ensure data integrity and optimal performance.',
  },
   {
    number: '12',
    name: 'Automation Solutions',
    description:
      'I create automated solutions that streamline processes and improve efficiency.',
  },
   {
    number: '13',
    name: 'Cloud Deployment & Maintenance',
    description:
      ' I deploy websites and applications to reliable cloud platforms.I also provide maintenance, updates, monitoring, and performance optimization.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[60px] px-4 sm:px-8 md:px-12 py-14 sm:py-20 md:py-28"
    >
      <FadeIn delay={0} y={30} as="div">
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-10 xs:mb-14 sm:mb-20 md:mb-24 leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 150px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.08} y={25} as="div">
            <div
              className="flex items-start gap-4 sm:gap-8 md:gap-10 py-6 sm:py-8 md:py-11"
              style={{
                borderBottom:
                  i < SERVICES.length - 1 ? '1px solid rgba(12, 12, 12, 0.12)' : 'none',
              }}
            >
              <span
                className="text-[#0C0C0C] font-black leading-none flex-shrink-0 select-none"
                style={{ fontSize: 'clamp(2.2rem, 7.5vw, 120px)' }}
              >
                {service.number}
              </span>

              <div className="flex flex-col gap-1.5 sm:gap-3 md:gap-4 justify-center flex-1 min-w-0">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase text-lg sm:text-2xl md:text-3xl lg:text-[2rem] tracking-tight"
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C]/75 font-light leading-relaxed text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl"
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
