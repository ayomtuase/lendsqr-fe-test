import { ReactComponent as BackIcon } from "../../assets/back.svg";
import { ReactComponent as AvatarIcon } from "../../assets/info-avatar.svg";
import { ReactComponent as TierStarsIcon } from "../../assets/tier-stars.svg";
import { useNavigate } from "react-router-dom";

const SingleUser = () => {
  const navigate = useNavigate();
  return (
    <div className="single-user">
      <span className="single-user__back" onClick={() => navigate(-1)}>
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

      <div className="single-user__basic-info">
        <div className="single-user__basic-info__info">
          <AvatarIcon />
          <div className="single-user__basic-info__info__name">
            <p>Grace Effiom</p>
            <span>LSQFf587g90</span>
          </div>
          <div className="single-user__basic-info__info__tier">
            <span>User's Tier</span>
            <TierStarsIcon />
          </div>
          <div className="single-user__basic-info__info__account-info">
            <span>₦200,000.00</span>
            <span>9912345678/Providus Bank</span>
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
            <span>{tab}</span>
          ))}
        </div>
      </div>

      <div className="single-user__details-container">
        {[
          {
            groupTitle: "Personal Information",
            details: [
              { name: "full Name", data: "Grace Effiom" },
              { name: "Phone Number", data: "07060780922" },
              { name: "Email Address", data: "Email Address" },
              { name: "Bvn", data: "07060780922" },
              { name: "Gender", data: "Grace Effiom" },
              { name: "Marital status", data: "Single" },
              { name: "Children", data: "None" },
              { name: "type of Residence", data: "Parent's Apartment" },
            ],
          },
          {
            groupTitle: "Education and Employment",
            details: [
              { name: "level of education", data: "B.Sc" },
              { name: "employment status", data: "Employed" },
              { name: "sector of employment", data: "FinTech" },
              { name: "Duration of employment", data: "2 years" },
              { name: "office email", data: "grace@lendsqr.com" },
              { name: "Monthly income", data: "₦200,000.00- ₦400,000.00" },
              { name: "loan repayment", data: "None" },
            ],
          },
          {
            groupTitle: "Socials",
            details: [
              { name: "Twitter", data: "@grace_effiom" },
              { name: "Facebook", data: "Grace Effiom" },
              { name: "Instagram", data: "@grace_effiom" },
            ],
          },
          {
            groupTitle: "Guarantor",
            details: [
              { name: "full Name", data: "Debby Ogana" },
              { name: "Phone Number", data: "07060780922" },
              { name: "Email Address", data: "debby@gmail.com" },
              { name: "Relationship", data: "Sister" },
            ],
          },
        ].map((group, index) => (
          <>
            <h2 className="single-user__details__title">{group.groupTitle}</h2>
            <div
              className="single-user__details__group"
              style={{
                gridTemplateColumns: index === 1 ? "repeat(4, 1fr)" : "",
              }}
            >
              {group.details.map((detail) => (
                <div>
                  <span>{detail.name}</span>
                  <span>{detail.data}</span>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SingleUser;
