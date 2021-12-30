import React from "react";
import "./ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../DummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const [data, setdata] = useState(productRows);

  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 150,
      renderCell: (props) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={props.row.img} alt="" />
            {props.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
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
            <Link to={"/product/" + props.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(props.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="products">
      <Link to="/newProduct" style={{"marginLeft":"1000px"}}>
                    <button className="productAddButton">Create</button>
          </Link>
      <DataGrid  style={{"marginTop":"10px"}}
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick //To prevent the row from getting selected when we click anywhere on the row.
      />
    </div>
  );
};

export default ProductList;
