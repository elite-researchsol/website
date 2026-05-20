"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./PromoPopup.css";

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Slide in after a short delay so it feels natural
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setVisible(false);
  const handleOpen  = () => setVisible(true);

  return (
    <>
      {/* ── Popup panel ── */}
      <div className={`promo-popup ${visible ? "promo-popup--visible" : ""}`}>
        {/* Close button */}
        <button
          className="promo-popup__close"
          onClick={handleClose}
          aria-label="Close promotion"
        >
          &times;
        </button>

        {/* Flyer image */}
        <a
          href="https://wa.me/918884833011"
          target="_blank"
          rel="noopener noreferrer"
          className="promo-popup__link"
        >
          <Image
            src="/Flyer.jpeg"
            alt="Elite Research Solutions – WhatsApp us now"
            width={280}
            height={320}
            className="promo-popup__image"
            priority
          />
        </a>
      </div>

      {/* ── Reopen tab (shown only when popup is closed) ── */}
      <button
        className={`promo-tab ${visible ? "promo-tab--hidden" : "promo-tab--visible"}`}
        onClick={handleOpen}
        aria-label="Open Elite Research Solutions offer"
      >
        <span className="promo-tab__text">Offers</span>
      </button>
    </>
  );
}
