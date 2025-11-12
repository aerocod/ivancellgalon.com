"use client";
import React from "react";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";

const SingleGridItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();

  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };
  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e) e.preventDefault(); // Prevent link if button is clicked
    dispatch(addItemToCart({ ...item, quantity: 1 }));
  };
  const handleItemToWishList = () => {
    dispatch(addItemToWishlist({ ...item, status: "available", quantity: 1 }));
  };

  // Make entire card clickable if there's a link
  const CardContent = (
    <>
      <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-white shadow-1 min-h-[270px] mb-4">
        <Image src={item.imgs.previews[0]} alt="" width={250} height={250} />
        <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-blue text-white ease-out duration-200 hover:bg-blue-dark"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2.5 mb-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src="/images/icons/icon-star.svg"
              alt="star icon"
              width={15}
              height={15}
            />
          ))}
        </div>
        <p className="text-custom-sm">({item.reviews})</p>
      </div>
      <h3 className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5">
        {item.title}
      </h3>
      <span className="flex items-center gap-2 font-medium text-lg">
        <span className="text-dark">Rp{item.discountedPrice}</span>
        <span className="text-dark-4 line-through">Rp{item.price}</span>
      </span>
    </>
  );

  // If item.link exists, wrap card in <a>, else static card
  return item.link ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {CardContent}
    </a>
  ) : (
    <div className="group">{CardContent}</div>
  );
};

export default SingleGridItem;
