const links: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "Play", href: "/play" },
  { title: "Home Section", href: "/#section" },
  { title: "Play Section", href: "/play#section" },
];

import ProgressLink from "@/lib/progress-link";

export default function Links() {
  return (
    <div>
      <h3 className="font-medium mb-0.5">Links</h3>
      <nav className="flex flex-col ">
        {links.map((link) => (
          <ProgressLink
            href={link.href}
            key={link.href}
            className="hover:underline"
          >
            {link.title}
          </ProgressLink>
        ))}
      </nav>
    </div>
  );
}
