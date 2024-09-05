import React from "react";

const Banner = ({ jobType }) => {
  const scrollRef = React.useRef(null);
  const bannerImg = {
    1: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626459703/G_D-%20Desktop%20banner.png`,
    2: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/0426b6ab656cedb4697336a530541d50-1688626333573/Digital%20Marketing-%20Desktop%20banner.png`,
    3: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/6de5a002b40043ab739b6382daf94e37-1688626851418/W_T-%20Desktop%20banner.png`,
    4: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c5be9e1ff7a9c16910688aa6b7b5ffee-1688626700100/V_A-%20Desktop%20banner.png`,
    5: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626492933/M_A-%20Desktop%20banner.png`,
  };
  console.log(jobType)
  const scroll = (direction) => {
    if (scrollRef.current) {
      // Lấy kích thước của phần tử chứa và số lượng phần tử muốn cuộn qua
      const itemWidth = scrollRef.current.firstChild.offsetWidth;
      const itemsToScroll = 5; // Số lượng phần tử muốn cuộn qua mỗi lần
      const scrollAmount = itemWidth * itemsToScroll; // Khoảng cách cuộn

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container py-10 px-5 sm:px-3 lg:px-0">
      <div
        className={`bg-[url('${bannerImg[jobType?.id]}')]  h-[170px] md:h-[200px] lg:h-[250px] w-full bg-cover bg-center rounded-xl flex flex-col items-center justify-center `}
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
          {jobType?.tenLoaiCongViec}
        </h3>
        <p className="lg:text-xl font-medium text-white mt-3">
          Designs to make you stand out.
        </p>
        <button className="items-center hidden md:flex py-3 gap-2 text-white px-4 border border-white rounded-[4px] mt-5 hover:bg-white hover:text-black">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentFill"
            className="text-white w-[14px] h-[14px] hover:text-black"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"
              fill="currentColor"
            ></path>
          </svg>{" "}
          How Fiverr Works
        </button>
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold mt-14">
        Most popular in {jobType?.tenLoaiCongViec}
      </h3>
      <div className="relative">
        <div
          ref={scrollRef}
          className="overflow-scroll mt-5 py-1 scrollbar-hide"
        >
          <div className="flex gap-4 w-[2460px]">
            <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-semibold">
                  Minimalist Logo Design
                </h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101633/Illustration_2x.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-semibold">IIIustration</h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/55b9d6349057bb9fe177ea57e2d92f30-1670570507381/Web%20Design.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-semibold">Website Design</h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-semibold">
                  Architecture & Interior Design
                </h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ace985608fce227eb6477959645d09ed-1680446271839/ai%20atrists.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-semibold">AI Artists</h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-semibold">Editing</h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-semibold">
                  T-Shirts & Merchandise
                </h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5987755afeb2d9ea01871fdee90a9a05-1670570470543/Product%20_%20industrial%20design.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-semibold">
                  Industrial & Product Design
                </h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101621/Social%20Media%20Design_2x.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-semibold">
                  Social Media Design
                </h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <button
            className="absolute top-[-70px] right-[30px] sm:right-[80px] translate-y-5 translate-x-[-25px] transform  py-2 px-3 rounded-full box-shadow z-50 bg-[#FFFFFF]"
            onClick={() => scroll("left")}
          >
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z"></path>
            </svg>
          </button>
          <button
            className="absolute top-[-70px] right-[40px] sm:right-[80px]  translate-y-5 translate-x-[25px] py-2 px-3 rounded-full box-shadow z-50 bg-[#FFFFFF]"
            onClick={() => scroll("right")}
          >
            <svg
              width="8"
              height="16"
              viewBox="0 0 8 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
