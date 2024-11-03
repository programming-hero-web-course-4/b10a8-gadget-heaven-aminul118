import Heading from "./Heading";

const Footer = () => {
    return (
      <div>
        <section className="container mx-auto">
          <Heading
            title={`Gadget Heaven`}
            subtitle={`Leading the way in cutting-edge technology and innovation.`}
          ></Heading>
          <div className="divider"></div>
          <footer className="footer flex justify-between px-2  py-10">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </footer>
        </section>
      </div>
    );
};

export default Footer;