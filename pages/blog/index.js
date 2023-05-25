import React, { useState, useEffect } from "react";
import { Banner } from "@/components/CommonBanner/Banner";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
// import { CommonFormsSections } from "@/components/CommonForms&Sections";
import ServiceSidebar from "@/components/ServiceSidebar";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const SSR_ENDPOINT = process.env.SSR_API_URL;
const CSR_ENDPOINT = process.env.NEXT_PUBLIC_URL;

export const Blog = ({ item, totalPage }) => {
  const [items, setItems] = useState([]);

  const [currentPage, setCurrentPage] = useState();
  const loadMoreData = async (page) => {
    const posts = await axios.get(
      `${CSR_ENDPOINT}blogs/getAll/pagination?page=${page}&limit=21`
    );
    const data = await posts.data.data;
    const current = await posts.data.currentPage;
    setItems(data);
    setCurrentPage(current);
  };
  useEffect(() => {
    setItems(item);
    setCurrentPage(1);
  }, []);

  const listItems = [];
  for (let i = 1; i <= totalPage; i++) {
    listItems.push(
      <a
        key={i}
        onClick={() => loadMoreData(i)}
        className={currentPage === i ? "active" : ""}
      >
        {i}
      </a>
    );
  }

  return (
    <>
      <Head>
        <title>Latest Pain Management Blogs | Premier Pain Centers</title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Check out our collection of blogs that cover topics such as chronic pain, alternative therapies, and the latest medical treatments."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/`}
        />
      </Head>
      <Header />
      <Banner title="BLOG" bg="/assets/sub-banners/BLOG.jpg" />
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
              <div className="bg-box side-padding-medium vertical-padding-small border-radius">
                <div className="card-container-blog">
                  {items?.map((data, index) => (
                    <div className="card-blog" key={index}>
                      <Image
                        src={data?.image}
                        alt={data?.category}
                        height={500}
                        width={500}
                      />
                      <h3>{data?.seoTitle[0]}</h3>
                      <p>{data?.category}</p>

                      <Link className="button" href={`/blog${data.slug}`}>
                        Read More
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="center">
                  <div className="pagination pagination1 pagination3 pagination4 pagination6">
                    {listItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ServiceSidebar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const posts = await axios.get(
    SSR_ENDPOINT + "blogs/getAll/pagination?page1&limit=21"
  );
  const data = await posts.data.data;
  const totalPage = await posts.data.totalPages;

  return {
    props: {
      item: data,
      totalPage,
    },
  };
};
