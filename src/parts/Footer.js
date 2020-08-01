import React from "react";

import IconText from "./IconText";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beinners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="mailto:support@staycation.id">
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+6282233684317">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  <span>Staycation, Kemang, Jakarta</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
