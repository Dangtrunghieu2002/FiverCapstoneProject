import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { congViecService } from "../../service/congViec.service";
import { useSelector } from "react-redux";
import { Dropdown, Space } from "antd";

const ListJobPage = () => {
  const [seachParam, setSearchParam] = useSearchParams();
  const [listJob, setListJob] = useState();
  const { listJobApi } = useSelector((state) => state.congViecSlice);
  console.log(listJobApi)
  console.log(seachParam.get("tenCongViec"));
  useEffect(() => {
    let tenCongViec = seachParam.get("tenCongViec");
    congViecService
      .layCongViecTheoTen(tenCongViec)
      .then((res) => {
        console.log(res);
        setListJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [seachParam.get("tenCongViec")]);
  return (
    <>
      <div className="border-b h-[47px]">
        <div className="container flex justify-between gap-3">
          {listJobApi.map((item, index) => {
            return (
              <>
                {/* <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <h3 className="text-[#747897] text-sm xl:text-lg font-medium hover:border-b-2 hover:border-green-500 h-full py-2">
                    {item.tenLoaiCongViec}
                  </h3>
                </Dropdown> */}
                <div class="relative inline-block text-left dropdown">
                  <h3 className="text-[#747897] text-sm xl:text-lg font-medium hover:border-b-2 hover:border-green-500 h-full py-2">
                    {item.tenLoaiCongViec}
                  </h3>
                  <div class="dropdown-menu origin-top-right absolute right-0 mt-2 w-[400px] p-5 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <div class="py-1">
                      <div className="flex gap-10 items-center">
                        <div>
                          <h3 className="font-semibold mb-2">Logo & Branch Identity</h3>
                          <p className="py-1 text-gray-700 hover:bg-gray-100 hover:cursor-pointer">Logo Design</p>
                          <p className="py-1 text-gray-700 hover:bg-gray-100 hover:cursor-pointer">Brand Style Guides</p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Web & App Design</h3>
                          <p className="py-1 text-gray-700 hover:bg-gray-100">Web Design</p>
                          <p className="py-1 text-gray-700 hover:bg-gray-100">App Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <h3 className="text-[#747897] text-sm xl:text-lg font-medium py-2 hover:border-b-2 hover:border-green-500 h-full">
            Business
          </h3>
          <h3 className="text-[#747897] text-sm xl:text-lg font-medium py-2 hover:border-b-2 hover:border-green-500 h-full">
            Consulting
          </h3>
        </div>
      </div>
      <div className="container">
        <h1 className="text-5xl font-bold">
          Danh sách công việc dưạ theo từ khoá:{" "}
          {seachParam.get("tenCongViec") ? seachParam.get("tenCongViec") : ""}
        </h1>
        <div className="grid grid-cols-4 gap-5 mt-10">
          {listJob?.map((item, index) => {
            return (
              <div className="space-y-4 border rounded-md">
                <img src={item.congViec.hinhAnh} className="w-full" alt="" />
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <h4 className="font-bold text-lg">{item.tenNguoiTao}</h4>
                  </div>
                  <div>
                    <h3>{item.congViec.tenCongViec}</h3>
                    <p>
                      <span className="text-yellow-400 space-x-2">
                        <i class="fa-solid fa-star"> </i>
                        {item.congViec.saoCongViec}{" "}
                      </span>
                      <span className="text-gray-400">
                        ({item.congViec.danhGia})
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <i class="fa-solid fa-heart"></i>
                    <p>
                      Starting at <span>$15</span>
                    </p>
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
