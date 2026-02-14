export default function Services() {
    const services = [
        {
            name: 'Web Development',
            icon: '/assets/web-icon.png',
            description: 'Building responsive, high-performance websites using HTML, CSS, JavaScript, and modern frameworks like React & Next.js.',
            link: '#',
        },
        {
            name: 'eCommerce Solutions',
            icon: '/assets/mobile-icon.png',
            description: 'Creating robust online stores and service-based platforms with seamless functionality and user experience.',
            link: '#',
        },
        {
            name: 'UI/UX Design',
            icon: '/assets/ui-icon.png',
            description: 'Designing intuitive and visually appealing interfaces that ensure a smooth and engaging user journey.',
            link: '#',
        },
        {
            name: 'SEO & Optimization',
            icon: '/assets/graphics-icon.png',
            description: 'Optimizing websites for speed, performance, and search engine visibility to drive organic traffic.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a passionate Website Developer specialized in creating responsive, user-friendly websites for eCommerce and service-based platforms.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}