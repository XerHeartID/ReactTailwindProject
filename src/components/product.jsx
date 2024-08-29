function Product({ img, name, price, sold }) {
  return (
    <div className="flex flex-col flex-1 border rounded-xl">
      <img src={img} alt="" className=" w-full"/>
      <div className="p-3">
        <p>{name}</p>
        <p className="font-bold">{price}</p>
        <p>{sold}</p>
      </div>
    </div>
  );
}

export default Product;
