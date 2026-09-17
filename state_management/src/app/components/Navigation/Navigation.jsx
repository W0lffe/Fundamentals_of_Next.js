import Link from 'next/link';

export default function Navigation({path, children}){
    return (
    <nav>
      <Link href={path}>{children}</Link>
    </nav>
  );
}