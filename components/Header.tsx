import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto sticky top-0 z-50 bg-white">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img src="https://links.papareact.com/yvf" className="w-44 object-contain cursor-pointer" />
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="text-white bg-green-500 px-4 py-1 rounded-full">Follow</h3>
            </div>
        </div>
        <div className="flex items-center space-x-5 text-green-500">
            <h3>Sign In</h3>
            <h3 className="border px-4 py-1 rounded-full border-green-500">Get started</h3>
        </div>
    </header>
  )
}

export default Header