import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="Cards">
    <div className="profile-card">
      {/* Header Section */}
      <div className="profile-header">
        <div className="profile-picture">CB</div>
        <div className="profile-info">
          <h3>Hannibal Smith</h3>
          <p> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19.4792C10.8652 19.4805 10.7335 19.4387 10.6242 19.36C10.3492 19.1858 3.89583 14.85 3.89583 9.57916C3.89583 7.69502 4.6443 5.88805 5.97659 4.55576C7.30888 3.22347 9.11585 2.475 11 2.475C12.8841 2.475 14.6911 3.22347 16.0234 4.55576C17.3557 5.88805 18.1042 7.69502 18.1042 9.57916C18.1042 14.85 11.6875 19.1858 11.3758 19.36C11.2664 19.4387 11.1348 19.4805 11 19.4792ZM11 3.89583C9.48697 3.89096 8.03384 4.48671 6.95968 5.55228C5.88551 6.61785 5.27811 8.06615 5.27083 9.57916C5.27083 13.4383 9.66166 16.9675 11 17.9483C12.3383 16.9675 16.7292 13.4383 16.7292 9.57916C16.7219 8.06615 16.1145 6.61785 15.0403 5.55228C13.9661 4.48671 12.513 3.89096 11 3.89583Z" fill="#676B89"/>
<path d="M11 11.6875C10.5014 11.6875 10.014 11.5397 9.59949 11.2627C9.18494 10.9857 8.86184 10.592 8.67104 10.1313C8.48025 9.67073 8.43033 9.16387 8.52759 8.67488C8.62486 8.18588 8.86495 7.73671 9.21749 7.38417C9.57004 7.03162 10.0192 6.79154 10.5082 6.69427C10.9972 6.597 11.5041 6.64692 11.9647 6.83772C12.4253 7.02852 12.819 7.35162 13.096 7.76617C13.373 8.18072 13.5208 8.66809 13.5208 9.16667C13.5208 9.83523 13.2552 10.4764 12.7825 10.9492C12.3097 11.4219 11.6686 11.6875 11 11.6875ZM11 8.02083C10.7734 8.02083 10.5518 8.08803 10.3634 8.21394C10.175 8.33985 10.0281 8.5188 9.94138 8.72817C9.85465 8.93755 9.83196 9.16794 9.87617 9.39021C9.92039 9.61248 10.0295 9.81664 10.1898 9.97689C10.35 10.1371 10.5542 10.2463 10.7764 10.2905C10.9987 10.3347 11.2291 10.312 11.4385 10.2253C11.6479 10.1386 11.8268 9.99169 11.9527 9.80326C12.0786 9.61483 12.1458 9.39329 12.1458 9.16667C12.1458 8.86277 12.0251 8.57133 11.8102 8.35644C11.5953 8.14155 11.3039 8.02083 11 8.02083Z" fill="#676B89"/>
</svg>1 Market Street San Francisco, CA 94105</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="section">
        <DetailItem label="Customer ID" value="12345" highlight />
        <DetailItem label="Email Address" value="rachel@sample.com" />
        <DetailItem label="Phone Number" value="8051298905" highlight />
        <button class="add-button">
    <span class="icon">+</span>
    <span class="text">Add</span>
</button>
      </div>

      <div className="section">
        <DetailItem label="Loyalty Tier" value="Silver" />
        <DetailItem label="Segment" value="Sleepy Customer" />
        <button class="add-button">
    <span class="icon">+</span>
    <span class="text">Add</span>
</button>
      </div>

      <div className="section">
        <DetailItem label="Lifetime Value" value="$1M" />
        <DetailItem label="Propensity to Purchase" value="75%" highlight />
        <button class="add-button">
    <span class="icon">+</span>
    <span class="text">Add</span>
</button>
      </div>

      <div className="section">
        <DetailItem label="Engagement Score" value="80%" highlight />
        <button class="add-button">
    <span class="icon">+</span>
    <span class="text">Add</span>
</button>
      </div>

      {/* Action Buttons */}
      <button className="assign-agent">Assign other Agent</button>
      <button className="add-widget">Add New Widget</button>
    </div>
    </div>
  )
}
 const DetailItem = ({ label, value, highlight }) => {
  return (
    <div className="detail-item">
      <span>{label}</span>
      <span className={highlight ? "highlight" : ""}>{value}</span>
    </div>
  );
};




export default Card;
