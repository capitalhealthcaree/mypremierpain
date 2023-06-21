const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const redirects = [
    {
      "source": "/feed/",
      "destination": "/"
    },
    {
      "source": "/blog/knee-pain/knee-pain-location-chart-helps-to-find-possible-causes-of-pain-and-diagnosis/",
      "destination": "/blog/knee-pain-location-chart-helps-to-find-possible-causes-of-pain-and-diagnosis/"
    },
    {
      "source": "/blog/knee-pain/sharp-stabbing-pain-in-knee-comes-and-goes/",
      "destination": "/blog/knee-pain/11-causes-why-sharp-stabbing-pain-in-knee-comes-and-goes/"
    },
    {
      "source": "/blog/5-best-recliners-for-back-pain/",
      "destination": "/blog/update/5-best-recliners-for-back-pain/"
    },
    {
      "source": "/conditions-we-treat/conditions-we-treat/",
      "destination": "/conditions-we-treat/"
    },
    {
      "source": "/blog/lower-back-pain-that-radiates-to-front-pelvic-area/",
      "destination": "blog/back-pain/lower-back-pain-that-radiates-to-front-pelvic-area/"
    },
    {
      "source": "/blog/video-testimonials/",
      "destination": "/blog/"
    },
    {
      "source": "/blog/[...slug]",
      "destination": "/blog/"
    },
    {
      "source": "/news/contact-locations/corsicana/",
      "destination": "/contact-locations/corsicana/"
    },
    {
      "source": "/blog/about/",
      "destination": "/blog/"
    },
    {
      "source": "/blog/meet-our-team/",
      "destination": "/meet-our-team/"
    },
    {
      "source": "/news/contact-locations/farmers-branch/",
      "destination": "/contact-locations/farmers-branch/"
    },
    {
      "source": "/news/contact-locations/lancaster/",
      "destination": "/contact-locations/lancaster/"
    },
    {
      "source": "/news/contact-locations/hillsboro/",
      "destination": "/contact-locations/hillsboro/"
    },
    {
      "source": "/news/contact-locations/north-richland-hills/",
      "destination": "/contact-locations/north-richland-hills/"
    },
    {
      "source": "/news/contact-locations/fort-worth/",
      "destination": "/contact-locations/fort-worth/"
    },
    {
      "source": "/news/contact-locations/waxahachie/",
      "destination": "/contact-locations/waxahachie/"
    },
    {
      "source": "/news/contact-locations/richardson/",
      "destination": "/contact-locations/richardson/"
    },
    {
      "source": "/news/contact-locations/",
      "destination": "/contact-locations/"
    },
    {
      "source": "/news/patient-forms/",
      "destination": "/patient-forms/"
    },
    {
      "source": "/news/educational-videos/",
      "destination": "/educational-videos/"
    },
    {
      "source": "/news/conditions-we-treat/joint-pain/",
      "destination": "/conditions-we-treat/joint-pain/"
    },
    {
      "source": "/news/conditions-we-treat/neck-pain/",
      "destination": "/conditions-we-treat/neck-pain/"
    },
    {
      "source": "/news/conditions-we-treat/headaches/",
      "destination": "/conditions-we-treat/headaches/"
    },
    {
      "source": "/news/conditions-we-treat/knee-pain/",
      "destination": "/conditions-we-treat/knee-pain/"
    },
    {
      "source": "/news/conditions-we-treat/back-pain/",
      "destination": "/conditions-we-treat/back-pain/"
    },
    {
      "source": "/news/conditions-we-treat/sports-injury/",
      "destination": "/conditions-we-treat/sports-injury/"
    },
    {
      "source": "/news/patient-info/",
      "destination": "/patient-info/"
    },
    {
      "source": "/news/conditions-we-treat/car-accident-injury/",
      "destination": "/conditions-we-treat/car-accident-injury/"
    },
    {
      "source": "/news/conditions-we-treat/",
      "destination": "/conditions-we-treat/"
    },
    {
      "source": "/news/about/careers/",
      "destination": "/about/careers/"
    },
    {
      "source": "/news/reviews/",
      "destination": "/reviews//"
    },
    {
      "source": "/news/meet-our-team/",
      "destination": "/meet-our-team/"
    },
    {
      "source": "/news/about/",
      "destination": "/about/"
    },
    {
      "source": "/news/[slug]/",
      "destination": "/news/"
    },
    {
      "source": "/news/video-testimonials/",
      "destination": "/video-testimonials/"
    },
    {
      "source": "/blog/everything-youve-ever-wanted-to-know-about-pain-management-doctors/",
      "destination": "/blog/treatments/everything-youve-ever-wanted-to-know-about-pain-management-doctors/"
    },
    {
      "source": "/blog/contact-locations/corsicana/",
      "destination": "/contact-locations/corsicana/"
    },
    {
      "source": "/blog/contact-locations/farmers-branch/",
      "destination": "/contact-locations/farmers-branch/"
    },
    {
      "source": "/blog/contact-locations/lancaster/",
      "destination": "/contact-locations/lancaster/"
    },
    {
      "source": "/blog/about/careers/",
      "destination": "/about/careers/"
    },
    {
      "source": "/blog/conditions-we-treat/",
      "destination": "/conditions-we-treat/"
    },
    {
      "source": "/blog/conditions-we-treat/car-accident-injury/",
      "destination": "/conditions-we-treat/car-accident-injury/"
    },
    {
      "source": "/blog/patient-info/",
      "destination": "/patient-info/"
    },
    {
      "source": "/blog/conditions-we-treat/sports-injury/",
      "destination": "/conditions-we-treat/sports-injury/"
    },
    {
      "source": "/blog/conditions-we-treat/back-pain/",
      "destination": "/conditions-we-treat/back-pain/"
    },
    {
      "source": "/blog/conditions-we-treat/knee-pain/",
      "destination": "/conditions-we-treat/knee-pain/"
    },
    {
      "source": "/blog/conditions-we-treat/headaches/",
      "destination": "/conditions-we-treat/headaches/"
    },
    {
      "source": "/blog/conditions-we-treat/joint-pain/",
      "destination": "/conditions-we-treat/joint-pain/"
    },
    {
      "source": "/blog/educational-videos/",
      "destination": "/educational-videos/"
    },
    {
      "source": "/blog/patient-forms/",
      "destination": "/patient-forms/"
    },
    {
      "source": "/blog/reviews/",
      "destination": "/reviews/"
    },
    {
      "source": "/blog/contact-locations//",
      "destination": "/contact-locations/"
    },
    {
      "source": "/blog/contact-locations/richardson/",
      "destination": "/contact-locations/richardson/"
    },
    {
      "source": "/blog/contact-locations/waxahachie/",
      "destination": "/contact-locations/waxahachie/"
    },
    {
      "source": "/blog/contact-locations/north-richland-hills/",
      "destination": "/contact-locations/north-richland-hills/"
    },
    {
      "source": "/blog/conditions-we-treat/neck-pain/",
      "destination": "/conditions-we-treat/neck-pain/"
    },
    {
      "source": "/blog/contact-locations/hillsboro/",
      "destination": "/contact-locations/hillsboro/"
    },
    {
      "source": "/blog/contact-locations/",
      "destination": "/contact-locations/"
    },
    {
      "source": "/blog/contact-locations/fort-worth/",
      "destination": "/contact-locations/fort-worth/"
    },
    {
      "source": "/treatments/meet-our-team/",
      "destination": "/meet-our-team/"
    },
    {
      "source": "/treatments/conditions-we-treat/car-accident-injury/",
      "destination": "/conditions-we-treat/car-accident-injury/"
    },
    {
      "source": "/treatments/contact-locations/waxahachie/",
      "destination": "/contact-locations/waxahachie/"
    },
    {
      "source": "/treatments/contact-locations/corsicana/",
      "destination": "/contact-locations/corsicana/"
    },
    {
      "source": "/treatments/patient-info/",
      "destination": "/treatments/"
    },
    {
      "source": "/treatments/reviews/",
      "destination": "/treatments/"
    },
    {
      "source": "/treatments/conditions-we-treat/",
      "destination": "/conditions-we-treat/"
    },
    {
      "source": "/treatments/contact-locations/hillsboro/",
      "destination": "/contact-locations/hillsboro/"
    },
    {
      "source": "/treatments/conditions-we-treat/joint-pain/",
      "destination": "/conditions-we-treat/joint-pain/"
    },
    {
      "source": "/treatments/contact-locations/lancaster/",
      "destination": "/treatments/"
    },
    {
      "source": "/treatments/educational-videos/",
      "destination": "/treatments/"
    },
    {
      "source": "/treatments/about/",
      "destination": "/about/"
    },
    {
      "source": "/treatments/contact-locations/fort-worth/",
      "destination": "/contact-locations/fort-worth/"
    },
    {
      "source": "/treatments/video-testimonials/",
      "destination": "/video-testimonials/"
    },

    {
      "source": "/treatments/conditions-we-treat/back-pain/",
      "destination": "/conditions-we-treat/back-pain/"
    },

    {
      "source": "/treatments/contact-locations/richardson/",
      "destination": "/contact-locations/richardson/"
    },

    {
      "source": "/treatments/about/careers/",
      "destination": "/about/careers/"
    },

    {
      "source": "/treatments/conditions-we-treat/sports-injury/",
      "destination": "/conditions-we-treat/sports-injury/"
    },

    {
      "source": "/treatments/contact-locations/farmers-branch/",
      "destination": "/contact-locations/farmers-branch/"
    },
    {
      "source": "/treatments/conditions-we-treat/knee-pain/",
      "destination": "/conditions-we-treat/knee-pain/"
    },

    {
      "source": "/treatments/conditions-we-treat/headaches/",
      "destination": "/conditions-we-treat/headaches/"
    },

    {
      "source": "/treatments/conditions-we-treat/neck-pain/",
      "destination": "/conditions-we-treat/neck-pain/"
    },
    {
      "source": "/treatments/contact-locations/north-richland-hills/",
      "destination": "/contact-locations/north-richland-hills/"
    },
    {
      "source": "/treatments/contact-locations/",
      "destination": "/treatments/"
    },
    {
      "source": "/treatments/patient-forms/",
      "destination": "/treatments/"
    },

    {
      "source": "/contact-locations/about/careers/",
      "destination": "/about/careers/"
    },
    {
      "source": "/contact-locations/contact-locations/north-richland-hills/",
      "destination": "/contact-locations/north-richland-hills/"
    },
    {
      "source": "/contact-locations/contact-locations/richardson/",
      "destination": "/contact-locations/richardson/"
    },
    {
      "source": "/contact-locations/contact-locations/farmers-branch/",
      "destination": "/contact-locations/farmers-branch/"
    },
    {
      "source": "/contact-locations/contact-locations/waxahachie/",
      "destination": "/contact-locations/waxahachie/"
    },

    {
      "source": "/contact-locations/conditions-we-treat/sports-injury/",
      "destination": "/conditions-we-treat/sports-injury/"
    },

    {
      "source": "/contact-locations/contact-locations/hillsboro/",
      "destination": "/contact-locations/hillsboro/"
    },
    {
      "source": "/contact-locations/educational-videos/",
      "destination": "/educational-videos/"
    },

    {
      "source": "/contact-locations/conditions-we-treat/headaches/",
      "destination": "/conditions-we-treat/headaches/"
    },

    {
      "source": "/contact-locations/conditions-we-treat/knee-pain/",
      "destination": "/conditions-we-treat/knee-pain/"
    },

    {
      "source": "/contact-locations/patient-info/",
      "destination": "/patient-info/"
    },

    {
      "source": "/contact-locations/contact-locations/lancaster/",
      "destination": "/contact-locations/lancaster/"
    },

    {
      "source": "/contact-locations/contact-locations/fort-worth/",
      "destination": "/contact-locations/fort-worth/"
    },

    {
      "source": "/contact-locations/conditions-we-treat/",
      "destination": "/contact-locations/"
    },

    {
      "source": "/contact-locations/conditions-we-treat/neck-pain/",
      "destination": "/conditions-we-treat/neck-pain/"
    },

    {
      "source": "/contact-locations/conditions-we-treat/back-pain/",
      "destination": "/conditions-we-treat/back-pain/"
    },

    {
      "source": "/contact-locations/reviews/",
      "destination": "/reviews/"
    },

    {
      "source": "/contact-locations/contact-locations/",
      "destination": "/contact-locations/"
    },
    {
      "source": "/contact-locations/contact-locations/corsicana/",
      "destination": "/contact-locations/"
    },
    {
      "source": "/contact-locations/video-testimonials/",
      "destination": "/video-testimonials/"
    },

    {
      "source": "/contact-locations/conditions-we-treat/car-accident-injury/",
      "destination": "/conditions-we-treat/car-accident-injury/"
    },

    {
      "source": "/contact-locations/about/",
      "destination": "/about/"
    },

    {
      "source": "/contact-locations/conditions-we-treat/joint-pain/",
      "destination": "/conditions-we-treat/joint-pain/"
    },
    {
      "source": "/contact-locations/meet-our-team/",
      "destination": "/meet-our-team/"
    },

    {
      "source": "/conditions-we-treat/contact-locations/corsicana/",
      "destination": "/contact-locations/corsicana/"
    },

    {
      "source": "/conditions-we-treat/contact-locations/north-richland-hills/",
      "destination": "/contact-locations/north-richland-hills/"
    },
    {
      "source": "/conditions-we-treat/contact-locations/farmers-branch/",
      "destination": "/contact-locations/farmers-branch/"
    },
    {
      "source": "/conditions-we-treat/contact-locations/richardson/",
      "destination": "/contact-locations/richardson/"
    },

    {
      "source": "/conditions-we-treat/contact-locations/hillsboro/",
      "destination": "/contact-locations/hillsboro/"
    },

    {
      "source": "conditions-we-treat/contact-locations/waxahachie/",
      "destination": "/contact-locations/waxahachie/"
    },

    {
      "source": "/conditions-we-treat/contact-locations/fort-worth/",
      "destination": "/contact-locations/fort-worth/"
    },

    {
      "source": "/conditions-we-treat/contact-locations/",
      "destination": "/contact-locations/"
    },

    {
      "source": "/conditions-we-treat/contact-locations/lancaster/",
      "destination": "/contact-locations/lancaster/"
    },

    {
      "source": "/meet-our-team/contact-locations/corsicana/",
      "destination": "/contact-locations/"
    },
    {
      "source": "/about/contact-locations/fort-worth/",
      "destination": "/contact-locations/fort-worth/"
    },

    {
      "source": "/about/contact-locations/richardson/",
      "destination": "/contact-locations/richardson/"
    },

    {
      "source": "/about/contact-locations/hillsboro/",
      "destination": "/contact-locations/hillsboro/"
    },
    {
      "source": "/meet-our-team/conditions-we-treat/car-accident-injury/",
      "destination": "/meet-our-team/"
    },
    {
      "source": "/meet-our-team/conditions-we-treat/back-pain/",
      "destination": "/meet-our-team/"
    },
    {
      "source": "/car-accident-injury/",
      "destination": "/conditions-we-treat/car-accident-injury/"
    },
    {
      "source": "/meet-our-team/conditions-we-treat/knee-pain/",
      "destination": "/meet-our-team/"
    }
  ]

app.prepare().then(() => {
  const server = express();

  // Add redirects as middleware
  redirects.forEach((redirect) => {
    server.use(redirect.source, (req, res) => {
      res.redirect(redirect.destination);
    });
  });

  // Handle all other requests with Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("Server started on http://localhost:3000");
  });
});
