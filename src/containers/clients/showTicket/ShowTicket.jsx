import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetTicket } from "./module/action";

export default function ShowTicket() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { ticket } = useSelector((state) => state.ticketReducer)
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      dispatch(actGetTicket());

      setLoading(false);
    }, 1000);
    return () => clearTimeout(timing);
  }, []);

  return (
    <>
      <h1>This is ticket</h1>
    </>
  );
}
