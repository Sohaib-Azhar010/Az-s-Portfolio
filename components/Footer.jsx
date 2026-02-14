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
                    <div className="flex items-center gap-2">
                        <img src="/assets/hand-icon.png" alt="" className="w-4 mb-1" />
                        <span>03214260731</span>
                    </div>
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