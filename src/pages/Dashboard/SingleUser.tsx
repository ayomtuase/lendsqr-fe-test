import { ReactComponent as BackIcon } from "../../assets/back.svg";
import AvatarIcon from "../../assets/info-avatar.svg";
import { ReactComponent as TierStarsIcon } from "../../assets/tier-stars.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { apiClient } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { UserDetail } from "../../types/user";
import formatCurrency from "../../utils/formatCurrency";
import Loader from "../../components/Loader";

const SingleUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userDetail, setUserDetail] = useState<UserDetail>();

  const { isLoading, isError, isFetching } = useQuery(
    ["users", id],
    () =>
      apiClient.get(`/users/${id}`).then((res) => {
        return res?.data;
      }),
    {
      enabled: !localStorage.hasOwnProperty(`user_detail_${id}`),
      onSuccess: (data) => {
        localStorage.setItem(`user_detail_${id}`, JSON.stringify(data));
        setUserDetail(
          JSON.parse(localStorage.getItem(`user_detail_${id}`) ?? "{}")
        );
      },
    }
  );

  useEffect(() => {
    setUserDetail(
      JSON.parse(localStorage.getItem(`user_detail_${id}`) || "{}")
    );
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="single-user">
      <span className="single-user__back" onClick={() => navigate("/dashboard")}>
        <BackIcon />
        <span>Back to Users</span>
      </span>
      <div className="single-user__page-title-container">
        <h2 className="single-user__page-title-container__title">
          Users Details
        </h2>
        <button className="single-user__page-title-container__blacklist">
          BLACKLIST USER
        </button>
        <button className="single-user__page-title-container__activate">
          ACTIVATE USER
        </button>
      </div>

      {isLoading && isFetching ? (
        <Loader />
      ) : isError ? (
        <h2 className="error-text">
          Unable to fetch data now, please check your network connection or try
          again later
        </h2>
      ) : userDetail === undefined || Object.keys(userDetail).length === 0 ? (
        <h2 className="error-text">
          Unable to fetch data now, please check your network connection or try
          again later
        </h2>
      ) : (
        <div className="single-user__basic-info">
          <div className="single-user__basic-info__info">
            <img
              src={userDetail?.profile?.avatar}
              alt=""
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = AvatarIcon;
              }}
            />
            <div className="single-user__basic-info__info__name">
              <p>
                {userDetail?.profile?.firstName} {userDetail?.profile?.lastName}
              </p>
              <span>LSQFf587g90</span>
            </div>
            <div className="single-user__basic-info__info__tier">
              <span>User's Tier</span>
              <TierStarsIcon />
            </div>
            <div className="single-user__basic-info__info__account-info">
              <span>{formatCurrency(userDetail?.accountBalance)}</span>
              <span>
                {userDetail?.accountNumber}/{"Providus Bank"}
              </span>
            </div>
          </div>
          <div className="single-user__basic-info__tabs">
            <span className="highlight">General Details</span>
            {[
              "Documents",
              "Bank Details",
              "Loans",
              "Savings",
              "App and System",
            ].map((tab) => (
              <span key={tab}>{tab}</span>
            ))}
          </div>
        </div>
      )}

      {isLoading && isFetching ? (
        <Loader />
      ) : isError ? (
        <h2 className="error-text">
          Unable to fetch data now, please check your network connection or try
          again later
        </h2>
      ) : userDetail === undefined || Object.keys(userDetail).length === 0 ? (
        <h2 className="error-text">
          Unable to fetch data now, please check your network connection or try
          again later
        </h2>
      ) : (
        <div className="single-user__details-container">
          {[
            {
              groupTitle: "Personal Information",
              details: [
                {
                  name: "full Name",
                  data: `${userDetail?.profile?.firstName} ${userDetail?.profile?.lastName}`,
                },
                { name: "Phone Number", data: `${userDetail?.phoneNumber}` },
                { name: "Email Address", data: `${userDetail?.email}` },
                { name: "Bvn", data: `${userDetail?.profile?.bvn}` },
                { name: "Gender", data: `${userDetail?.profile?.gender}` },
                { name: "Marital status", data: `${userDetail?.phoneNumber}` },
                { name: "Children", data: "None" },
                { name: "type of Residence", data: "Parent's Apartment" },
              ],
            },
            {
              groupTitle: "Education and Employment",
              details: [
                {
                  name: "level of education",
                  data: `${userDetail?.education?.level}`,
                },
                {
                  name: "employment status",
                  data: `${userDetail?.education?.employmentStatus}`,
                },
                {
                  name: "sector of employment",
                  data: `${userDetail?.education?.sector}`,
                },
                {
                  name: "Duration of employment",
                  data: `${userDetail?.education?.duration}`,
                },
                {
                  name: "office email",
                  data: `${userDetail?.education?.officeEmail}`,
                },
                {
                  name: "Monthly income",
                  data: `${formatCurrency(
                    userDetail?.education?.monthlyIncome[1]
                  )} - ${formatCurrency(
                    userDetail?.education?.monthlyIncome[0]
                  )}`,
                },
                {
                  name: "loan repayment",
                  data: `${formatCurrency(
                    userDetail?.education?.loanRepayment
                  )}`,
                },
              ],
            },
            {
              groupTitle: "Socials",
              details: [
                { name: "Twitter", data: `${userDetail?.socials?.twitter}` },
                { name: "Facebook", data: `${userDetail?.socials?.facebook}` },
                {
                  name: "Instagram",
                  data: `${userDetail?.socials?.instagram}`,
                },
              ],
            },
            {
              groupTitle: "Guarantor",
              details: [
                {
                  name: "full Name",
                  data: `${userDetail?.guarantor?.firstName} ${userDetail?.guarantor?.lastName}`,
                },
                {
                  name: "Phone Number",
                  data: `${userDetail?.guarantor?.phoneNumber}`,
                },
                { name: "Email Address", data: "debby@gmail.com" },
                { name: "Relationship", data: "Sister" },
              ],
            },
          ]?.map((group) => (
            <div key={group?.groupTitle}>
              <h2 className="single-user__details__title">
                {group?.groupTitle}
              </h2>
              <div className="single-user__details__group">
                {group?.details.map((detail) => (
                  <div key={detail?.name}>
                    <span>{detail?.name}</span>
                    <span>{detail?.data}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleUser;
