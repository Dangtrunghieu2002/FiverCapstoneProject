// Trang công việc

import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { congViecService } from "../../service/congViec.service";
import { useSelector } from "react-redux";
import { path } from "../../common/path";
import UserNav from "../../components/userNav/userNav";

const ListJobPage = () => {
  const [seachParam, setSearchParam] = useSearchParams();
  const [listJob, setListJob] = useState([]);
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  if (seachParam.get("tenCongViec")) {
    useEffect(() => {
      let tenCongViec = seachParam.get("tenCongViec");
      congViecService
        .layCongViecTheoTen(tenCongViec)
        .then((res) => {
          setListJob(res.data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [seachParam.get("tenCongViec")]);
  } else {
    useEffect(() => {
      let tenCongViec = seachParam.get("maChiTietLoai");
      congViecService
        .layCongViecTheoMaChiTietLoai(tenCongViec)
        .then((res) => {
          setListJob(res.data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [seachParam.get("maChiTietLoai")]);
  }
  return (
    <>
      <UserNav />
      <div className="py-4 px-5 sm:px-3 lg:px-0 border-b bg-[#F5F5F5]">
        <div className="container flex gap-2 items-center">
          <h3 className="text-lg font-semibold mr-5">Suggested</h3>
          <h3 className="py-1 px-3 bg-[#fff] border-[1px] rounded-md text-sm font-medium hover:border-black hover:bg-[#EFEFF0]">
            website development
          </h3>
          <h3 className="py-1 px-3 bg-[#fff] border-[1px] rounded-md text-sm font-medium hover:border-black hover:bg-[#EFEFF0]">
            logo design
          </h3>
          <h3 className="py-1 px-3 bg-[#fff] border-[1px] rounded-md text-sm font-medium hover:border-black hover:bg-[#EFEFF0]">
            website design
          </h3>
          <h3 className="py-1 px-3 bg-[#fff] border-[1px] rounded-md text-sm font-medium hover:border-black hover:bg-[#EFEFF0]">
            website
          </h3>
          <h3 className="py-1 px-3 bg-[#fff] border-[1px] rounded-md text-sm font-medium hover:border-black hover:bg-[#EFEFF0]">
            graphic design
          </h3>
          <h3 className="py-1 px-3 bg-[#fff] border-[1px] rounded-md text-sm font-medium hover:border-black hover:bg-[#EFEFF0]">
            video editing
          </h3>
          <h3 className="py-1 px-3 bg-[#fff] border-[1px] rounded-md text-sm font-medium hover:border-black hover:bg-[#EFEFF0]">
            seo
          </h3>
        </div>
      </div>
      <div className="container py-10 px-5 sm:px-3 lg:px-0">
        <h1 className="text-3xl">
          Results for{" "}
          <span className="font-bold">
            {seachParam.get("tenCongViec")
              ? seachParam.get("tenCongViec")
              : "List job"}
          </span>
        </h1>
        <div className="flex justify-between items-end">
          <div className="mt-10 flex gap-3 items-center">
            <div className="flex gap-2 items-center px-7 py-3 rounded-lg border hover:bg-[#F5F5F5]">
              <h3 className="font-bold">Category</h3>
              <svg
                width="12"
                height="12"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path>
              </svg>
            </div>
            <div className="flex gap-2 items-center px-7 py-3 rounded-lg border hover:bg-[#F5F5F5]">
              <h3 className="font-bold">Service options</h3>
              <svg
                width="12"
                height="12"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path>
              </svg>
            </div>
            <div className="flex gap-2 items-center px-7 py-3 rounded-lg border hover:bg-[#F5F5F5]">
              <h3 className="font-bold">Seller details</h3>
              <svg
                width="12"
                height="12"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path>
              </svg>
            </div>
            <div className="flex gap-2 items-center px-7 py-3 rounded-lg border hover:bg-[#F5F5F5]">
              <h3 className="font-bold">Budget</h3>
              <svg
                width="12"
                height="12"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path>
              </svg>
            </div>
            <div className="flex gap-2 items-center px-7 py-3 rounded-lg border hover:bg-[#F5F5F5]">
              <h3 className="font-bold">Delivery time</h3>
              <svg
                width="12"
                height="12"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path>
              </svg>
            </div>
          </div>
          <div>
            <label class="inline-flex items-end cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 border-none"></div>
              <span class="ms-3 text-xl font-medium text-gray-900 dark:text-gray-300">
                Pro Service
              </span>
            </label>
          </div>
        </div>
        <div className="flex justify-between">
          <h3 className="mt-10 mb-5 text-[#74767E] text-lg font-semibold">
            {getRandomNumber(100, 1000)}+ results
          </h3>
          <div className="flex items-center">
            <h3 className="text-[#74767E] text-lg font-semibold">Sort by:</h3>
            <span className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer font-bold">
              Relevance{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
                className="mt-[2px]"
              >
                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-7 mt-3">
          {listJob?.map((item, index) => {
            return (
              <div className="rounded-md">
                <img
                  src={item.congViec.hinhAnh}
                  className="w-full rounded-xl"
                  alt=""
                />
                <div className="py-4 flex flex-col justify-between">
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={item.avatar}
                      alt=""
                      className="w-7 h-7 rounded-full"
                    />
                    <h4 className="font-bold text-lg">{item.tenNguoiTao}</h4>
                  </div>
                  <div className="space-y-2">
                    <h3>{item.congViec.tenCongViec}</h3>
                    <p>
                      <span className="space-x-1">
                        <i class="fa-solid fa-star"></i>
                        <span className="font-bold">{item.congViec.saoCongViec} </span>
                      </span>
                      <span className="text-gray-400">
                        ({item.congViec.danhGia})
                      </span>
                    </p>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-semibold text-lg">
                      From US
                      {getRandomNumber(100, 1999).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
};

export default ListJobPage;
