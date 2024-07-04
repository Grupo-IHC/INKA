export const savingData = (cartItems, cartTotalQuantity, cartTotalAmount, delivery, contact, id) => {
  const {contactName, address, contactDni, typeDelivery, method_payment} = contact;

  return {
    order_detail: cartItems.map(item => ({
      product: item.id,
      design_image: item.design,
      price: item.total,
      quantity: item.quantity,
    })),
    client: id,
    price_total: cartTotalAmount + delivery,
    address,
    contact: contactName,
    contact_dni: contactDni,
    quantity: cartTotalQuantity,
    type_delivery: typeDelivery,
    method_payment
  }
}