import { ReactComponent as NumberOfUsersIcon } from "../../assets/number-of-users.svg";
import { ReactComponent as ActiveUsersIcon } from "../../assets/active-users.svg";
import { ReactComponent as UsersWithLoansIcon } from "../../assets/users-with-loans.svg";
import { ReactComponent as UsersWithSavingsIcon } from "../../assets/users-with-savings.svg";
import { ReactComponent as FilterIcon } from "../../assets/filter.svg";
import { ReactComponent as ThreeDotsIcon } from "../../assets/three-dots.svg";
import { apiClient } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { UserDetail } from "../../types/user";

const Users = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: users,
  } = useQuery(["users"], () =>
    apiClient.get("/users").then((res) => {
      return res?.data;
    })
  );

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
                    <span>{heading}</span> <FilterIcon />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users?.map((user: UserDetail) => (
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
                    {new Date(user?.createdAt).toUTCString()}
                  </td>
                  <td className="table-data">
                    <span className="table-data__status__active">
                      {"Active"}{" "}
                    </span>
                  </td>
                  <td className="table-data">
                    <ThreeDotsIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Users;
