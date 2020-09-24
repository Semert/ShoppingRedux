import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepettenCikar } from "../actions";

const Cart = (props) => {
  console.log(props.cart);
  const toplam = props.cart?.reduce((amount, item) => amount + item.price, 0);

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link>{" "}
        <span>Sepetim {props.cart.length}</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{toplam.toFixed(2)}</h3>
      {props.cart.map((book) => (
        <div className="book" key={book}>
          <img src={book.image} alt={book} />

          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378;{book.price}</p>
            <p>Toplam: &#8378;19.99</p>
            <button>-</button>
            <button onClick={() => props.sepettenCikar(book.id)}>
              Sepetten Çıkar
            </button>
            <button>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { sepettenCikar })(Cart);
