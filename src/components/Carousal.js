import React, { useState } from "react";

import Slider from "react-slick";
import { CARD_DATA } from "./constant";

import DialogComponent from "./DialogComponent";
import AddNewCard from "./AddNewCard";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselCard() {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [settings, setSettings] = useState(config);
  const [openDialog,setOpenDialog] = useState(false);
  const [openNewCardDialog,setOpenNewCardDialog] = useState(false);


  return (
    <div classname="App">
      <h3>Cards</h3>
      <Slider {...settings}>
        <div onClick={() => setOpenNewCardDialog(!openNewCardDialog)}>
          <div
            style={{
              border: "1px dashed grey",
              width: "350px",
              height: "190px",
              textAlign: "center",
              paddingTop: "30px",
              marginTop: "10px",
              borderRadius: '2%'
            }}
          >
            <div className="card-body">
              <AddCircleIcon
                style={{ backgroundColor: "#00000", fontSize: "18px" }}
              />
              <p style={{fontSize: '18px',fontWeight:'bolder',paddingBottom: '10px',paddingTop: '15px'}} >Add New Card</p>
            </div>
          </div>
        </div>

        {CARD_DATA.map((v, i) => {
          return (
            <div style={{ padding: "15px" }} onClick={() => setOpenDialog(!openDialog)}>
              <div
                key={i.toString()}
                style={{
                  height: "200px",
                  padding: "10px",
                  margin: "10px",
                  backgroundColor: v.color,
                  borderRadius: '2%'
                }}
              >
                <div className="card-body">
                  <div style={{fontSize: '18px',fontWeight:'bolder',color:'#ffffff',paddingBottom: '10px',paddingTop: '15px'}}>{v.card_name}</div>
                  <div className="card-text"style={{fontSize: '18px',fontWeight:'bolder',color:'#ffffff',paddingBottom: '5px'}} >{v.card_last_four}</div>
                  <p style={{fontSize: '18px',fontWeight:'bolder',color:'#ffffff',paddingBottom: '2px'}}> Expiry</p>
                  <div className="card-text"style={{fontSize: '18px',fontWeight:'bolder',color:'#ffffff',paddingBottom: '10px'}} >{v.expiry}</div>

                </div>
              </div>
              {openDialog ? (
                  <div>
                  <p>{v.card_name}
                  </p>
          <DialogComponent open={openDialog} name={v.card_name} card_data={v}/>
          </div>
        ) : null}
        {openNewCardDialog ? (
          <AddNewCard open={openNewCardDialog} />
        ) : null}
            </div>
          );
        })}
      </Slider>
      
    </div>
  );
}

export default CarouselCard;
