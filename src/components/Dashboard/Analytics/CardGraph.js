import React from "react";
import Chart from "react-apexcharts";

const CardGraph = ({
  title,
  subtitle,
  value,
  icon,
  chartOptions,
  className,
  iconColor,
}) => {
  return (
    <div className={`col-sm-6 col-lg-3`}>
      <div className={`card ${className} equal-card`}>
        <div className="card-body p-0">
          <div className="analytice-card p-4 position-relative">
            <span
              className={`bg-${iconColor} h-35 w-35 d-flex-center b-r-50 position-absolute`}
            >
              <i className={icon}></i>
            </span>
            <div className="flex-grow-1 ms-5">
              <h5 className={`header-heading text-${iconColor}`}>{title}</h5>
              <p className="text-secondary mb-0">{subtitle}</p>
            </div>
            <div>
              <h4 className="header-heading">{value}</h4>
            </div>
          </div>
          <div>
            <div style={{ minHeight: "150px" }}>
              <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="area"
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGraph;
