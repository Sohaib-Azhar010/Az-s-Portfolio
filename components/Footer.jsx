export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!" className="inline-block mb-4">
                    <span className="text-3xl font-Ovo font-bold dark:text-white">Arooj<span className="text-purple-600">.</span></span>
                </a>


                <div className="flex flex-col items-center gap-2">
                    <a href="mailto:aroojz33355@gmail.com" className="flex items-center gap-2">
                        <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                        aroojz33355@gmail.com
                    </a>
                    <a href="https://wa.me/923214260731" target="_blank" className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.13 1.25 4.74 1.25 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zM12.05 20.21c-1.5 0-2.96-.39-4.27-1.15l-.3-.18-3.15.83.84-3.07-.2-.31c-.82-1.27-1.24-2.75-1.24-4.27 0-4.42 3.59-8.01 8.01-8.01s8.01 3.59 8.01 8.01-3.59 8.01-8.01 8.01zm4.39-6.04c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04s.88 2.36 1 2.69c.12.32 1.73 2.65 4.2 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                        </svg>
                        <span>+92 321 4260731</span>
                    </a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com?utm_source=arooj" target="_blank">Arooj Zahid</a> • All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://www.linkedin.com/in/arooj-zahid-7900b1372/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}