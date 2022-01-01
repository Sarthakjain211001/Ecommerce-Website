import React from "react";
import "./ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";

const ProductList = () => {
   
  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch();
  
  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])
  
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 150,
      renderCell: (props) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={props.row.img} alt="" />
            {props.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (props) => {
        return (
          <>
            <Link to={"/product/" + props.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(props.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="products">
      <Link to="/newProduct" style={{"marginLeft":"900px"}}>
                    <button className="productAddButton">Create</button>
          </Link>
      <DataGrid  style={{"marginTop":"10px", "height": "400px"}}
        rows={products}
        columns={columns}
        pageSize={5}
        getRowId={row => row._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick //To prevent the row from getting selected when we click anywhere on the row.
      />
    </div>
  );
};

export default ProductList;
