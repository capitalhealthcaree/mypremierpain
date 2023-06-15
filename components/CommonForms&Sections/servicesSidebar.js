import Link from "next/link";
import React from "react";
import { ServicesSidebarLinks } from "../ServicesSidebarLinks";

export const servicesSidebar = () => {
  return (
    <>
      <div className="side-zone" id="SideZone">
        <form
          id="Form_ContactV6"
          method="post"
          encType="multipart/form-data"
          action="https://www.mypremierpain.com/thanks/"
        >
          <input type="hidden" name="_m_" value="ContactV1" />
          <div
            style={{ border: "1px solid #286db0", padding: "25px 10px" }}
            id="ContactV6Form"
            className="ui-repeater"
          >
            <header className="text-align center-800" id="ContactV1Header">
              <h4 style={{ fontSize: "30px", textAlign: "center" }}>
                SCHEDULE AN APPOINTMENTsss
              </h4>
            </header>
            <fieldset data-item="i" data-key="">
              <ul className="flex-spaced-between-wrap-block-500">
                <li className="half">
                  <div className="input-text">
                    <input
                      required="required"
                      type="text"
                      id="first_name"
                      className="ui-cms-input"
                      name="first_name"
                      placeholder="First Name"
                    />

                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_FirstName"
                      data-type="valueMissing"
                    >
                      Please enter your first name.
                    </div>
                  </div>
                </li>
                <li className="half">
                  <div className="input-text">
                    <input
                      required="required"
                      type="text"
                      id="last_name"
                      className="ui-cms-input"
                      name="last_name"
                      placeholder="Last Name"
                    />

                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_LastName"
                      data-type="valueMissing"
                    >
                      Please enter your last name.
                    </div>
                  </div>
                </li>
                <li className="half">
                  <div className="input-text">
                    <input
                      id="phone_number"
                      type="tel"
                      className="phone-mask ui-cms-input"
                      required="required"
                      name="phone_number"
                      placeholder="Phone"
                    />

                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_Phone"
                      data-type="valueMissing"
                    >
                      Please enter your phone number.
                    </div>
                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_Phone"
                      data-type="typeMismatch"
                    >
                      This isn't a valid phone number.
                    </div>
                  </div>
                </li>
                <li className="half">
                  <div className="input-text">
                    <input
                      required="required"
                      type="email"
                      id="email"
                      className="ui-cms-input"
                      name="email"
                      placeholder="Email"
                    />

                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_EmailAddress"
                      data-type="valueMissing"
                    >
                      Please enter your email address.
                    </div>
                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_EmailAddress"
                      data-type="typeMismatch"
                    >
                      This isn't a valid email address.
                    </div>
                  </div>
                </li>
                <li className="select">
                  <div className="input-text">
                    <select
                      id="patient_type"
                      required="required"
                      className="ui-cms-select ui-cms-input"
                      name="patient_type"
                    >
                      <option value="" disabled>
                        {" "}
                        Are you a new patient?
                      </option>
                      <option value="Yes, I am a potential new patient">
                        Yes, I am a potential new patient
                      </option>
                      <option value="No, I'm a current existing patient">
                        No, I'm a current existing patient
                      </option>
                      <option value="I'm neither.">I'm neither.</option>
                    </select>

                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_LeadTypeID"
                      data-type="valueMissing"
                    >
                      Please make a selection.
                    </div>
                  </div>
                </li>
                <li className="message">
                  <div className="input-text">
                    <textarea
                      required="required"
                      type="text"
                      id="message"
                      className="ui-cms-input"
                      name="message"
                      placeholder="Message"
                    ></textarea>

                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_Message"
                      data-type="valueMissing"
                    >
                      Please enter a message.
                    </div>
                  </div>
                </li>
              </ul>
            </fieldset>
            <input
              id="ContactV6Form_ITM0_FFD6"
              type="hidden"
              className="ui-cms-input"
              name="ContactV6Form$ITM0$FFD6"
              value
              data-item="i"
              data-key=""
            />
            <div
              className="top-margin-tiny text-center"
              data-item="i"
              data-key=""
            >
              <button
                className="btn v1"
                aria-labelledby="ContactV6Header"
                type="submit"
                id="ContactV6Form_ITM0_ctl08"
                name="ContactV6Form$ITM0$ctl08"
                data-commandname="Update"
              >
                Send Information
              </button>
            </div>
          </div>
        </form>
        <ServicesSidebarLinks />
      </div>
    </>
  );
};

export default servicesSidebar;
