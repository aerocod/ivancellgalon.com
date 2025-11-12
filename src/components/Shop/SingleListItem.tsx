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

const SingleListItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();

  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };
  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e) e.preventDefault(); // Stop link navigation on button
    dispatch(addItemToCart({ ...item, quantity: 1 }));
  };
  const handleItemToWishList = () => {
    dispatch(addItemToWishlist({ ...item, status: "available", quantity: 1 }));
  };

  // Internal card layout for reuse
  const CardContent = (
    <div className="flex">
      <div className="shadow-list relative overflow-hidden flex items-center justify-center max-w-[270px] w-full sm:min-h-[270px] p-4">
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
      <div className="w-full flex flex-col gap-5 sm:flex-row sm:items-center justify-center sm:justify-between py-5 px-4 sm:px-7.5 lg:pl-11 lg:pr-12">
        <div>
          <h3 className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5">
            {item.title}
          </h3>
          <span className="flex items-center gap-2 font-medium text-lg">
            <span className="text-dark">Rp{item.discountedPrice}</span>
            <span className="text-dark-4 line-through">Rp{item.price}</span>
          </span>
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
      </div>
    </div>
  );

  // Make the whole card link if item.link exists
  return item.link ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-lg bg-white shadow-1 block"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {CardContent}
    </a>
  ) : (
    <div className="group rounded-lg bg-white shadow-1">
      {CardContent}
    </div>
  );
};

export default SingleListItem;
