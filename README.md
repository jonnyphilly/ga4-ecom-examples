# Google Analytics 4 eCommerce Events

For use by Be Found Online's clients to optimize reporting for Google Analytics 4 eCommerce.

## Events Supported

| Action (Event Name) | Description                                                            |
| ------------------- | ---------------------------------------------------------------------- |
| view_promotion      | User views a promotional page or banner in the DOM                     |
| select_promotion    | User clicks on a promotion                                             |
| view_item_list      | View of items in a list (for example category pages or search results) |
| view_item           | User views an item page or modal                                       |
| select_item         | User clicks on an item in a list or on a page                          |
| add_to_cart         | User adds an item to their cart                                        |
| add_to_wishlist     | User adds an item to their wishlist                                    |
| remove_from_cart    | User removes an item from their cart                                   |
| view_cart           | User views the contents of the shopping cart                           |
| begin_checkout      | User initiates the checkout process                                    |
| add_shipping_info   | User adds their shipping info during the checkout flow                 |
| add_payment_info    | User adds their payment info during the checkout flow                  |
| purchase            | User completes a purchase                                              |
| refund              | One or more items is refunded                                          |

## Parameter Glossary

| Name           | Type        | Example                                                             | Description                                                                                                                                                                                                                                                                                    |
| -------------- | ----------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| currency       | string      | USD                                                                 | Currency of the items associated with the event, in 3-letter ISO 4217 format.                                                                                                                                                                                                                  |
| value          | number      | 12.34                                                               | The monetary value of the event.                                                                                                                                                                                                                                                               |
| coupon         | string      | 'summer_sale'                                                       | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent.                                                                                                                                                                                  |
| payment_type   | string      | "Credit Card"                                                       | The chosen method of payment.                                                                                                                                                                                                                                                                  |
| items          | array<item> |                                                                     | An array of item objects for the event.                                                                                                                                                                                                                                                        |
| item_id        | string      | "SKU_12345"                                                         | The ID of the item.                                                                                                                                                                                                                                                                            |
| item_name      | string      | "Be Found Online T-Shirt"                                           | The name of the item.                                                                                                                                                                                                                                                                          |
| affiliation    | string      | "Be Found Online Webstore"                                          | A product affiliation to designate a supplying company or brick and mortar store location.                                                                                                                                                                                                     |
| discount       | number      | 1.23                                                                | The monetary discount value associated with the item.                                                                                                                                                                                                                                          |
| index          | number      | 7                                                                   | The index/position of the item in a list.                                                                                                                                                                                                                                                      |
| item_brand     | string      | "BFO Merch"                                                         | The brand of the item.                                                                                                                                                                                                                                                                         |
| item_category  | string      | "Clothing"                                                          | The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.                                                                                                                                                                            |
| item_category2 | string      | "T-Shirts"                                                          | The second category hierarchy or additional taxonomy for the item.                                                                                                                                                                                                                             |
| item_category3 | string      | "Men"                                                               | The third category hierarchy or additional taxonomy for the item.                                                                                                                                                                                                                              |
| item_category4 | string      | "Short Sleeve"                                                      | The fourth category hierarchy or additional taxonomy for the item.                                                                                                                                                                                                                             |
| item_category5 | string      | "Fall 2022"                                                         | The fifth category hierarchy or additional taxonomy for the item.                                                                                                                                                                                                                              |
| item_list_id   | string      | "new_arrivals"                                                      | The ID of the list in which the item was presented to the user.                                                                                                                                                                                                                                |
| item_list_name | string      | "New Arrivals"                                                      | The name of the list in which the item was presented to the user.                                                                                                                                                                                                                              |
| item_variant   | string      | "blue"                                                              | The item variant or unique code or description for additional item details/options.                                                                                                                                                                                                            |
| location_id    | string      | ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) | The physical location associated with the item (e.g. the physical store location). It's recommended to use the [Google Place ID](https://developers.google.com/maps/documentation/places/web-service/place-id) that corresponds to the associated item. A custom location ID can also be used. |
| price          | number      | 19.99                                                               | The monetary price of the item, in units of the specified currency parameter.                                                                                                                                                                                                                  |
| quantity       | number      | 1                                                                   | Item quantity. If not set, quantity is set to 1.                                                                                                                                                                                                                                               |

## Best Practices

Always clear the eCommerce data layer object before pushing a new event to the data layer. This prevents events from affecting each other in circumstances like having multiple events on the same page and also with single page applications.

This eCommerce data layer object can be cleared by adding the snippet below before each `dataLayer.push` event.

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
```

### Resources

- [Measure ecommerce - Google Analytics Documentation](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce?client_type=gtm)
