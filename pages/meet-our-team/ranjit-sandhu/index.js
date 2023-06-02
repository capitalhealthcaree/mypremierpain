import { AppointmentForm } from "@/components/AppointmentForm";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RanjitSandhu = () => {
  return (
    <>
      <Head>
        <title>Ranjit Sandhu | Pain Management in Richardson</title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Ranjit Sandhu. Let us help you recover! Contact Premier Pain Centers to schedule an appointment for Richardson Pain Management. Book your consultation today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta
          property="og:title"
          content="Ranjit Sandhu | Premier Pain Centers"
        />
        <meta
          property="og:description"
          content="Ranjit Sandhu. For quality pain management services from a friendly and caring team, call Premier Pain Centers today."
        />
      </Head>

      <Header />

      <main id="MainZone">
        <form
          id="Form_StaffProfileV2"
          method="post"
          encType="multipart/form-data"
          action="/meet-our-team/ranjit-sandhu/"
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
            <div className="main" data-item="i" data-key="37606">
              <div className="flex-spaced-between-block-1024-margined flex-direction align-items">
                <div className="third">
                  <div className="center-800 aside">
                    <div className="img staff-img pad-height-100 bottom-margin-small border-radius-item">
                      <Image
                        layout="fill"
                        src="/cms/thumbnails/34/400x400/images/Randjit-Sandhu-Updated.jpg"
                        alt="Ranjit Sandhu Photo"
                        title="Ranjit Sandhu Photo"
                        data-bg="/cms/thumbnails/34/400x400/images/Randjit-Sandhu-Updated.jpg"
                      />
                    </div>

                    <div className="info">
                      <header className="no-pad text-left center-800">
                        <h1>Ranjit Sandhu</h1>

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
                          Dr. Ranjit Sandhu is a double board-certified
                          Anesthesiologist and Interventional Pain Medicine
                          specialist. He was born and raised in the Metro
                          Detroit area. After graduating from medical school,
                          Dr. Sandhu went on to complete his residency in
                          Anesthesiology at Wayne State University. He then went
                          on to complete a fellowship in Interventional Pain
                          Medicine at the same institution. During his training,
                          Dr. Sandhu gained extensive experience incorporating
                          everything from medications to minimally invasive
                          procedures, to manage acute and chronic pain.
                        </p>
                        <p>
                          Dr. Sandhu believes in using a multidisciplinary
                          approach and utilizing evidence-based care when
                          treating pain, with the ultimate goal of restoring
                          function and improving the quality of life of his
                          patients. He is passionate about staying up to date
                          with the latest technologies and cutting-edge
                          procedures for the treatment of acute and chronic
                          pain. During his free time, Dr. Sandhu enjoys
                          traveling with his wife, watching Detroit sports, and
                          spending time with family and friends.
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

export default RanjitSandhu;
