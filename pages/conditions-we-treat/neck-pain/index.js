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

export const NeckPain = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Neck Pain Treatment in Richardson | Premier Pain Centers </title>

        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.pathname}/`}
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Our team is committed to helping patients feel their best through effective approaches. Learn more about our services for neck pain treatment in Richardson."
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
        title="NECK PAIN"
        bg="/assets/sub-banners/exercising-banner-7.jpg"
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
                    <h1>Treating Neck Pain in Richardson</h1>
                    <h2>Healing Acute &amp; Chronic Pain</h2>
                    <p>
                      If you experience chronic or acute or pain in your neck
                      and/or along your back, our medical experts at Premier
                      Pain Centers are dedicated to diagnosing and treating your
                      issues. Neck pain is one of the most common reasons people
                      visit doctors in the US, as this persistent problem can be
                      caused by a number of factors, including injuries
                      sustained while playing&nbsp;
                      <Link href="/conditions-we-treat/sports-injury/">
                        sports
                      </Link>{" "}
                      or in a&nbsp;
                      <Link href="/conditions-we-treat/car-accident-injury/">
                        car accident
                      </Link>
                      . Our staff keeps up-to-date on the latest treatments and
                      techniques to ensure you receive high quality care to help
                      you recover. If you read this, you are probably familiar
                      with neck pain. Whether you recently woke up with a
                      whopper crick in your neck, sustained an injury, or are
                      experiencing chronic neck pain, this helpful guide can
                      help you understand the anatomy of your cervical spine,
                      the different causes, and types of neck pain, and
                      you&rsquo;ll be able to know more about the common ways
                      on&nbsp;
                      <Link href="/contact-locations/richardson/">
                        Treating neck pain in Richardson
                      </Link>
                      .
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
                          contact us
                        </Link>{" "}
                        online to schedule an appointment.
                      </b>
                    </p>
                    <h3>What Causes Neck Pain?</h3>
                    <p>
                      Neck pain, upper back pain, and general discomfort in
                      those areas has a range of causes, from whiplash and
                      stress-related injuries to bad posture, segmental
                      dysfunction, and problems with the discs themselves.
                      Causes for these issues vary &ndash; from acute injuries
                      to problems stemming from birth &ndash; and diagnosing and
                      treating the symptoms is the first step in helping a
                      patient live pain-free.
                    </p>
                    <p>
                      Common symptoms associated with neck and upper back
                      problems include a restricted range of motion,
                      <Link href="/conditions-we-treat/headaches/">
                        headaches and migraines
                      </Link>
                      , temporomandibular joint disorder (also known as TMJ),
                      shoulder and back spasms, ringing and inflammation in the
                      ears, and chronic tension and stiffness.
                    </p>

                    <h2>How Can I Manage My Symptoms Of Neck Pain?</h2>
                    <p>
                      Neck pain is the worst form of an overachiever. It is so
                      common that it is the fourth leading cause of disability
                      worldwide, following ischemic heart disease, and low
                      respiratory disease. About 30 percent get it each year.
                    </p>
                    <p>
                      And it does not stay in the middle of the neck. It can
                      spread in your entire upper body, affect your shoulders,
                      arms, and chest, and can even cause headaches. Life with
                      neck pain can be miserable, making it harder to
                      concentrate and pass the day.
                    </p>
                    <ul>
                      <li>
                        Tens (Transcutaneous Electrical Nerve Stimulation)
                      </li>
                      <li>Gabapentin And Pregabalin</li>
                      <li>Radiofrequency Denervation</li>
                      <li>Injections</li>
                      <li>Surgery</li>
                    </ul>
                    <h2>What Are Some Different Types of Neck Pain?</h2>
                    <p>
                      We got to know from our team which is&nbsp;
                      <Link href="/contact-locations/fort-worth/">
                        Treating neck pain in fort worth
                      </Link>
                      .&nbsp;There are different profiles of neck pain. Some
                      people get only one type, while others get a combination.
                    </p>
                    <ul>
                      <li>
                        Neuropathic neck pain: From the arteries or nerves to
                        the cervical spine, neuropathic pain can cause
                        conditions such as a herniated disc pressing against the
                        adjacent nerve, or other causes of nerve compression.
                      </li>
                      <li>
                        Mechanical Neck pain: This pain arises from the spine
                        and its supporting structures (e.g., muscles, ligaments,
                        bones, or cartilage).
                      </li>
                      <li>
                        Neuropathic pain: Usually the result of a stroke, spinal
                        cord injury, or multiple sclerosis. It can also be the
                        result of damage to the central nervous system, caused
                        by a traumatic brain / spinal cord injury or infection
                        (e.g., abscess, encephalitis, myelitis)
                      </li>
                    </ul>
                    <h2>What are the basic Causes of Neck pain?</h2>
                    <p>
                      To our information from&nbsp;
                      <Link href="/contact-locations/lancaster/">
                        Treating neck pain in lancaster
                      </Link>
                      .&nbsp;Because of its role in bearing the body&apos;s
                      weight, the neck is susceptible to a variety of painful
                      and motion-limiting injuries and disorders. Some of the
                      most common reasons for neck pain are
                    </p>
                    <ul>
                      <li>
                        Muscle strains.&nbsp;Muscle strains are frequently
                        brought on by overuse, such as when a person spends too
                        much time slumped over a computer or a smartphone. Minor
                        activities, such as reading in bed, can cause neck
                        muscular discomfort.
                      </li>
                      <li>
                        Worn joints.&nbsp;Age causes wear and tear on the
                        neck&apos;s joints just like it does on the rest of the
                        body. Bone spurs, a common response of the body to this
                        kind of wear and tear, can restrict movement and even
                        cause discomfort.
                      </li>
                      <li>
                        Nerve compression.&nbsp; A pinched nerve in the cervical
                        spine may be the result of a herniated disc or a bone
                        spur in the cervical spine. Our team which is&nbsp;
                        <Link href="/contact-locations/hillsboro/">
                          treating neck pain in Hillsboro
                        </Link>{" "}
                        confirmed this.
                      </li>
                      <li>
                        Injuries.&nbsp;Injuries to the neck and shoulders, known
                        as whiplash, are common in rear-end car accidents. This
                        happens when the head is suddenly jerked backward and
                        then forwards, placing stress on the muscles and
                        ligaments of the neck.
                      </li>
                    </ul>
                    <p>
                      Diseases. Certain diseases, such as rheumatoid arthritis,
                      meningitis, or cancer, can cause neck pain.
                    </p>

                    <h3>Common Neck Pain Conditions</h3>
                    <p>
                      Constant pain, discomfort, and inhibited movement can
                      drastically affect your quality of life. It is important
                      that you seek treatment if you suffer from this condition.
                    </p>
                    <p>
                      <b>A few neck pain issues we treat include:</b>
                    </p>
                    <ul className="bullt-list v1 split flex-wrap-spaced-between-block-800">
                      <li>Atlantoaxial joint issues</li>
                      <li>Cervical spondylosis</li>
                      <li>Cervical degenerative disease</li>
                      <li>Herniated disc</li>
                      <li>Stenosis</li>
                    </ul>
                    <h3>Discover Your Treatment Options Today</h3>
                    <p>
                      There are multiple treatment options available for people
                      who suffer from neck pain. We will work with you to
                      determine which method of treatment is best for you.
                    </p>
                    <p>
                      <b>Some of the treatments we provide include:</b>
                    </p>
                    <ul>
                      <li>
                        Adjustments of the cervical and upper regions of the
                        spine to realign the position of the vertebrae to
                        encourage function and mobility.
                      </li>
                      <li>
                        Personalize trigger point therapy to get rid of tension
                        in the upper back and neck.
                      </li>
                      <li>
                        Trigger point therapy for a personalized and specific
                        type of massage therapy that helps deconstruct tense
                        areas.
                      </li>
                      <li>
                        Rehabilitative exercises to help strengthen the joints
                        in the vertebrae.
                      </li>
                    </ul>
                    <h2>When Should I Call The Doctor If I Have Neck Pain?</h2>
                    <p>
                      Our team at&nbsp;
                      <Link href="/contact-locations/fort-worth/">
                        Treating neck pain in fort worth
                      </Link>{" "}
                      informed us that. If your neck pain is preventing you from
                      doing your everyday tasks, you should see a doctor.
                      However, severe neck pain may indicate a serious health
                      problem. If you are experiencing neck pain, you should
                      seek immediate medical attention.
                    </p>
                    <ul>
                      <li>Develops after having an accident.</li>
                      <li>
                        Happens with numbness or tingling in the arms,
                        shoulders, or legs.
                      </li>
                      <li>
                        Occurs with weakness in legs or loss of coordination in
                        arms or legs.
                      </li>
                      <li>
                        including headache, dizziness, nausea, or vomiting.
                      </li>
                      <li>Involves loss of bowel or bladder control.</li>
                      <li>Arises along with a stiff neck.</li>
                      <li>
                        Occurs with chills, fever, or unexplained weight loss.
                      </li>
                      <li>Stays the same when resting or moving.</li>
                      <li>Does not respond to over-the-counter medications.</li>
                      <li>Does not lessen after one week.</li>
                    </ul>
                    <p
                      align="center"
                      className="text-highlight v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny"
                    >
                      <b>
                        To get in touch with our team,
                        <Link href="/contact-locations/">
                          send us a message
                        </Link>{" "}
                        or call
                        <Link href="tel:469-562-4188">
                          &nbsp;469-562-4188
                        </Link>{" "}
                        today.
                      </b>
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

export default NeckPain;
