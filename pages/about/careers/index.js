import { Banner } from "@/components/CommonBanner/Banner";
import { CommonFormsSections } from "@/components/CommonForms&Sections";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const DOMAIN_URL = process.env.NEXT_PUBLIC_URL_DOMAIN;

export const Careers = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Careers | Join Our Excellent Team | Premier Pain Centers</title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Premier Pain Centers is looking for talented individuals who want to help us alleviate pain and improve the lives of our patients. Contact us for more information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta property="og:url" content={`${DOMAIN_URL}${router.asPath}`} />
      </Head>
      <Header />
      <Banner
        title="CAREERS"
        bg="/assets/sub-banners/physical-therapy-banner-1.jpg"
      />

      <main id="MainZone">
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
                      <h1>Careers At Premier Pain Centers</h1>
                      <h2>Join Our Team!</h2>
                      <p>All positions have been fulfilled. </p>
                      <p
                        align="center"
                        className="text-highlight v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny"
                      >
                        <b>
                          If you are interested in a career with Premier Pain
                          Centers,
                          <Link href="/contact-locations/">
                            contact us
                          </Link>{" "}
                          today.
                        </b>
                      </p>
                      <h3></h3>
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
                    <Link href="/about">
                      <h5>About</h5>
                    </Link>
                  </header>
                  <ul className="" data-role="panel">
                    <li className="level-1  ">
                      <Link className="auto" href="/meet-our-team" target="">
                        Our Providers
                      </Link>
                    </li>
                    <li className="level-1 selected ">
                      <Link className="auto" href="/about/careers" target="">
                        Careers
                      </Link>
                    </li>
                    <li className="level-1  ">
                      <Link
                        className="auto"
                        href="/assets/Rao-Ali-AR-1.pdf"
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
      </main>

      <Footer />
    </>
  );
};

export default Careers;
