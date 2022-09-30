window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
window.dataLayer.push({
  event: "view_promotion",
  ecommerce: {
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
        price: 9.99,
        quantity: 1,
        promotion_id: "sc2021",
        promotion_name: "summer_campaign_2021",
        creative_name: "family_in_bathing_suits_1",
        creative_slot: "featured_items",
        location_id: "hero_banner",
      },
    ],
  },
});
