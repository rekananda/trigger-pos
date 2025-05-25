import Link from "next/link";

const Footer = () => {
  return (
      <>
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9 col-12">
                <ul className="footer-text">
                  <li>
                    <p className="mb-0">Copyright © 2024 ra-admin. All rights reserved 💖</p>
                  </li>
                  <li><a href="#"> V1.0.0 </a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="footer-text text-end">
                  <li><Link href="mailto:teqlathemes@gmail.com."> Need Help <i className="ti ti-help"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
  );
};

export default Footer;
