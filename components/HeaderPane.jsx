"user client"

import Link from 'next/link';

export const navRoutes = [
  { name: 'Home', path: '/' },
  { name: 'Hooks', path: '/hooks' },
  { name: 'Sculpture', path: '/sculptureList' },
  { name: 'Temp', path: '/tempCalc' },
];

function HeaderPane() {
  return (
    // the justify unitily class has many props: evenly, center, between, statrt,end--> check the docs
    <header className="bg-gray-900 text-gray-300 px-6 py-4 shadow-md flex justify-between items-center">
      {/* <h1 className="text-xl text-purple-400 font-bold" href="/">My App</h1> */}
      <Link href="/" className="text-xl text-purple-400 font-bold">
        My App
      </Link>
      <nav className="space-x-4 text-blue-200">
        {/* if hover:italic font-serif == the latter class will apply no matter what*/}
        <a href="/" className="hover:italic hover:font-serif">Home</a>
        <a href="/about" className="hover:text-gray-500">About</a>
        <a href="/user" className="hover:bg-violet-600">User</a>
        <a href="/product" className="hover:underline">Product</a>
        <a href="/contact" className="hover:shadow-md">Contact</a>

      </nav>
    </header>
  )
}

export default function NavbarPane() {
  return (
    <header className="bg-gray-900 text-gray-300 px-6 py-4 shadow-md flex justify-between items-center">
      <Link href="/" className="text-xl text-purple-400 font-bold">
        My App
      </Link>
      <nav className="space-x-4 text-blue-200">
        {navRoutes.map((route) => (
          <a key={route.path} href={route.path} className="hover:text-purple-400">
            {/* {route.icon} */}
            {route.name}
          </a>
        ))}
      </nav>
    </header>

  )


}