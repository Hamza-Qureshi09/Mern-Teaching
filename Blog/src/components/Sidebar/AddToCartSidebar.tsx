import React from "react";
import { useSelector } from "react-redux";
import { IAddToCartState } from "../../store/services/AddToCart";
import { IoClose } from "react-icons/io5";

type Props = {};

const AddToCartSidebar = (props: Props) => {
  const { toggleAddToCartSidebar, productCards } = useSelector(
    (state: IAddToCartState) => state.addtocartSlice
  );

  return (
    <>
      {toggleAddToCartSidebar && (
        <aside
          className="fixed top-[70px] right-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0 h-[calc(100vh-70px)] bg-red-500"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              {productCards?.some((val) => val.id.toString() !== "")
                ? productCards.map((val, index) => {
                    return (
                      <div key={index}>
                        <IoClose />
                        <li>
                          ID:{val.id}
                          name:{val.name}
                          price:{val.price}
                        </li>
                      </div>
                    );
                  })
                : "No Product Available"}
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default AddToCartSidebar;
