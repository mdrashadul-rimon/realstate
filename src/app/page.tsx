// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <nav>
        <ul>
          <li><Link href="/login">Login Please</Link></li>
          {/* Add other navigation links here */}
        </ul>
      </nav>
    </div>
  );
}
