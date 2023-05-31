import styles from "./index.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./subcomponents/CarouselItem";
import { CarouselItems } from "./utils/carouseltems";

const Product = () => {
    return (
        <div className={styles.product_section} id="products">
            <h2>Products</h2>
            <Carousel
                additionalTransfrom={0}
                centerMode={false}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 1,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 1,
                    },
                }}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                slidesToSlide={1}
            >
                {CarouselItems.map((item, index) => (
                    <CarouselItem
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        text={item.text}
                        productItems={item.productItems}
                        imgSource={item.imgSource}
                    />
                ))}
                
            </Carousel>
        </div>
    );
};

export default Product;
