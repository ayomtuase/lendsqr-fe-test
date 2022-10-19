import { ReactComponent as NumberOfUsersIcon } from "../../assets/number-of-users.svg";
import { ReactComponent as ActiveUsersIcon } from "../../assets/active-users.svg";
import { ReactComponent as UsersWithLoansIcon } from "../../assets/users-with-loans.svg";
import { ReactComponent as UsersWithSavingsIcon } from "../../assets/users-with-savings.svg";
import { ReactComponent as FilterIcon } from "../../assets/filter.svg";
import { ReactComponent as ThreeDotsIcon } from "../../assets/three-dots.svg";
import { ReactComponent as ChevronDownLineIcon } from "../../assets/chevron-down-line.svg";
import { ReactComponent as ViewDetailsIcon } from "../../assets/eye.svg";
import { ReactComponent as BlacklistUserIcon } from "../../assets/blacklist.svg";
import { ReactComponent as ActivateUserIcon } from "../../assets/activate-user.svg";
import { apiClient } from "../../utils/api";
import { Popover, Transition, Listbox, Menu } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { UserDetail } from "../../types/user";
import { formatDate } from "../../utils/formatDate";
import Pagination from "../../components/Pagination";

const pageSizes = [10, 25, 50, 75, 100];

const Users = () => {
  const [pageSize, setPageSize] = useState(pageSizes[0]);

  const [numberOfPages, setNumberOfPages] = useState<number>();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    isLoading,
    isError,
    data: users,
  } = useQuery(
    ["users"],
    () =>
      apiClient.get("/users").then((res) => {
        return res?.data;
      }),
    {
      onSuccess: (data) => setNumberOfPages(Math.ceil(data.length / pageSize)),
    }
  );

  const changeNumberOfRowsPerPage = (noOfRows: number) => {
    setPageSize(noOfRows);
    setNumberOfPages(users.length / noOfRows);
  };

  const navigate = useNavigate();

  const paginator = [];

  if (numberOfPages !== undefined) {
    console.log("number of Pages is", numberOfPages);
    for (let i = 1; i < numberOfPages; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      paginator.push(<span key={i}>{i}</span>);
    }
  }

  return (
    <>
      <h2 className="page-title">Users</h2>
      <div className="users-info">
        {[
          { icon: <NumberOfUsersIcon />, title: "USERS", data: "2,453" },
          { icon: <ActiveUsersIcon />, title: "ACTIVE USERS", data: "2,453" },
          {
            icon: <UsersWithLoansIcon />,
            title: "USERS WITH LOANS",
            data: "12,453",
          },
          {
            icon: <UsersWithSavingsIcon />,
            title: "USERS WITH SAVINGS",
            data: "102,453",
          },
        ].map((item) => (
          <div key={item.title} className="users-info__single-info">
            {item.icon}
            <p>{item.title}</p>
            <p>{item.data}</p>
          </div>
        ))}
      </div>

      <div className="table-container">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <h2 className="error-text">
            Unable to fetch data now, please check your network connection or
            try again later
          </h2>
        ) : (
          <table>
            <thead>
              <tr>
                {[
                  "ORGANIZATION",
                  "USERNAME",
                  "EMAIL",
                  "PHONE NUMBER",
                  "DATE JOINED",
                  "STATUS",
                ].map((heading) => (
                  <th className="table-heading" key={heading}>
                    <Popover style={{ position: "relative" }}>
                      {() => (
                        <>
                          <Popover.Button as="span">
                            <span>{heading}</span>
                            <FilterIcon />
                          </Popover.Button>
                          <Transition as={Fragment}>
                            <Popover.Panel className="popover-panel">
                              <div className="filter-container">
                                <form>
                                  <label
                                    htmlFor="organization"
                                    className="form-label"
                                  >
                                    Organization
                                  </label>
                                  <Listbox value={""} onChange={() => {}}>
                                    <Listbox.Button className="form-control select-button">
                                      <span>Select</span>
                                      <ChevronDownLineIcon fillOpacity="0.2" />
                                    </Listbox.Button>
                                  </Listbox>

                                  <label
                                    htmlFor="userName"
                                    className="form-label"
                                  >
                                    Username
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="User"
                                  />

                                  <label htmlFor="email" className="form-label">
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                  />

                                  <label htmlFor="date" className="form-label">
                                    Date
                                  </label>
                                  <input
                                    type="text"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    className="form-control"
                                    placeholder="Date"
                                  />

                                  <label
                                    htmlFor="phoneNumber"
                                    className="form-label"
                                  >
                                    Phone Number
                                  </label>
                                  <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                  />

                                  <label
                                    htmlFor="status"
                                    className="form-label"
                                  >
                                    Status
                                  </label>
                                  <Listbox value={""} onChange={() => {}}>
                                    <Listbox.Button className="form-control select-button">
                                      <span>Select</span>
                                      <ChevronDownLineIcon fillOpacity="0.2" />
                                    </Listbox.Button>
                                  </Listbox>

                                  <div className="button-group">
                                    <button>Reset</button>
                                    <button>Filter</button>
                                  </div>
                                </form>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>{" "}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users
                ?.slice(
                  pageSize * (currentPage - 1),
                  pageSize * currentPage + pageSize
                )
                ?.map((user: UserDetail) => (
                  <tr
                    key={user?.id}
                    onClick={() => navigate(`/dashboard/users/${user?.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <td
                      className="table-data"
                      style={{ textTransform: "capitalize" }}
                    >
                      {user?.orgName}
                    </td>
                    <td className="table-data">{user?.userName}</td>
                    <td className="table-data">{user?.email}</td>
                    <td className="table-data">{user?.profile?.phoneNumber}</td>
                    <td className="table-data">
                      {formatDate(user?.createdAt)}
                    </td>
                    <td className="table-data">
                      <span className="table-data__status__active">
                        {"Active"}{" "}
                      </span>
                    </td>
                    <td
                      className="table-data"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <>
                        <Menu as="div" style={{ position: "relative" }}>
                          <Menu.Button as="span" className="">
                            <ThreeDotsIcon className="" aria-hidden="true" />
                          </Menu.Button>

                          <Transition as={Fragment}>
                            <div>
                              <Menu.Items
                                as="div"
                                className="dropdown-container"
                              >
                                <>
                                  <Menu.Item>
                                    <button
                                      className="dropdown-button"
                                      onClick={() =>
                                        navigate(`/dashboard/users/${user?.id}`)
                                      }
                                    >
                                      <ViewDetailsIcon />
                                      <span>View Details</span>
                                    </button>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <button className="dropdown-button">
                                      <BlacklistUserIcon />
                                      <span>Blacklist User</span>
                                    </button>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <button className="dropdown-button">
                                      <ActivateUserIcon />
                                      <span>Activate User</span>
                                    </button>
                                  </Menu.Item>
                                </>
                              </Menu.Items>
                            </div>
                          </Transition>
                        </Menu>
                      </>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="pagination-container">
        <span>
          Showing{" "}
          <Listbox value={pageSize} onChange={changeNumberOfRowsPerPage}>
            <div className="per-page-picker-container">
              <Listbox.Button className="per-page-picker-button">
                <span className="">{pageSize}</span>
                <ChevronDownLineIcon />
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="per-page-options">
                  {pageSizes.map((perPage) => (
                    <Listbox.Option key={perPage} className="" value={perPage}>
                      {() => (
                        <>
                          <span className="">{perPage}</span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>{" "}
          out of 100
        </span>

        <Pagination
          onPageChange={setCurrentPage}
          totalCount={users?.length}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </>
  );
};

export default Users;
