import { ProgressLink } from '@jodd/next-top-loading-bar';

const links: { title: string; href: string }[] = [
  { title: 'Home', href: '/' },
  { title: 'Play', href: '/play' },
  { title: 'Home Section', href: '/#section' },
  { title: 'Play Section', href: '/play#section' }
];

export default function Links() {
  return (
    <div>
      <h3 className="mb-0.5 font-medium">Links</h3>
      <nav className="flex flex-col">
        {links.map((link) => (
          <ProgressLink href={link.href} key={link.href} className="hover:underline">
            {link.title}
          </ProgressLink>
        ))}
      </nav>
    </div>
  );
}
