import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function BasicTable({ data, columns }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
      
      <div className=" border-4 border-black m-7 ">
        <label>
          Filter:
          <input
            className="border-4 "
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
        </label>
        <table className="w3-table-all w-full">
          <thead>
            {table.getHeaderGroups()?.map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-2 border-black bg-green-200"
              >
                {headerGroup.headers?.map((header) => (
                  <th
                    className="text-green-500 border-2 border-black bg-yellow-200 "
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          { asc: "🔼", desc: "🔽" }[
                            header.column.getIsSorted() ?? null
                          ]
                        }
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
  
          <tbody className="text-red-500 border-2 border-black bg-green-300 ">
            {table.getRowModel().rows?.map((row) => (
              <tr key={row.id} className=" border-2 border-black">
                {row.getVisibleCells()?.map((cell) => (
                  <td key={cell.id} className="border-2 border-black">
                    <NavLink to={`/${Number(row.id)+1}`}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </NavLink>
                
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
  
        <button
          className="bg-red-200 border-4 m-1 font-bold p-1 border-black hover:bg-sky-300"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          First page
          {"<<"}
        </button>
        <button
          className="bg-red-200 m-1 border-4 border-black p-1 font-bold"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {" "}
          Previous page
          {"<"}
        </button>
        <button
          className="bg-red-200  m-1 font-bold p-1 border-4 border-black"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {" "}
          Next page
          {">"}
        </button>
        <button
          className="bg-red-200  m-1 font-bold p-1 border-4  border-black"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {" "}
          Last page
          {">>"}
        </button>
        <label className="bg-red-200  m-1 font-bold p-1 border-4 border-black">
          {" "}
          SHOW:
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </label>
      </div >
      
    );
}
export default BasicTable;