import React, { Suspense } from "react";
import { a } from "@react-spring/web";
import { Slider } from "../component/slider";
import { items } from "../data/item";
import Header from "../component/header";
import Placeholder from "/placeholder.png";
import { Link } from "react-router-dom";

import styles from "../styles/style.module.css";

export default function Hero() {
  const Earth = React.lazy(() => import("../component/earth/index"));

  return (
    <>
      <div className="w-full px-20 h-screen  flex py-20 justify-center bg-[#faf7f1] relative ">
        <div className={styles.main}>
          <Header />
          {/* <div className="flex items-center justify-center w-full h-[600px] absolute">
            <Suspense fallback={<img src={Placeholder} className="h-[40vw] " alt="Loading..." />}>
              <Earth />
            </Suspense>
          </div> */}
          <div className="font-bold text-gray-700 rounded-full absolute bg-red-600 flex items-center justify-center font-mono" style={{ height: "500px", width: "500px", fontSize: "170px" }}>
            404
          </div>
          <Slider items={items} width={1000} height={400} visible={3}>
            {({ css }, i) => (
              <Link to={items[i].url}>
                <div className={styles.content}>
                  {/* marker tu nomor */}
                  <a.div className={`${styles.image} group relative block bg-black`} style={{ backgroundImage: css }}>
                    <div className="relative p-4 sm:p-6 lg:p-8">
                      {/* tag */}
                      <p className="text-xl font-medium uppercase  p-2 bg-black text-pink-500 inline-block">Developer</p>
                      {/* title  */}
                      <p className="text-6xl font-bold text-white ">{items[i].title}</p>
                      {/* desc */}
                      <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">{items[i].desc}</div>
                      </div>
                    </div>
                  </a.div>
                </div>
              </Link>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}
