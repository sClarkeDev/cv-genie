import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-semibold tracking-tight text-2xl text-blue-500">
        CV <span className="text-foreground">Genie</span>
      </h1>
    </Link>
  );
};

export default Logo;
