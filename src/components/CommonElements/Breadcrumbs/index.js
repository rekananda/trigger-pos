import React from "react";

const Breadcrumbs = ({ title, mainTitle, path, icon }) => {
  return (
    <div className="row m-1">
      <div className="col-12">
        <h4 className="main-title">{mainTitle}</h4>
        <ul className="app-line-breadcrumbs mb-3">
          <li>
            <a href="#" className="f-s-14 f-w-500">
              <span>
                {icon}
                {title}
              </span>
            </a>
          </li>
          {path.map((item, index) => (
            <li key={index} className={index === path.length - 1 ? "active" : ""}>
              {index === path.length - 1 ? (
                <a href="#">{item}</a>
              ) : (
                <span>{item}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
