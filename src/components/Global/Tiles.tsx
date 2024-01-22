import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return (
    <section className="m-auto rounded-lg bg-gray-300 shadow-lg lg:p-6">
      {children}
    </section>
  );
}

export function Item({ children }: { children: ReactNode }) {
  return (
    <div className="block rounded-lg bg-gray-100 p-6 text-gray-700 shadow-lg lg:last:mb-0">
      {children}
    </div>
  );
}
