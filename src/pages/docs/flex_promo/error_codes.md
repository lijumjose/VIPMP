# Error codes specific to Flexible Promotions

The following error codes are specific to Flexible Promotions:

| Error Code | Message                                                                                                                                                                                                   | Applicable API calls | HTTP Status Code |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|------------------|
| 2141       | "message": "Customer is not qualified for the promotion", <br /> "additionalDetails": [ "Line Item: 1, Reason: MARKET_SEGMENT_MISMATCH" ]                                                                 |    Create Order <br /> Preview Order                  |    400              |
| 2144       | "message": "Promo code cannot be applied in combination with other discounts",   <br /> "additionalDetails": [ "Line Item: 1, Reason: Promo code cannot be applied in combination with other discounts" ] |       Create Order <br /> Preview Order               |  400                |
| 2145       | "message": "Promotional codes cannot be applied to non-base products",   <br /> "additionalDetails": [ "Line Item: 1, Reason: Promotional codes cannot be applied to non-base products" ]                 |    Create Order <br /> Preview Order                  |    400              |
| 2146     | Invalid promo code   <br /> Additional details: [Reason: NOT_FOUND" ]|    Create Order <br /> Preview Order                  |    400              |
| 2147      | Only one promo code is allowed per line item.   |    Create Order <br /> Preview Order                  |    400              |
