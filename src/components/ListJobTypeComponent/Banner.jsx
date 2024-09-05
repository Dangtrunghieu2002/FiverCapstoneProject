import React from "react";

const Banner = ({ jobType }) => {
    console.log(jobType)
  return (
    <div className="container py-10 px-5 sm:px-3 lg:px-0">
      <div className="bg-[url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626459703/G_D-%20Desktop%20banner.png')]  h-[170px] md:h-[200px] lg:h-[250px] w-full bg-cover bg-center rounded-xl flex flex-col items-center justify-center ">
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
      <div className="mt-10">
        <h3 className="text-xl lg:text-2xl font-semibold">
          Most popular in {jobType?.tenLoaiCongViec}
        </h3>
        <div className="mt-5 block space-y-7 xl:space-y-0 xl:flex gap-4 ">
          <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
              alt=""
              className="w-[48px] h-[48px]"
            /> 
            <div className="flex items-center">
              <h3 className="text-[16px] font-semibold">Minimalist Logo Design</h3>
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
              <h3 className="text-[16px] font-semibold">Architecture & Interior Design</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
