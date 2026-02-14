export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!" className="inline-block mb-4">
                    <span className="text-3xl font-Ovo font-bold dark:text-white">Arooj<span className="text-purple-600">.</span></span>
                </a>



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