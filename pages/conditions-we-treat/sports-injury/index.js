import { Banner } from "@/components/CommonBanner/Banner";
import { CommonFormsSections } from "@/components/CommonForms&Sections";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Head from "next/head";
import React from "react";
import Link from "next/link";
// import { ServicesSidebarLinks } from "@/components/ServicesSidebarLinks";
import ServiceSidebar from "@/components/ServiceSidebar";
import { useRouter } from "next/router";

export const SportInjury = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Richardson Sports Injury Treatment | Premier Pain Centers{" "}
        </title>

        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.pathname}/`}
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Contact Premier Pain Centers if you need treatment for a sports injury in Richardson or throughout the surrounding area. We care for a variety of serious injuries.  "
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
      </Head>

      <Header />
      <Banner
        title="SPORTS INJURY"
        bg="/assets/sub-banners/physical-therapy-banner-2.jpg"
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
                    <h1>Richardson Sports Injury Treatment</h1>
                    <h2>Caring for All Types of Injuries</h2>
                    <p>
                      Playing sports is a fun activity that provides a range of
                      benefits, including relaxation, exercise, and
                      socialization. As beneficial as sports are, they can be
                      dangerous and result in injury. From minor muscle strains
                      to more serious conditions, sports injuries can severely
                      limit your range of movement and cause immense pain.
                    </p>
                    <p>
                      Are you experiencing knee pain due to the wear and tear on
                      your joints from playing sports? Maybe you have recently
                      incurred a serious sports-related back injury and need
                      help as soon as possible. Perhaps you were injured while
                      playing sports in high school or college and have never
                      been 100% since. At Premier Pain Centers, we have
                      experience with treating a wide range of sports injuries
                      and are here to help you.
                    </p>
                    <p
                      align="center"
                      className="text-highlight v2 bg-box bordered side-padding-medium vertical-padding-tiny"
                    >
                      <b>
                        Call us at
                        <Link href="tel:469-562-4188"> 469-562-4188</Link>{" "}
                        or&nbsp;
                        <Link href="/contact-locations/">
                          contact us online
                        </Link>{" "}
                        to learn more about our Richardson
                      </b>
                      <b> sports </b>
                      <b>injury treatment.</b>
                    </p>
                    <h3>Types of Sports Injuries We Treat</h3>
                    <p>
                      As an active participant in sports, your body experiences
                      more strain than the average person. It is important to
                      stretch, eat healthy, and generally stay in shape if you
                      play sports, as a lack of preparation can lead to injury.
                      Even active people who live a healthy lifestyle can
                      experience chronic pain in their muscles and bones, but
                      with pain management, you can ensure these issues
                      don&rsquo;t interfere with your life.
                    </p>
                    <p>
                      People who play sports can also experience acute pain due
                      to twisting an ankle, breaking a bone, falling, or
                      colliding with another person during practice or a game.
                      These events can lead to an array of injuries &mdash;
                      <Link href="/contact-locations/">contact us</Link> to
                      discuss your specific circumstances and how we can help.
                    </p>
                    <p>
                      <b>
                        We provide treatment services for conditions such as:
                      </b>
                    </p>
                    <ul className="bullt-list v1 split flex-wrap-spaced-between-block-800">
                      <li>
                        <Link href="/conditions-we-treat/joint-pain/">
                          Joint pain
                        </Link>
                      </li>
                      <li>
                        <Link href="/conditions-we-treat/neck-pain/">
                          Neck pain
                        </Link>
                      </li>
                      <li>
                        <Link href="/conditions-we-treat/headaches/">
                          Headaches
                        </Link>
                      </li>
                      <li>
                        <Link href="/conditions-we-treat/knee-pain/">
                          Knee pain
                        </Link>
                      </li>
                      <li>
                        <Link href="/conditions-we-treat/back-pain/">
                          Back pain
                        </Link>
                      </li>
                    </ul>
                    <h3>How We Treat Sports Injuries</h3>
                    <p>
                      Our pain management plans are tailored to the needs of
                      each of our patients. We will work to understand your
                      situation, so your treatment is designed with your goals
                      for care in mind. You may require a one-time procedure to
                      treat an injury or may want to participate in a long-term
                      therapy program to ensure your body is operating at peak
                      physical condition. With Premier Pain Centers, you can
                      feel confident that our professionals will work to achieve
                      the solutions you are seeking.
                    </p>
                    <h3>Contact Us Now for Dependable Pain Relief</h3>
                    <p>
                      If you were recently injured while playing sports or are
                      looking for respite from sports-related chronic pain, get
                      in touch with us. We are committed to helping our patients
                      live the life they want. Same-day appointments are
                      available at our facility, so you can start on your
                      treatment plan as soon as you are ready.
                    </p>
                    <p
                      align="center"
                      className="text-highlight v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny"
                    >
                      <b>
                        Please&nbsp;
                        <Link href="/contact-locations/">
                          contact us online
                        </Link>{" "}
                        or call us at
                        <Link href="tel:469-562-4188"> 469-562-4188</Link> to
                        learn more about our Richardson
                      </b>
                      <b> sports </b>
                      <b>injury treatments and other pain care services.</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ServiceSidebar />
        </div>
      </section>
      <CommonFormsSections />
      <Footer />
    </>
  );
};

export default SportInjury;
