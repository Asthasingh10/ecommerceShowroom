import React, { useEffect, useState } from "react";
import UploadProduct from "../components/UploadProduct";
import SummerApi from "../common";
import AdminProductCart from "../components/AdminProductCart";

const AllProduct = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummerApi.allProduct.url);
    const dataResponse = await response.json();
    setAllProduct(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Product</h2>
        <button
          className="border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all py-1 px-3 rounded-full"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>

      {/* all products */}
      <div className="flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll">
        {allProduct.map((product) => (
          <AdminProductCart
            data={product}
            key={product.id} // Ensure that 'id' is a unique identifier for each product
            fetchdata={fetchAllProduct}
          />
        ))}
      </div>

      {/* upload product component */}
      {openUploadProduct && (
        <UploadProduct onClose={() => setOpenUploadProduct(false)} fetchData={fetchAllProduct} />
      )}
    </div>
  );
};

export default AllProduct;
