import React from "react";
import CardService from "../Card/CardService";
const Service = () => {

  const itemCard = [
    {
      name: "Web Development",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png",
      bg: "bg-[#00732E]",
    },
    {
      name: "Logo Desin",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png",
      bg: "bg-[#FF7640]",
    },
    {
      name: "SEO",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png",
      bg: "bg-[#003912]",
    },
    {
      name: "Architecture",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png",
      bg: "bg-[#633341]",
    },
    {
      name: "Social Media",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png",
      bg: "bg-[#687200]",
    },
    {
      name: "Voice Over",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
      bg: "bg-[#421300]",
    },
    {
      name: "Sofware Dev",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png",
      bg: "bg-[#254200]",
    },
    {
      name: "Data Science",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png",
      bg: "#8F2900",
    },
    {
      name: "Product Photo",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png",
      bg: "#687200",
    },
    {
      name: "E-commerce",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png",
      bg: "#00732E",
    },
    {
      name: "Video Editing",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png",
      bg: "#BE5272",
    },
  ];
  return (
    <div className="container py-10 px-5 sm:px-3 lg:px-0">
      <h3 className="mb-10 text-5xl">Popular service</h3>
      <div className="grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-10 xl:gap-5">
        {
            itemCard.slice(0,6).map((item,index) => {
                return (
                    <>
                        <div className="flex justify-center items-center">
                        <CardService name={item.name} img={item.img} bg={item.bg}/>
                        </div>
                    </>
                )
            })
        }
      </div>
      {/* <Slider {...settings}>
        <div>
          <div>
            <CardService
              name={`Website Development`}
              img={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
              }
              bg={"#00732E"}
            />
          </div>
        </div>
        <div>
          <div>
            <CardService
              name={`SEO`}
              img={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
              }
              bg={"#003912"}
            />
          </div>
        </div>
        <div>
          <div>
            <CardService
              name={`SEO`}
              img={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
              }
              bg={"#003912"}
            />
          </div>
        </div>
        <div>
          <div>
            <CardService
              name={`SEO`}
              img={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
              }
              bg={"#003912"}
            />
          </div>
        </div>
        <div>
          <div>
            <CardService
              name={`SEO`}
              img={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
              }
              bg={"#003912"}
            />
          </div>
        </div>
        <div>
          <div>
            <CardService
              name={`SEO`}
              img={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
              }
              bg={"#003912"}
            />
          </div>
        </div>
        <div>
          <div>
            <CardService
              name={`SEO`}
              img={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
              }
              bg={"#003912"}
            />
          </div>
        </div>
        <div>
          <div>
            <CardService
              name={`SEO`}
              img={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
              }
              bg={"#003912"}
            />
          </div>
        </div>
        <div>
          <div>
            <CardService
              name={`SEO`}
              img={
                "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
              }
              bg={"#003912"}
            />
          </div>
        </div>
      </Slider> */}
    </div>
  );
};

export default Service;
