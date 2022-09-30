// Full Refund Example
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
window.dataLayer.push({
  event: "refund",
  ecommerce: {
    transaction_id: "T12345", // Transaction ID. Required for purchases and refunds.
  },
});

// Partial Refund Example
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
window.dataLayer.push({
  event: "refund",
  ecommerce: {
    currency: "USD",
    transaction_id: "T_12345",
    value: 12.21,
    affiliation: "Google Merchandise Store",
    coupon: "SUMMER_FUN",
    shipping: 3.33,
    tax: 1.11,
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        currency: "USD",
        discount: 2.22,
        index: 0,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "green",
        location_id: "L_12345",
        price: 9.99,
        quantity: 1,
      },
    ],
  },
});
