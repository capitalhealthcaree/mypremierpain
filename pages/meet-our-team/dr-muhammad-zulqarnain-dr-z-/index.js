import { AppointmentForm } from "@/components/AppointmentForm";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const DrMZulqarnain = () => {
  return (
    <>
      <Head>
        <title>
          Dr. Muhammad Zulqarnain (Dr. Z) | Pain Management in Richardson
        </title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Dr. Muhammad Zulqarnain (Dr. Z). Let us help you recover! Contact Premier Pain Centers to schedule an appointment for Richardson Pain Management. Book your consultation today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta property="og:url" content="index.html" />
        <meta
          property="og:title"
          content="Dr. Muhammad Zulqarnain (Dr. Z) | Premier Pain Centers"
        />
        <meta
          property="og:description"
          content="Dr. Muhammad Zulqarnain (Dr. Z). For quality pain management services from a friendly and caring team, call Premier Pain Centers today."
        />
        <meta property="og:image" content="/images/dr-muhammed.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dr. Muhammad Zulqarnain (Dr. Z) | Premier Pain Centers"
        />
        <meta
          name="twitter:description"
          content="Dr. Muhammad Zulqarnain (Dr. Z). For quality pain management services from a friendly and caring team, call Premier Pain Centers today."
        />
        <meta name="twitter:image" content="/images/dr-muhammed.jpg" />
        <meta name="robots" content="NOINDEX,NOFOLLOW" />
        <meta
          name="google-site-verification"
          content="4KXE6z1IMn1YlLvnFo__ua0TXs3xPbwTkDIQcIHwr54"
        />
        <meta name="msvalidate.01" content="C7CA6FF11309974175E72AAD2E356DF2" />
      </Head>

      <Header />

      <main id="MainZone">
        <form
          id="Form_StaffProfileV2"
          method="post"
          encType="multipart/form-data"
          action="/meet-our-team/dr-muhammad-zulqarnain-dr-z-/"
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
            <div className="main" data-item="i" data-key="32141">
              <div className="flex-spaced-between-block-1024-margined flex-direction align-items">
                <div className="third">
                  <div className="center-800 aside">
                    <div className="img staff-img pad-height-100 bottom-margin-small border-radius-item">
                      <Image
                        layout="fill"
                        src="/cms/thumbnails/34/400x400/images/dr-muhammed.jpg"
                        alt="Dr. Muhammad Zulqarnain (Dr. Z) Photo"
                        title="Dr. Muhammad Zulqarnain (Dr. Z) Photo"
                        data-bg="/cms/thumbnails/34/400x400/images/dr-muhammed.jpg"
                      />
                    </div>

                    <div className="info">
                      <header className="no-pad text-left center-800">
                        <h1>Dr. Muhammad Zulqarnain (Dr. Z)</h1>

                        <strong>M.D.</strong>

                        {/* <svg className="header-flair">
                          <use href="../../includes/flair.svg#header"></use>
                        </svg> */}
                      </header>
                    </div>
                  </div>
                </div>
                <div className="two-thirds bg-box vertical-padding-small side-padding border-radius">
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
                        <p>
                          Dr. Muhammad Zulqarnain aka Dr. Z is a pain management
                          physician serving in Dallas, Richardson, North
                          Richland Hills, Waxahachie, Texas, and the surrounding
                          communities.
                        </p>
                        <p>
                          Dr. Zulqarnain received his medical degree from King
                          Edward Medical University. He completed his internship
                          in general surgery and residency training in
                          anesthesiology at Boston Medical Center and fellowship
                          in pain management at the world renowned Texas Tech
                          University Health Sciences Center in Lubbock which is
                          one of the most competitive and prestigious centers
                          for pain fellowship in the country.
                        </p>
                        <p>
                          He is BOARD certified by American Board of
                          Anesthesiology and Sub-Specialty American Board in
                          pain management
                        </p>
                        <p>
                          He is an expert in interventional pain procedures
                          including Epidurals, Nerve Blocks, Radio-frequency
                          Ablation, Joint Injections, Kyphoplasty, Discectomy,
                          Spinal cord stimulator trial, and implantation and
                          Intrathecal pumps, SI joint fusion. He loves reading
                          and traveling and learning state of the art cutting
                          edge technology in pain management.
                        </p>
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

export default DrMZulqarnain;
