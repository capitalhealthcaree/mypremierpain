import { AppointmentForm } from "@/components/AppointmentForm";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RaoKAli = () => {
  return (
    <>
      <Head>
        <title>Rao K. Ali | Pain Management in Richardson</title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Rao K. Ali. Let us help you recover! Contact Premier Pain Centers to schedule an appointment for Richardson Pain Management. Book your consultation today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta property="og:title" content="Rao K. Ali | Premier Pain Centers" />
        <meta
          property="og:description"
          content="Rao K. Ali. For quality pain management services from a friendly and caring team, call Premier Pain Centers today."
        />
       
      </Head>

      <Header />

      <main id="MainZone">
        <form
          id="Form_StaffProfileV2"
          method="post"
          encType="multipart/form-data"
          action="https://www.mypremierpain.com/meet-our-team/rao-k-ali/"
        >
          <input type="hidden" name="_m_" value="StaffProfileV2" />
          <input
            type="hidden"
            className="ui-cms-input"
            id="StaffProfileV2__edit_"
            name="StaffProfileV2$_edit_"
          />
          <input
            type="hidden"
            className="ui-cms-input"
            id="StaffProfileV2__command_"
            name="StaffProfileV2$_command_"
          />
          <section
            style={{ zIndex: "0" }}
            className="staff-profile v1 light-bg bg-box-like vertical-top text-left el-tab-box ui-repeater ui-ajax"
            id="StaffProfileV2"
            data-showhide="true"
            data-onvisible="show"
            data-siblings="false"
            data-classname-name="open"
          >
            <div className="main" data-item="i" data-key="27955">
              <div className="flex-spaced-between-block-1024-margined flex-direction align-items">
                <div className="third">
                  <div className="center-800 aside">
                    <div className="img staff-img pad-height-100 bottom-margin-small border-radius-item">
                      <Image
                        layout="fill"
                        src="/cms/thumbnails/34/400x400/images/dr-ali.jpg"
                        alt="Rao Ali Photo"
                        title="Rao Ali Photo"
                        data-bg="/cms/thumbnails/34/400x400/images/dr-ali.jpg"
                      />
                    </div>

                    <div className="info">
                      <header className="no-pad text-left center-800">
                        <h1>Rao K. Ali</h1>

                        <strong>M.D.</strong>

                        {/* <svg className="header-flair">
                          <use href="../../includes/flair.svg#header"></use>
                        </svg> */}
                      </header>
                    </div>
                  </div>
                </div>
                <div className="two-thirds bg-box vertical-padding-small side-padding border-radius">
                  {/* <div className="tab-list pseudo-before">
                    <ul className="flex- ui-scroll">
                      <li
                        className="flex-middle el-tab fit active"
                        data-tab="Profile"
                      >
                        <span className="title-font pseudo-after">Profile</span>
                      </li>
                    </ul>
                  </div> */}
                  <div className="tab-panels">
                    <div
                      className="bio section el-panel top-margin active"
                      data-tab="Profile"
                    >
                      <div id="StaffProfileV2BioTitle">
                        <strong className="title-style-3 bottom-margin-tiny top-margin-small">
                          Bio
                        </strong>
                      </div>
                      <div className="content-style">
                        Dr. Rao Ali is a dual fellowship-trained, double
                        board-certified Physiatrist and Interventional Pain
                        Management physician who runs the state of art
                        interventional pain management practice for over eight
                        years. Dr. Ali Completed his medical school in 2000 and
                        General Surgery Internship in 2006, Physical Medicine
                        and Rehabilitation Residency in 2009 at the prestigious
                        Montefiore Medical Center NY, Interventional Spine
                        Fellowship in 2010, and Anesthesia-based Pain Medicine
                        Fellowship at Case Western University Hospitals in 2011.
                        He is an expert in interventional pain procedures
                        including Epidurals, Nerve Blocks, Radio-frequency
                        Ablation, Joint Injections, Kyphoplasty, Discectomy,
                        Spinal cord stimulator trial, and implantation and
                        Intrathecal pumps. He has presented over 20 posters and
                        publications nationally as well as internationally. He
                        has run CME programs and has trained physicians in
                        workshops nationally and internationally. He is past
                        president of Richland County Medical Society and is an
                        active member of ASIPP, NANS, and Texas Pain Society. He
                        is a sociopolitical activist. He loves traveling and
                        spending time with his family and friends.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>

        <AppointmentForm />
      </main>

      <Footer />
    </>
  );
};

export default RaoKAli;
