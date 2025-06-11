import React from "react";

const SelectedSkipSummary = ({
  selectedSkipData,
  calculateTotalPrice,
  getSkipImage,
}) => {
  if (!selectedSkipData) return null;

  return (
    <div className="selected-skip-summary">
      <p className="disclaimer">
        Imagery and information shown throughout this website may not reflect
        the exact shape or size specification, colours may vary, options and/or
        accessories may be featured at additional cost.
      </p>
      <h3 className="">{selectedSkipData.size} Yard Skip</h3>
      <p>
        <span className="detail-label">Total Price:</span>{" "}
        {calculateTotalPrice(
          selectedSkipData.price_before_vat,
          selectedSkipData.vat
        )}
      </p>
      <p>
        <span className="detail-label">Hire Period:</span>{" "}
        {selectedSkipData.hire_period_days} days
      </p>
      <div className="navigation-bar">
        <button>Back</button>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default SelectedSkipSummary;
