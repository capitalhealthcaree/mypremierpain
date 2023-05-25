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
                          <Link href="../../contact-locations/">
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
              <aside
                className="side-blog v1 light-bg transparent-bg text-center bg-box-unlike"
                id="SideBlogV1"
                data-onvisible="show"
                data-role="scroller"
              >
                <div className="border-radius bg-box side-padding-medium vertical-padding-tiny box-flair">
                  <header
                    className="text-align center-800 no-pad bottom-margin-tiny"
                    id="SideBlogV1Header"
                  >
                    <h5>OUR MEDICAL BLOGS&nbsp;</h5>
                  </header>
                  <div className="flair-border">
                    <span className="flair-1"></span>
                    <span className="flair-2"></span>
                    <div data-role="container">
                      <ul
                        className="flex- ui-repeater"
                        id="BlogV1Feed"
                        data-role="list"
                      >
                        <li
                          className="flex- full"
                          data-role="item"
                          data-item="i"
                          data-key="1365288"
                        >
                          <Link
                            className="flex- full text-left"
                            href={`/news/${"cbd-may-be-effective-for-pain-management-after-certain-surgeries"}`}
                          >
                            <div className="flex-column-top full auto">
                              <div className="fit full bottom-margin-tiny">
                                <span className="blog-time-style full">
                                  <time content="Sep 3, 2022">Sep 03</time>
                                </span>
                                <strong className="title-style-4 title-color-4">
                                  CBD May Be Effective for Pain Management After
                                  Certain Surgeries
                                </strong>
                              </div>
                              <span className="fit btn v2">View Article</span>
                            </div>
                          </Link>
                        </li>

                        <li
                          className="flex- full"
                          data-role="item"
                          data-item="i"
                          data-key="1365286"
                        >
                          <Link
                            className="flex- full text-left"
                            // href="../../blog/2022/september/7-reasons-of-knee-pain-when-riding-a-bike/index.html"
                            href="/"
                          >
                            <div className="flex-column-top full auto">
                              <div className="fit full bottom-margin-tiny">
                                <span className="blog-time-style full">
                                  <time content="Sep 2, 2022">Sep 02</time>
                                </span>
                                <strong className="title-style-4 title-color-4">
                                  7 reasons of knee pain when riding a bike
                                </strong>
                              </div>
                              <span className="fit btn v2">View Article</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="SideBlogV1BtnCon">
                    <div className="top-margin-small text-center">
                      <Link
                        className="btn v1"
                        href="/blog/"
                        aria-labelledby="SideBlogV1Header"
                      >
                        All Blogs
                      </Link>
                    </div>
                  </div>
                </div>
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
