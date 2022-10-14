import { ReactComponent as NumberOfUsersIcon } from "../../assets/number-of-users.svg";
import { ReactComponent as ActiveUsersIcon } from "../../assets/active-users.svg";
import { ReactComponent as UsersWithLoansIcon } from "../../assets/users-with-loans.svg";
import { ReactComponent as UsersWithSavingsIcon } from "../../assets/users-with-savings.svg";
import { ReactComponent as FilterIcon } from "../../assets/filter.svg";
import { ReactComponent as ThreeDotsIcon } from "../../assets/three-dots.svg";

const Users = () => {
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
            data: "2,453",
          },
          {
            icon: <UsersWithSavingsIcon />,
            title: "USERS WITH SAVINGS",
            data: "2,453",
          },
        ].map((item) => (
          <div className="users-info__single-info">
            {item.icon}
            <p>{item.title}</p>
            <p>{item.data}</p>
          </div>
        ))}
      </div>
      <div className="table-container">
        <table>
          <tr>
            {[
              "ORGANIZATION",
              "USERNAME",
              "EMAIL",
              "PHONE NUMBER",
              "DATE JOINED",
              "STATUS",
            ].map((heading) => (
              <th className="table-heading">
                <span>{heading}</span> <FilterIcon />
              </th>
            ))}
          </tr>
          {[
            {
              organization: "Lendsqr",
              username: "Adediji",
              email: "adedeji@lendsqr.com",
              phoneNumber: "08078903721",
              dateJoined: "May 15, 2020 10:00 AM",
              status: "active",
            },
            {
              organization: "Lendsqr",
              username: "Adediji",
              email: "adedeji@lendsqr.com",
              phoneNumber: "08078903721",
              dateJoined: "May 15, 2020 10:00 AM",
              status: "active",
            },
            {
              organization: "Lendsqr",
              username: "Adediji",
              email: "adedeji@lendsqr.com",
              phoneNumber: "08078903721",
              dateJoined: "May 15, 2020 10:00 AM",
              status: "active",
            },
            {
              organization: "Lendsqr",
              username: "Adediji",
              email: "adedeji@lendsqr.com",
              phoneNumber: "08078903721",
              dateJoined: "May 15, 2020 10:00 AM",
              status: "active",
            },
            {
              organization: "Lendsqr",
              username: "Adediji",
              email: "adedeji@lendsqr.com",
              phoneNumber: "08078903721",
              dateJoined: "May 15, 2020 10:00 AM",
              status: "active",
            },
            {
              organization: "Lendsqr",
              username: "Adediji",
              email: "adedeji@lendsqr.com",
              phoneNumber: "08078903721",
              dateJoined: "May 15, 2020 10:00 AM",
              status: "active",
            },
            {
              organization: "Lendsqr",
              username: "Adediji",
              email: "adedeji@lendsqr.com",
              phoneNumber: "08078903721",
              dateJoined: "May 15, 2020 10:00 AM",
              status: "active",
            },
            {
              organization: "Lendsqr",
              username: "Adediji",
              email: "adedeji@lendsqr.com",
              phoneNumber: "08078903721",
              dateJoined: "May 15, 2020 10:00 AM",
              status: "active",
            },
          ].map((row) => (
            <tr>
              <td className="table-data">{row.organization}</td>
              <td className="table-data">{row.username}</td>
              <td className="table-data">{row.email}</td>
              <td className="table-data">{row.phoneNumber}</td>
              <td className="table-data">{row.dateJoined}</td>
              <td className="table-data">
                <span className="table-data__status__active">{row.status} </span>
              </td>
              <td className="table-data">
                <ThreeDotsIcon />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Users;
