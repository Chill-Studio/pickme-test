/* @todo Add a description */
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";


const images = [
    new URL('../../assets/images/image-product-1.jpeg', import.meta.url).href,
    new URL('../../assets/images/image-product-2.jpeg', import.meta.url).href,
    new URL('../../assets/images/image-product-3.jpeg', import.meta.url).href,
    new URL('../../assets/images/image-product-4.jpeg', import.meta.url).href,
];


interface Props { }
export const Caroussel = ({ }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    // any for props since the typing is not correct from the librarie (the type is {option : {...}}) wich is wrong
    const customRenderItem = (item: JSX.Element, props: any) => {
        const { isSelected, isPrevious, ...restProps } = props;
        return (
            <item.type {...item.props} {...restProps} style={{ borderRadius: 15 }} />
        );
    };

    const customRenderThumb = (children: JSX.Element[]) => {
        return children.map((item, i) => {
            const props = item.props;
            return (
                <img
                    {...props}
                    key={"thumb" + i}
                    alt="azeaz"
                    style={{
                        borderRadius: 15,
                        border: selectedIndex === i ? "3px solid orange" : "transparent"
                    }}
                />
            );
        });
    };



    return (
        <Carousel
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            renderItem={customRenderItem}
            renderThumbs={customRenderThumb}
            onChange={(index) => {
                setSelectedIndex(index);
            }}
        >
            {images.map((img, aBadKey) => {
                return <img alt="Some alt todo" src={img} key={aBadKey} />;
            })}
        </Carousel>

    );
}


/*
   const customArrowRight = (clickHandler, hasPrev, label) => {
       return (
           <div
               onClick={clickHandler}
               style={{
                   position: "absolute",
                   zIndex: 2000,
                   right: 12,
                   top: " 43%",
                   height: 25,
                   width: 25,
                   borderRadius: 100,
                   backgroundColor: "white",
                   color: "black",
                   alignItems: "center",
                   display: "flex",
                   justifyContent: "center"
               }}
           >
               {">"}
           </div>
       );
   };

   const customArrowLeft = (clickHandler, hasPrev, label) => {
       return (
           <div
               onClick={clickHandler}
               style={{
                   position: "absolute",
                   zIndex: 2000,
                   left: 12,
                   top: " 43%",
                   height: 25,
                   width: 25,
                   borderRadius: 100,
                   backgroundColor: "white",
                   color: "black",
                   alignItems: "center",
                   display: "flex",
                   justifyContent: "center"
               }}
           >
               {"<"}
           </div>
       );
   };

     true && (
               <Carousel
                   showIndicators={false}
                   showStatus={false}
                   showArrows={true}
                   renderItem={customRenderItem}
                   renderThumbs={customRenderThumb}
                   onChange={(index) => {
                       setSelectedIndex(index);
                   }}
                   renderArrowNext={customArrowRight}
                   renderArrowPrev={customArrowLeft}
               >
                   {images.map((img, i) => {
                       return <img alt="azea" src={img} key={i + "overlay"} />;
                   })}
               </Carousel>
               )
   */