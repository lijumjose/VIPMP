# Error codes specific to Flexible Discounts

The following error codes are specific to Flexible Discounts:

| Error Code | Message                                                                                                                                                                                                   | Applicable API calls | HTTP Status Code |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|------------------|
| 2141       | Customer is not qualified for the flexible discount. <br /> "additionalDetails": [ "Line Item: 1, Reason: Invalid Flexible Discount" ]                                                                 |    Create Order <br /> Preview Order                  |    400              |
| 2144       | Flexible Discount cannot be applied in combination with other discounts. <br />  |       Create Order <br /> Preview Order               |  400                |
| 2145       | Flexible discount codes cannot be applied to non-base products.                 |    Create Order <br /> Preview Order                  |    400              |
| 2146     | Invalid Flexible Discount Code |    Create Order <br /> Preview Order                  |    400              |
| 2147      | Only one Flexible Discount code is allowed per line item.   |    Create Order <br /> Preview Order                  |    400              |
