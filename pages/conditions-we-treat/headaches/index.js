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

export const Headaches = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Richardson Headache Treatment | Migraine Treatment</title>
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.pathname}`}
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.pathname}/`}
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="If you suffer from headaches and migraines, contact Premier Pain Centers in Richardson, Fort Worth, and the surrounding areas to schedule an appointment. "
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
      </Head>

      <Header />
      <Banner
        title="HEADACHES"
        bg="/assets/sub-banners/exercising-banner-4.jpg"
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
                    <h1>Headaches Treatment in Richardson</h1>
                    <h2>Helping You Find Relief for Migraines</h2>
                    <p>
                      Headaches are a common ailment that many people experience
                      on a semi-frequent basis. While normal headaches may
                      subside with lifestyle changes and can often be treated
                      with over-the-counter medications, you may need
                      professional assistance if you experience chronic
                      headaches or migraines.
                    </p>
                    <p>
                      Anyone who lives with migraines knows how painful this
                      issue can be. A migraine is more than just an
                      inconvenience or annoyance &mdash; people who get
                      migraines are often debilitated by their condition, and it
                      can be difficult to find a symptom management plan that is
                      right for you.
                    </p>
                    <p>
                      <Link href="../../about/">Premier Pain Centers</Link> has
                      multiple treatment options available for people who suffer
                      from migraines or chronic headaches. Our professionals can
                      evaluate your symptoms to determine the best type of care
                      for your situation. We offer same-day appointments, so you
                      can get relief fast.
                    </p>
                    <p
                      align="center"
                      className="text-highlight v2 bg-box bordered side-padding-medium vertical-padding-tiny"
                    >
                      <b>
                        To learn more about our Richardson headache treatment
                        services, give us a call at
                        <Link href="tel:469-562-4188"> 469-562-4188</Link>{" "}
                        or&nbsp;
                        <Link href="/contact-locations/">
                          contact us online
                        </Link>{" "}
                        today.
                      </b>
                    </p>
                    <h3>What Are the Different Types of Headaches?</h3>
                    <p>
                      Although many headaches feel the same, there are actually
                      different types of headaches that are caused by different
                      conditions and sensations within the body. The first step
                      to headache treatment is to determine the type of
                      headaches a person is experiencing, as each type of
                      headache requires unique care.
                    </p>
                    <p>
                      <b>Some of the most common types of headaches are:</b>
                    </p>
                    <ul>
                      <li>
                        <b>Migraines</b> &ndash; Migraines are characterized by
                        symptoms such as extreme pain, light and sound
                        sensitivity, and nausea. They often last longer than
                        typical headaches, and migraines are generally a chronic
                        condition. Treatment usually involves symptom
                        management; however, there is no known cure for
                        migraines.
                      </li>
                      <li>
                        <b>Cluster headaches </b>&ndash; Cluster headaches often
                        cause severe pain in a localized area of the head, such
                        as around one eye. They can also be a chronic issue for
                        sufferers.
                      </li>
                      <li>
                        <b>Occipital neuralgia</b> &ndash; While occipital
                        neuralgia causes headaches, the pain is actually due to
                        irritation in the nerves of the spinal cord. Pain
                        associated with this condition is generally felt in the
                        back of the head and the neck.
                      </li>
                    </ul>
                    <h3>Causes of Headaches &amp; Migraines</h3>
                    <p>
                      Headaches can be caused by a number of health conditions,
                      in addition to general wellness considerations such as
                      dehydration or tiredness.
                    </p>
                    <p>
                      Although there is no certain answer for what causes
                      migraines, experts have hypothesized that blood flow in
                      the brain plays a role. Some people may be predisposed to
                      experiencing migraines due to genetics and other factors;
                      for example, women are three times more likely to
                      experience migraines than men.
                    </p>
                    <p>
                      <b>A migraine can be caused by:</b>
                    </p>
                    <ul className="bullt-list v1 split flex-wrap-spaced-between-block-800">
                      <li>
                        Overstimulation (bright lights, smells, or loud noises)
                      </li>
                      <li>Hunger</li>
                      <li>Hormonal imbalances</li>
                      <li>Stress</li>
                      <li>Exhaustion</li>
                      <li>Certain foods</li>
                    </ul>
                    <h3>
                      Headache &amp; Migraine Management at Premier Pain Centers
                    </h3>
                    <p>
                      We can help diagnose the type of headache you are
                      suffering from and create a custom treatment plan that is
                      catered to your specific needs. Our experts want nothing
                      more than to help you control your headaches and migraines
                      so you can continue living the most comfortable life
                      possible.
                    </p>
                    <p
                      align="center"
                      className="text-highlight v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny"
                    >
                      <b>
                        Give us a call at
                        <Link href="tel:469-562-4188"> 469-562-4188</Link>{" "}
                        or&nbsp;
                        <Link href="/contact-locations/">
                          contact us online
                        </Link>{" "}
                        today to schedule an appointment for headache treatment
                        in Richardson, TX and the surrounding areas.
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <script
              id="Process_ColumnLayoutContent"
              type="text/javascript"
              style={{ display: "none" }}
            >
              window.Process&&Process.Page(['Process_ColumnLayoutContent','ColumnLayoutContent_1','ColumnLayoutContent_2','ColumnLayoutContent_3','ColumnLayoutContent_4']);
            </script>
          </div>
          <ServiceSidebar />
        </div>
      </section>

      <CommonFormsSections />

      <Footer />
    </>
  );
};

export default Headaches;
