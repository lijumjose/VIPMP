# Error codes specific to Flexible Discounts

The following error codes are specific to Flexible Discounts:

| Error Code | Message                                                                                                                                                                                                   | Applicable API calls | HTTP Status Code |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|------------------|
| 2141       | Customer is not qualified for the flexible discount. <br /> "additionalDetails": [ "Line Item: 1, Reason: Invalid Flexible Discount" ]                                                                 |    Create Order, <br /> Preview Order,  <br />  Update Subscription, <br />  Create Subscription               |    400              |
| 2142     | This Flexible Discount is for one-time use and is no longer available.                                                                 |    Get Flexible Discounts               |    400              |
| 2144       | Flexible Discount cannot be applied in combination with other discounts. <br />  |       Create Order, <br /> Preview Order,  <br />  Update Subscription, <br />  Create Subscription             |  400                |
| 2145       | Flexible discount codes cannot be applied to non-base products.                 |    Create Order, <br /> Preview Order,  <br />  Update Subscription, <br />  Create Subscription                |    400              |
| 2146     | Invalid Flexible Discount Code |    Create Order, <br /> Preview Order,  <br />  Update Subscription, <br />  Create Subscription                |    400              |
| 2147      | Only one Flexible Discount Code is allowed per line item.   |    Create Order, <br /> Preview Order,   <br />  Update Subscription, <br />  Create Subscription               |    400              |

## Sample Error Responses

1. Sample error response of API when customer tries to use a flexible discount code for which the customer is not eligible:

**HTTP Code:** 400 Bad Request

```json
{
  "code": "2141",
  "message": "Customer is not qualified for the Flexible Discount",
  "additionalDetails": [
    "Line Item: 1, Reason: Invalid Flexible Discount"
  ]
}
```

2. Sample error response of API when customer tries to use a flexible discount code that does not exist:

**HTTP Code:** 400 Bad Request

```json
{
    "code": "2146",
    "message": "Invalid Flexible Discount Code",
    "additionalDetails": [
        "Line Item: 1, Reason: NOT_FOUND"
    ]
}
```

2. Sample error response of API when customer tries to use multiple flexible discount codes within the same line item:

**HTTP Code:** 400 Bad Request

```json
{
    "code": "2147",
    "message": "Only one Flexible Discount Code is allowed per line item",
    "additionalDetails": [
        "Line Item: 1"
    ]
}
```
