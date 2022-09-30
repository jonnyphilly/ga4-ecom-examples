window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ ecommerce: null });
window.dataLayer.push({
  event: 'add_payment_info',
  ecommerce: {
    currency: 'USD',
    value: 7.77,
    coupon: 'SUMMER_FUN',
    payment_type: 'Credit Card',
    items: [
      {
        item_name: 'Finnish magical parka',
        item_id: 'mp1122',
        price: '31.10',
        item_brand: 'PARKA4LIFE',
        item_category: 'Apparel',
        item_category2: 'Coats',
        item_category3: 'Parkas',
        item_category4: 'Unisex',
        item_variant: 'Navy blue',
        quantity: '3',
      },
      {
        item_name: 'Parka stain removal',
        item_id: 'psr1332',
        price: '5.99',
        item_brand: 'PARKA4LIFE',
        item_category: 'Apparel',
        item_category2: 'Utility',
        item_category3: 'Care product',
        quantity: '1',
      },
    ],
  },
});
