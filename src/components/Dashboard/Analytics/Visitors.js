import { visitorsData } from "@/Data/Analytics/Card";

const Visitors = () => {
  return (
    <>
      <div className="col-lg-8 visitors">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between">
              <h5>Source Visitors Report</h5>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="app-scroll table-responsive">
              <table className="table table-bottom-border visitors-table align-middle mb-0">
                <thead>
                  <tr>
                    <th>
                      <label className="check-box">
                        <input type="checkbox" id="select-all" />
                        <span className="checkmark outline-dark ms-2"></span>
                      </label>
                    </th>
                    <th className="col" scope="col">
                      Visitor Name
                    </th>
                    <th className="col" scope="col">
                      ID
                    </th>
                    <th scope="col">User</th>
                    <th>Check-In</th>
                    <th>Check-Out</th>
                    <th scope="col">Rate</th>
                    <th className="col" scope="col">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visitorsData.map((visitor, index) => (
                    <tr key={index}>
                      <td>
                        <label className="check-box">
                          <input type="checkbox" />
                          <span className="checkmark outline-dark ms-2"></span>
                        </label>
                      </td>
                      <td>
                        <p className="f-w-500 text-start mb-0">
                          {visitor.name}
                        </p>
                      </td>
                      <td className="text-primary f-w-500">{visitor.id}</td>
                      <td>
                        <ul className="avatar-group justify-content-center">
                          {visitor.avatars.map((avatar, idx) => (
                            <li
                              key={idx}
                              className={`h-30 w-30 d-flex-center b-r-50 overflow-hidden ${avatar.bgColor}`}
                              data-bs-toggle="tooltip"
                              data-bs-title={avatar.tooltip}
                            >
                              <img
                                src={avatar.src}
                                alt=""
                                className="img-fluid"
                              />
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <span className="badge bg-light-success">
                          {visitor.checkInTime}
                        </span>
                      </td>
                      <td>
                        <span className="badge bg-light-danger">
                          {visitor.checkOutTime}
                        </span>
                      </td>
                      <td className="f-w-600">{visitor.rate}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-6"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        {" "}
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-6"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer visitors-table-footer">
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-secondary mb-0">
                Showing 1 to 6 of 24 order entries
              </p>
              <ul className="pagination app-pagination">
                <li className="page-item bg-light-secondar disabled">
                  <a className="page-link b-r-left">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-primary" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visitors;
