import { a } from "@react-spring/web";
import { Slider } from "../component/slider";
import { items } from "../data/item";
import Header from "../component/header";
import { Link } from "react-router-dom";
import Template from "../component/template";
import MainNav from "../component/main-nav";

import styles from "../styles/style.module.css";

export default function Hero() {
  return (
    <>
      <Template>
        <MainNav />
        <div className="w-full px-20 h-screen  flex py-20 justify-center bg-[#faf7f1] relative ">
          <div className={styles.main}>
            <Header />
            <Slider items={items} width={1000} height={400} visible={3}>
              {({ css }, i) => (
                <Link to={items[i].url}>
                  <div className={styles.content}>
                    {/* marker tu nomor */}
                    <a.div className={`${styles.image} group relative  bg-black`} style={{ backgroundImage: css }}>
                      <div className="relative p-4 sm:p-6 lg:p-8">
                        {/* tag */}
                        <p className="text-xl font-medium uppercase  p-2 bg-black text-pink-500 inline-block">{items[i].tag}</p>
                        {/* title  */}
                        <p className="text-6xl font-bold text-white ">{items[i].title}</p>
                      </div>
                    </a.div>
                  </div>
                </Link>
              )}
            </Slider>
          </div>
        </div>
      </Template>
    </>
  );
}
