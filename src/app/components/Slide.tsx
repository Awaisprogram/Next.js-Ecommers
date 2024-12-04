import Image from "next/image";
import s1 from '../images/banner-1.png'
import s2 from '../images/banner-2.png'
import s3 from '../images/banner-3.png'
import s4 from '../images/banner-4.png'
import s5 from '../images/banner-5.png'
import s6 from '../images/banner-6.png'
import s7 from '../images/banner-7.png'
import s8 from '../images/banner-8.png'

const Banner = () => {
  return (
    <section className="py-8 overflow-hidden bg-gray-100">
      <div className="flex items-center gap-32 w-max banner-scroll">
        <Image src={s1} alt="banner" height={20} width={150} />
        <Image src={s2} alt="banner" height={20} width={150} />
        <Image src={s3} alt="banner" height={20} width={150} />
        <Image src={s4}alt="banner" height={20} width={150} />
        <Image src={s5} alt="banner" height={20} width={150} />
        <Image src={s6} alt="banner" height={20} width={150} />
        <Image src={s7} alt="banner" height={20} width={150} />
        <Image src={s8} alt="banner" height={20} width={150} />
      </div>
    </section>
  );
};

export default Banner;
