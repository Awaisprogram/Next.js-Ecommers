import React from 'react';
import Link from 'next/link';

interface NavigationProps {
  Previous?: string; 
  Current: string;   
  nav?: string;      
}

function Navigation({ Previous, Current, nav }: NavigationProps) {
  return (
    <nav className="text-lg font-light text-gray-500  p-1">
      <ol className="flex space-x-2">
        <li>
          <Link
            href="/"
            className="text-color hover:underline dark:text-blue-400"
          >
            Home
          </Link>
        </li>
        {Previous && nav && (
          <>
            <li className="text-gray-400 dark:text-gray-600">/</li>
            <li>
              <Link
                href={`/${nav}`} 
                className="text-color hover:underline dark:text-blue-400"
              >
                {Previous}
              </Link>
            </li>
          </>
        )}
        <li className="text-gray-400 dark:text-gray-600">/</li>
        <li className="text-gray-900 dark:text-gray-100">{Current}</li>
      </ol>
    </nav>
  );
}

export default Navigation;
