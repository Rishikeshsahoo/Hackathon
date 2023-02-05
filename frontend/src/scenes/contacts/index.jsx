
import React from "react";
import { usePagination, useTable } from "react-table";

export default function AudienceTable() {
  const data = React.useMemo(
    () => [
      {
        sno: 1,
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 2,
        avatar: "https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 3,
        avatar: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 4,
        avatar:
          "https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 1,
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 2,
        avatar: "https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 3,
        avatar: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 4,
        avatar:
          "https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 1,
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 2,
        avatar: "https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 3,
        avatar: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 4,
        avatar:
          "https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 1,
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 2,
        avatar: "https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 3,
        avatar: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 4,
        avatar:
          "https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 1,
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 2,
        avatar: "https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 3,
        avatar: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
      {
        sno: 4,
        avatar:
          "https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png",
        name: "World",
        age: 2,
        number: 33343544,
        role: "superadmin",
        status: false,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "sno", // accessor is the "key" in the data
      },
      {
        Header: "Avatar",
        accessor: "avatar",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Number",
        accessor: "number",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 1 },
    },
    usePagination
  );
  const onStatusChange = (idx) => {
    data[idx].status = !data[idx].status;
    console.log(data);
  };

  const actionDropdown = (
    <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
      <ul>
        <li>
          <a
            href="#"
            class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mt-px h-4.5 w-4.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span> New User</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mt-px h-4.5 w-4.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Export Users</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mt-px h-4.5 w-4.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Setting</span>
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="card mt-3">
      <table
        className="is-hoverable w-full text-left rounded-tl-lg"
        {...getTableProps()}
      >
        <thead className="bg-slate-200 text-slate-800 dark:bg-navy-800 dark:text-navy-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index, array) => (
                <th
                  {...column.getHeaderProps()}
                  className={`${index === 0 ? "rounded-tl-lg" : ""} ${
                    index === array.length - 1 ? "rounded-tr-lg" : ""
                  } whitespace-nowrap px-4 py-3 font-semibold uppercase lg:px-5`}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, idx) => {
            prepareRow(row);
            console.log("row", row);
            return (
              <tr
                className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  if (cell.column.id == "name")
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  else if (cell.column.id == "status")
                    return (
                      <td
                        className="whitespace-nowrap px-4 py-3 sm:px-5"
                        {...cell.getCellProps()}
                      >
                        <label className="inline-flex items-center">
                          <input
                            className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                            type="checkbox"
                            onChange={() => onStatusChange(idx)}
                          />
                        </label>
                      </td>
                    );
                  else if (cell.column.id == "role")
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5"
                      >
                        <div className="badge rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light">
                          {cell.render("Cell")}
                        </div>
                      </td>
                    );
                  else if (cell.column.id == "avatar") {
                    console.log(cell.column.id, cell.value);
                    return (
                      <td
                        className="whitespace-nowrap px-4 py-3 sm:px-5"
                        {...cell.getCellProps()}
                      >
                        <div className="avatar flex h-10 w-10">
                          <img
                            className="mask is-squircle"
                            src={cell.value}
                            alt="avatar"
                          />
                        </div>
                      </td>
                    );
                  } else if (cell.column.id == "action") {
                    console.log(cell.column.id, cell.value);
                    return (
                      <td
                        className="whitespace-nowrap px-4 py-3 sm:px-5"
                        {...cell.getCellProps()}
                      >
                      Madhav
                      </td>
                    );
                  }
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="whitespace-nowrap px-4 py-3 sm:px-5"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div class="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
        <div class="flex items-center space-x-2 text-xs+">
          <span>Show</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="form-select rounded-full border border-slate-300 bg-white px-2 py-1 pr-6 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent text-xs+"
          >
            {[5, 10, 15, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>
        <div class="flex items-center space-x-2 text-xs+">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <div className="rounded-r-lg bg-slate-150 dark:bg-navy-500 h-8 w-8 flex h-8 w-16 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
              Prev
            </div>
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <div className="rounded-r-lg bg-slate-150 dark:bg-navy-500 h-8 w-8 flex h-8 w-16 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
              Next
            </div>
          </button>{" "}
          <span>
            Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              className="form-input h-8 w-36 rounded-lg border border-slate-300 bg-transparent px-4 py-2 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            />
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
