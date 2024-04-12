import React from "react";

function IndividualSeat() {
  return (
    <>
      <img
        src={hovered === 1 ? HoverSeat : Seat}
        alt="logo"
        width="40px"
        className="individual-bus-hovered === id || ?HoverSeat:Seat"
        id="1"
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(0)}
        onClick={() => setSeatselected(!seatselected)}
      />
    </>
  );
}

export default IndividualSeat;
