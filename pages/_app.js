import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
import localBusinessSchema from "../components/AllSchemaMarkup/LocalBusinessSchema";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        jsonld={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "My Premier Pain",
          image:
            "https://www.mypremierpain.com/_next/image/?url=%2Fcms%2Fsvg%2FLogo2.png&w=1080&q=75",
          url: "https://www.mypremierpain.com/",
          telephone: "469-562-4188",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "403 W. Campbell Rd., Ste. 305",
              addressLocality: "Richardson",
              postalCode: "75080",
              addressCountry: "USA",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "20 Northgate Dr Waxahachie",
              addressLocality: "Waxahachie",
              postalCode: "TX 75165",
              addressCountry: "USA",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "1111 5th Ave,Fort Worth, TX 76104",
              addressLocality: "Fort Worth",
              postalCode: "TX 76104",
              addressCountry: "USA",
            },
            {
              "@type": "PostalAddress",
              streetAddress:
                "7304 NE Loop 820, Ste. C North Richland Hills, TX 76180",
              addressLocality: "C North Richland Hills",
              postalCode: "TX 76180",
              addressCountry: "USA",
            },
            {
              "@type": "PostalAddress",
              streetAddress:
                "1323 E. Franklin St, Ste. 102 Hillsboro, TX 76645",
              addressLocality: "Hillsboro",
              postalCode: "TX 76645",
              addressCountry: "USA",
            },
            {
              "@type": "PostalAddress",
              streetAddress:
                "2700 W. Pleasant Rd, Ste. 320 Lancaster, TX 75146",
              addressLocality: "Lancaster",
              postalCode: "TX 75146",
              addressCountry: "USA",
            },
            {
              "@type": "PostalAddress",
              streetAddress:
                "13988 Diplomat Dr., Ste. 100 Farmers Branch, TX 75234",
              addressLocality: "Farmers Branch",
              postalCode: "TX 75234",
              addressCountry: "USA",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "3108 E. State HWY 22, Corsicana, TX 75102",
              addressLocality: "Corsicana",
              postalCode: "TX 75102",
              addressCountry: "USA",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "902 Preskitt Rd, Suite 300 Dectur, TX 76234",
              addressLocality: "Dectur",
              postalCode: "TX 76234",
              addressCountry: "USA",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "131 S Westmeadow Dr, Cleburne, TX 76033",
              addressLocality: "Cleburne",
              postalCode: "TX 76033",
              addressCountry: "USA",
            },
          ],
          openingHours: ["Mo-Fri 09:00-06:00"],
          priceRange: "0.5",
        }}
      />
      <Head>
        <link rel="icon" href="https://www.mypremierpain.com/favicon.ico" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* <script
          type="text/javascript"
          src="https://onsite.optimonk.com/script.js?account=201357"
          async
        ></script> */}
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-RVS1R02ZHZ`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-RVS1R02ZHZ');
                `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
