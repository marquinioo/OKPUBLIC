import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Root layout required by Next.js — locale-specific layout lives under [locale].
export default function RootLayout({ children }: Props) {
  return children;
}
