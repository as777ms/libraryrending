import Amazonprime from "../../components/amazonprime/amazonprime";
import Cart from "../../components/cart/cart";
import Creativity from "../../components/creativity/creativity";
import Perevod from "../../components/perevod/perevod";
import Slider from "../../components/slider/snider";
import SwiperIntro from "../../components/swiperIntro/swiperIntro";
import Swipper from "../../components/swipper/swipper";

const PostPage = ({ prime }) => {
  return (
    <>
      <div className="lg:pl-[200px]">
        <Cart />
        {/* <SwiperIntro /> */}
        <Slider />
        <Swipper />
        <Amazonprime prime={prime} />
        <Creativity />
      </div>
    </>
  );
};

export default PostPage;