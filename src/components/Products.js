import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepeteEkle } from "../actions";

const Products = (props) => {
  console.log(props.bookList);
  console.log(props.cart);

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim {props.cart.length}</Link>
      </h2>
      {props.bookList?.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book} />
          <div>
            <h4>{book.name}</h4>
            <p>{book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => props.sepeteEkle(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { sepeteEkle })(Products);
