import React from "react";
import { useDispatch } from "react-redux";
import { Product, productCardsAddition } from "../../store/services/AddToCart";

type Props = {};
interface productStuc {
  id: number;
  name: string;
  price: number;
}

const Products = (props: Props) => {
  const dispatch = useDispatch();
  const [Products] = React.useState<Array<productStuc>>([
    {
      id: 1,
      name: "shirt1",
      price: 2345,
    },
    {
      id: 2,
      name: "pent1",
      price: 345,
    },
    {
      id: 3,
      name: "shirt2",
      price: 979,
    },
  ]);

  const AddProductIntoCard = (recivedProduct: Product) => {
    console.log(recivedProduct);

    dispatch(
      productCardsAddition({
        product: recivedProduct,
      })
    );
  };

  return (
    <div className="container flex flex-row justify-center items-center flex-wrap mt-12 gap-2">
      {/* product card */}
      {Products.map((val, index) => {
        return (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            {/* <a href="#">
              <img
                className="rounded-t-lg"
                src="/vite.svg"
                alt=""
              />
            </a> */}
            {val.id}
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {val.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {val.price}
              </p>
              <button
                onClick={() => AddProductIntoCard(val)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add To Cart
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
