import axios from "axios";
import React, { useState } from "react";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";

const CSR_ENDPOINT = process.env.NEXT_PUBLIC_URL;

export const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [patientType, setPatientType] = useState("");
  const [message, setMessage] = useState("");

  const HandleForm = async (e) => {
    e.preventDefault();

    let data = {
      firstName,
      lastName,
      phone,
      email,
      patientType,
      message,
    };

    const appointment = await axios.post(
      CSR_ENDPOINT + "appointment/create/",
      data
    );
    if (appointment.status === 200) {
      toast("Thanks for contacting us");
      setTimeout(() => {
        Router.push("/thank-you");
      }, 2000);
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className="panel-group v1 relative no-padding dark-bg bg-image"
        id="PanelGroupV8"
      >
        <picture className="img-bg bg-position" data-role="picture">
          <source
            media="(max-width: 500px)"
            srcSet="/assets/panel-groups/panel-group-v8-bg-mobile.jpg"
            data-src="/assets/panel-groups/panel-group-v8-bg-mobile.jpg"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/panel-groups/panel-group-v8-bg-tablet.jpg"
            data-src="/assets/panel-groups/panel-group-v8-bg-tablet.jpg"
          />
          <Image
            width="2000"
            height="2000"
            src="/assets/panel-groups/panel-group-v8-bg.jpg"
            alt=""
            data-src="/assets/panel-groups/panel-group-v8-bg.jpg"
          />
        </picture>
        <div className="box" id="PanelGroupV8Zone">
          <form id="Form_ContactV1" onSubmit={HandleForm}>
            <input type="hidden" name="_m_" value="ContactV1" />
            <section
              className="contact v1 dark-bg bg-box-none text-center"
              id="ContactV1"
              data-onvisible="show"
            >
              {/* <Link name="contactAnchor"></Link> */}
              <div className="main">
                <div className="bg-box border-radius side-padding vertical-padding-small box-flair">
                  <div className="flair-border">
                    <span className="flair-1"></span>
                    <span className="flair-2"></span>
                    <header
                      className="text-align center-800"
                      id="ContactV1Header"
                    >
                      <h4>SCHEDULE AN APPOINTMENT</h4>
                      <strong>The Next Steps to Living Pain Free</strong>
                    </header>
                    <div id="ContactV1Form" className="ui-repeater">
                      <fieldset data-item="i" data-key="">
                        <ul className="flex-spaced-between-wrap-block-500">
                          <li className="half">
                            <div className="input-text">
                              <input
                                required="required"
                                type="text"
                                id="ContactV1Form_ITM0_FirstName"
                                className="ui-cms-input"
                                name="ContactV1Form$ITM0$FirstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                              />

                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_FirstName"
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
                                id="ContactV1Form_ITM0_LastName"
                                className="ui-cms-input"
                                name="ContactV1Form$ITM0$LastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"
                              />

                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_LastName"
                                data-type="valueMissing"
                              >
                                Please enter your last name.
                              </div>
                            </div>
                          </li>
                          <li className="half">
                            <div className="input-text">
                              <input
                                id="ContactV1Form_ITM0_Phone"
                                type="tel"
                                className="phone-mask ui-cms-input"
                                required="required"
                                name="ContactV1Form$ITM0$Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone"
                              />

                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_Phone"
                                data-type="valueMissing"
                              >
                                Please enter your phone number.
                              </div>
                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_Phone"
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
                                id="ContactV1Form_ITM0_EmailAddress"
                                className="ui-cms-input"
                                name="ContactV1Form$ITM0$EmailAddress"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                              />

                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_EmailAddress"
                                data-type="valueMissing"
                              >
                                Please enter your email address.
                              </div>
                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_EmailAddress"
                                data-type="typeMismatch"
                              >
                                This isn't a valid email address.
                              </div>
                            </div>
                          </li>
                          <li className="select">
                            <div className="input-text">
                              <select
                                id="ContactV1Form_ITM0_LeadTypeID"
                                required="required"
                                className="ui-cms-select ui-cms-input"
                                name="ContactV1Form$ITM0$LeadTypeID"
                                value={patientType}
                                onChange={(e) => setPatientType(e.target.value)}
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
                                <option value="I'm neither.">
                                  I'm neither.
                                </option>
                              </select>

                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_LeadTypeID"
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
                                id="ContactV1Form_ITM0_Message"
                                className="ui-cms-input"
                                name="ContactV1Form$ITM0$Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Message"
                              ></textarea>

                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_Message"
                                data-type="valueMissing"
                              >
                                Please enter a message.
                              </div>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                      <input
                        id="ContactV1Form_ITM0_FFD6"
                        type="hidden"
                        className="ui-cms-input"
                        name="ContactV1Form$ITM0$FFD6"
                        value
                        data-item="i"
                        data-key=""
                      />
                      <div
                        className="top-margin-tiny text-align"
                        data-item="i"
                        data-key=""
                      >
                        <button
                          className="btn v1"
                          aria-labelledby="ContactV1Header"
                          type="submit"
                          id="ContactV1Form_ITM0_ctl08"
                          name="ContactV1Form$ITM0$ctl08"
                          data-commandname="Update"
                        >
                          Send Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </section>
    </>
  );
};
