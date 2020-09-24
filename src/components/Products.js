import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Products = (props) => {
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList?.map((book) => (
        <div className="book">
          <img src={book.image} alt={book} />
          <div>
            <h4>{book.name}</h4>
            <p>{book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps)(Products);
