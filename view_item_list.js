window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
window.dataLayer.push({
  event: 'view_item_list',
  ecommerce: {
    items: [
      {
        item_id: 'SKU_12345',
        item_name: 'Stan and Friends Tee',
        affiliation: 'Google Merchandise Store',
        coupon: 'SUMMER_FUN',
        currency: 'USD',
        discount: 2.22,
        index: 0,
        item_brand: 'Google',
        item_category: 'Apparel',
        item_category2: 'Adult',
        item_category3: 'Shirts',
        item_category4: 'Crew',
        item_category5: 'Short sleeve',
        item_list_id: 'related_products',
        item_list_name: 'Related Products',
        item_variant: 'green',
        location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
        price: 9.99,
        quantity: 1,
      },
      {
        item_id: 'SKU_12346',
        item_name: "Google Grey Women's Tee",
        affiliation: 'Google Merchandise Store',
        coupon: 'SUMMER_FUN',
        currency: 'USD',
        discount: 3.33,
        index: 1,
        item_brand: 'Google',
        item_category: 'Apparel',
        item_category2: 'Adult',
        item_category3: 'Shirts',
        item_category4: 'Crew',
        item_category5: 'Short sleeve',
        item_list_id: 'related_products',
        item_list_name: 'Related Products',
        item_variant: 'gray',
        location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
        price: 20.99,
        promotion_id: 'P_12345',
        promotion_name: 'Summer Sale',
        quantity: 1,
      },
    ],
  },
});