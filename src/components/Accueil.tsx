import { useState } from "react";
import { Caption, Slide, SlideContainer } from "../styles/Accueil.style";

/**
 * this function do ...
 */
export default function Accueil() {
  function checkDisplay(display: boolean) {
    return display === true;
  }
  const [imageList, setImageList] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const indexMax = imageList.length-1;
  function avance() {
    const initTable = Array(6).fill(false);
    const indexCourant = imageList.findIndex(checkDisplay);
    let newIndex = 0;
    if (indexCourant < indexMax) {
      newIndex = indexCourant + 1;
    }
    const newTable = initTable.map((display, index) => {
      if (index !== newIndex) {
        return display;
      } else {
        return true;
      }
    });
    setImageList(newTable)
  }

  function recule() {
    const initTable = Array(6).fill(false);
    const indexCourant = imageList.findIndex(checkDisplay);
    let newIndex = indexMax;
    if (indexCourant > 0) {
      newIndex = indexCourant - 1;
    }
    const newTable = initTable.map((display, index) => {
      if (index !== newIndex) {
        return display;
      } else {
        return true;
      }
    });
    setImageList(newTable)
  }

  setTimeout(avance, 3000);
  return (
    <>
      <h1>Carousel-Slider</h1>
      <SlideContainer>
        {imageList.map((value: boolean, index: number) => (
          <Slide display={value} key={index}>
            <img src={`/src/images/image_${index}.jpg`} />
            <Caption>{`Caption image_${index}`}</Caption>
          </Slide>
        ))}
        <button onClick={avance}>+++++++++</button>
        <button onClick={recule}>---------</button>
      </SlideContainer>
    </>
  );
}
