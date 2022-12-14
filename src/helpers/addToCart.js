export default function addToCart({ _id, category }, navigate) {
  if (!localStorage.getItem('Cart')) {
    localStorage.setItem('Cart', JSON.stringify({ items: [{ _id: _id }] }));
    return;
  }

  const cart = JSON.parse(localStorage.getItem('Cart'));

  if (cart.items.find(item => item._id === _id)) {
    return alert('Produto já está no carrinho!');
  }

  cart.items.push({ _id: _id });
  localStorage.setItem('Cart', JSON.stringify(cart));
  return;
}