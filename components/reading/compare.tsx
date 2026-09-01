import type { ReactNode } from "react";

interface CompareProps {
  a: string;
  b: string;
  rows: { label: string; a: ReactNode; b: ReactNode }[];
}

/** A clean two-column comparison table for "X vs Y" sections. */
export function Compare({ a, b, rows }: CompareProps) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-1/4"></th>
            <th>{a}</th>
            <th>{b}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <th scope="row" className="text-left align-top">
                {r.label}
              </th>
              <td className="align-top">{r.a}</td>
              <td className="align-top">{r.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
