# Next Top Loading Bar

Top loading bar for Nextjs App Router

Try live demo [here](https://next-top-loading-bar.vercel.app)

## Install

```bash
npm i @jodd/next-top-loading-bar
# or
yarn add @jodd/next-top-loading-bar
# or
pnpm i @jodd/next-top-loading-bar
# or
bun i @jodd/next-top-loading-bar
```

## Usage

### Import Loading bar to the Root layout

```tsx
import { LoadingBar } from "@/jodd/next-top-loading-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoadingBar color="#0284c7" waitingTime={200} />
        {children}
      </body>
    </html>
  );
}
```

### Replace next Link component with ProgressLink

```tsx
export function Component() {
  return (
    <div>
      {/* use progress link to fire top loading bar on route change */}
      <ProgressLink href="/dashboard">Dashboard</ProgressLink>
    </div>
  );
}
```

### Manually start the top loading bar transition

```tsx
import { useLoadingBar } from "@jodd/next-top-loading-bar";
import { useRouter } from "next/navigation";

export default function Component() {
  const { start } = useLoadingBar.getState();
  const router = useRouter();

  const navigateSomewhere = () => {
    const route = "/somewhere";
    start(route);
    router.push(route);
  };

  return (
    <div>
      <button onClick={navigateSomewhere}>Go to somewhere</button>
    </div>
  );
}
```

### Use button as a link

```tsx
import { ProgressButton } from "@jodd/next-top-loading-bar";

export default function Component() {
  const computedLink = compute();

  return (
    <div>
      <ProgressButton href={computedLink}>Go to computed link</ProgressButton>
    </div>
  );
}
```

## Credits

- This package uses [react-top-loading-bar](https://github.com/klendi/react-top-loading-bar) under the hood
- This package uses [zustand](https://github.com/pmndrs/zustand) for state management
