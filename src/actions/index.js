export const sepeteEkle = (book) => {
  return {
    type: "SEPETE_EKLE",
    payload: book,
  };
};

export const sepettenCikar = (id) => {
  return {
    type: "SEPETTEN_CIKAR",
    payload: id,
  };
};
