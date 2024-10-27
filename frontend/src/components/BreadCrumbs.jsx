import { Link, useLocation } from 'react-router-dom';

export default function BreadCrumbs() {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-gray-600 text-sm my-4">
      <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1;

        // Handle "productdetails" to display "Shop" and link it to "/shop"
        const displayName = name === "productdetails" ? "Shop" : name;
        const linkPath = name === "productdetails" ? "/shop" : `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <span key={index} className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            {isLast ? (
              <span className="font-semibold text-gray-700">{displayName}</span>
            ) : (
              <Link to={linkPath} className="hover:text-blue-500 transition-colors">
                {displayName}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
