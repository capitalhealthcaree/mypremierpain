import Head from "next/head";
import React from "react";
import { Banner } from "@/components/CommonBanner/Banner";
import { CommonFormsSections } from "@/components/CommonForms&Sections";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Link from "next/link";

export const PatientForms = () => {
  return (
    <>
      <Head>
        <title>Patient Forms | Premier Pain Centers</title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Patient Forms. For quality pain management services from a friendly and caring team, call Premier Pain Centers today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta
          property="og:title"
          content="Patient Forms | Premier Pain Centers"
        />
        <meta
          property="og:description"
          content="Patient Forms. For quality pain management services from a friendly and caring team, call Premier Pain Centers today."
        />
      </Head>

      <Header />
      <Banner
        bg="/assets/sub-banners/exercising-banner.jpg"
        title="PATIENT FORMS"
      />

      <section
        className="two-column-layout light-bg col-66-33 vertical-padding items-spaced flow-reverse"
        id="TwoColumnLayout"
      >
        <div className="main flex-spaced-between-block-1024-margined item-spacing item-widths flex-direction">
          <div className="content-zone" id="ContentZone">
            <div
              className="column-layout-content transparent-bg bg-box-none light-bg"
              id="ColumnLayoutContent"
              data-onvisible="show"
            >
              <div className="bg-box side-padding-medium vertical-padding-small box-flair border-radius">
                <div className="flair-border" data-content="true">
                  <span className="flair-1"></span>
                  <span className="flair-2"></span>
                  <div
                    className="content-style"
                    id="MainContent"
                    data-content="true"
                  >
                    <h1>Premier Pain Patient Forms</h1>
                    <h2>Get A Head Start For Your Next Visit</h2>
                    <ul>
                      <li>
                        <Link
                          rel="noreferrer"
                          href="https://intakeq.com/new/baR6VL"
                        >
                          New Patient Paperwork for All Insurances
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noreferrer"
                          href="https://intakeq.com/new/baR6VL"
                        >
                          New Patient Paperwork for Personal Injury Patients
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noreferrer"
                          href="https://intakeq.com/c/1p3Uw2"
                        >
                          Consent Form
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noreferrer"
                          href="https://intakeq.com/c/WHaS9V"
                        >
                          Agreement of Financial Responsibility
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noreferrer"
                          href="https://intakeq.com/c/4mK6ZG"
                        >
                          Authorization for the Use and Disclosure of Protected
                          Heath Information
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noreferrer"
                          href="https://intakeq.com/c/sDTFwr"
                        >
                          Notice of Privacy Practices
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-zone" id="SideZone">
            <aside
              className="side-nav v1 light-bg border-radius-item box-shadow el-tab-box"
              id="SideNavV1"
              data-onvisible="show"
              data-slider="true"
              data-closing="false"
            >
              <nav>
                <header className="text-left">
                  <Link href="../about/">
                    <h5>About</h5>
                  </Link>
                </header>
                <ul className="" data-role="panel">
                  <li className="level-1  ">
                    <Link className="auto" href="../meet-our-team/" target="">
                      Our Providers
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link className="auto" href="../about/careers/" target="">
                      Careers
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link
                      className="auto"
                      href="../assets/Rao-Ali-AR-1.pdf"
                      rel="noreferrer"
                    >
                      Insurances Accepted
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <CommonFormsSections />
      <Footer />
    </>
  );
};

export default PatientForms;
