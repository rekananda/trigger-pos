import Chart from "react-apexcharts";
import { chartOptions4, chartOptions5 } from "@/Data/Charts/ApexChart";
import {
  browserData,
  countriesReport,
  transactions,
} from "@/Data/Analytics/Card";

const Report = () => {
  return (
    <>
      <div className="col-md-5 col-lg-4">
        <div className="card equal-card">
          <div className="card-header">
            <h5>Countries Report</h5>
          </div>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="flex-shrink-0">
                <h3 className="f-w-600 text-success mb-0">68.09%</h3>
                <p className="text-secondary">
                    United States
                  <i className="fa-solid fa-arrow-circle-up fa-fw ms-1 text-success"></i>
                </p>
              </div>
              <div>
                <div id="sharesChart" style={{ minHeight: "90px" }}>
                  <Chart
                    options={chartOptions4}
                    series={chartOptions4.series}
                    type="line"
                    height={90}
                  />
                </div>
              </div>
            </div>
            <ul className="browser-source-list">
              {countriesReport.map((item, index) => (
                <li key={index} className="position-relative">
                  <span className="rounded-circle overflow-hidden position-absolute">
                    <i
                      className={`flag-icon flag-icon-${item.flag} flag-icon-squared b-r-50 f-s-32`}
                    ></i>
                  </span>
                  <div className="ms-5">
                    <h6 className="header-heading">{item.country}</h6>
                    <div className="progress h-10">
                      <div
                        className={`progress-bar progress-bar-striped bg-${item.color} h-20`}
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-7 col-lg-4 target-chart">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="m-0">Target Report</h5>
                <p className="text-secondary">Last 2H Update</p>
              </div>
              <div>
                <div className="btn-group dropdown-icon-none">
                  <button
                    className="btn btn-light-secondary icon-btn b-r-4 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots f-s-20"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Weekly
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Monthly
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Yearly
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="targetChart" className="targetChart"></div>
            <div id="targetChart" style={{ minHeight: "300px" }}>
              <Chart
                options={chartOptions5}
                series={chartOptions5.series}
                type="radialBar"
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="card">
          <div className="card-header">
            <h5>Browser Update</h5>
          </div>
          <div className="card-body">
            <ul className="browser-update-list">
              {browserData.map((browser, index) => (
                <li key={index}>
                  <div className="position-relative">
                    <span
                      className={`h-30 w-30 d-flex-center position-absolute`}
                    >
                      <img src={browser.imgPath} alt="logo" className="img-fluid" />
                    </span>
                    <div className="ms-5">
                      <h6 className="header-heading mb-0">{browser.name}</h6>
                      <p className="text-secondary mb-0">{browser.version}</p>
                    </div>
                  </div>
                  <div>
                    <p className={`mb-0 f-s-16 f-w-500 ${browser.changeColor}`}>
                      <i className={`ti ti-chevrons-${browser.changeType}`}></i>
                      {browser.change}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="card">
          <div className="card-header">
            <div className="transactions-list d-flex justify-content-between align-items-center">
              <h5>Transactions</h5>
              <p className="mb-0 text-secondary ellipsis-text">
                290 Transactions
              </p>
            </div>
          </div>
          <div className="card-body">
            <div>
              <table className="table align-middle transactions-list-table mb-0">
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>
                        <div className="position-relative">
                          <div
                            className={`h-40 w-40 d-flex-center b-r-50 overflow-hidden ${transaction.bgColor} position-absolute`}
                          >
                            <img
                              src={transaction.imgSrc}
                              alt={transaction.name}
                              className="img-fluid"
                            />
                          </div>
                          <div className="ms-5">
                            <h6 className="header-heading mb-0 ellipsis-text">
                              {transaction.name}
                            </h6>
                            <p className="text-secondary mb-0">
                              {transaction.method}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end text-secondary f-w-500">
                        {transaction.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
