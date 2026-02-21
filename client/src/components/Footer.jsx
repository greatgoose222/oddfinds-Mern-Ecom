function Footer() {
    return (
        <footer className="bg-black">
            <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Left */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} OddFinds. All rights reserved.
                </p>

                {/* Right */}
                <div className="flex gap-5 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition">Privacy</a>
                    <a href="#" className="hover:text-white transition">Terms</a>
                    <a href="#" className="hover:text-white transition">Support</a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
