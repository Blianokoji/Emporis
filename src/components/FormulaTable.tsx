import React from "react";

export interface FormulaRow {
  id: string;
  name: string;
  amount: string;
  role: string;
}

interface FormulaTableProps {
  /** Column headings after the "#" column: item, amount, role. */
  headings: readonly [string, string, string];
  rows: readonly FormulaRow[];
  footnote?: string;
}

/** Four-column composition table shared by every product; every column stays visible and narrow screens scroll sideways. */
const FormulaTable: React.FC<FormulaTableProps> = ({ headings, rows, footnote }) => (
  <div className="overflow-x-auto rounded-xl border border-purple-brand/10">
    <table className="w-full min-w-[36rem] text-left">
      <thead className="border-b border-purple-brand/10 bg-lavender-white text-sm text-muted-plum">
        <tr>
          <th scope="col" className="w-14 py-4 pr-2 pl-6 font-medium">#</th>
          <th scope="col" className="min-w-44 py-4 pr-4 font-medium">{headings[0]}</th>
          <th scope="col" className="py-4 pr-6 text-right font-medium">{headings[1]}</th>
          <th scope="col" className="py-4 pr-6 font-medium">{headings[2]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={row.id} className="border-b border-purple-brand/[0.07] align-top last:border-0">
            <td className="py-4 pr-2 pl-6 text-sm text-muted-plum tabular-nums">{String(i + 1).padStart(2, "0")}</td>
            <th scope="row" className="py-4 pr-4 font-medium text-ink-deep">
              {row.name}
            </th>
            <td className="py-4 pr-6 text-right whitespace-nowrap text-ink-deep tabular-nums">{row.amount}</td>
            <td className="py-4 pr-6 text-sm leading-[1.6] text-ink-soft">{row.role}</td>
          </tr>
        ))}
      </tbody>
      {footnote && (
        <tfoot className="border-t border-purple-brand/10">
          <tr>
            <td colSpan={4} className="px-6 py-4 text-sm text-muted-plum">
              {footnote}
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  </div>
);

export default FormulaTable;
