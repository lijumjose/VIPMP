
# Manage Flexible Discounts using APIs

You can use the following APIs to get details of available flexible discounts and apply them when placing an order:

- [Get Flexible Discounts](#get-flexible-discounts)
- [Create Order and Preview Order](#create-order-and-preview-order)
- [Get Order](#get-order)
- [Get Order History](#get-order-history-of-a-customer)

## Get Flexible Discounts

Use the `GET Flexible Discounts` API to fetch flexible discounts applicable to a product:

| Endpoint       | Method |
|----------------|--------|
| /v3/flex-dicounts | GET    |

### Request

Sample Request URL: `GET <ENV>/v3/flex-dicounts?market-segment=COM&country=US`

### Query parameters  

**Note:** Request Query parameters such as Market segment and country will be validated against the Partner's contract data. You can also use other query parameters that are listed in the following table:

| Parameter       | Type             | Mandatory | Description                                                                 | Range/Limits                                                                 |
|-----------------|------------------|-----------|-----------------------------------------------------------------------------|------------------------------------------------------------------------------|
| market-segment  | String           | Yes       | Get flexible discounts by market segment. Example: "COM", "EDU".                 |      3 characters                                                                        |
| country         | String           | Yes       | Get flexible discounts by country using the ISO 3166-1 alpha-2 code. Example: "US", "IN". |         2 or 3 characters                                                                     |
| offer-ids       | Array of strings | No        | Provide a comma-separated list of Offer IDs to retrieve applicable flexible discounts. Example: 65322535CA04A12, 86322535CA04A12 |                                                                              |
| flex-discount-id      | String           | No        | Retrieve a flexible discount by its unique ID. This endpoint returns a single, unique flexible discount object. <br /> If flex-discount-id query param is provided in the request, other non-mandatory params cannot be provided in the same request.       |      Max: 40 characters                                                                        |
| start-date      | String (date)    | No        | Filter flexible discounts that were available on or after this moment in time. This date can be without timestamp or with timestamp in Zulu time format. For example, “2025-05-02" or "2025-05-02T22:49:54Z" |                                                                              |
| end-date        | String (date)    | No        | Filter flexible discounts that were available on or before this moment in time. This date can be without timestamp or with timestamp in Zulu time format. For example, “2025-05-02" or "2025-05-02T22:49:54Z" |                                                                              |
| limit           | Integer          |  No         | Define the number of items to be returned in the response. Default: 20, Max: 50. |                                                                              |
| offset          | Integer          |  No         | Set the start offset for the result items. Default: 0                        |                                                                              |

**Sample request URL with all query parameters:** `<ENV>/v3/flex-discounts?market-segment=COM&country=US&offer-ids=65322535CA04A12,86322535CA04A12&flex-discount-code=BLACK_FRIDAY&start-date=2025-03-01&end-date=2025-03-31&limit=20&offset=0`

### Request Header  

See [Headers](../references/api_headers.md) section.  

### Request Body  

None.

### Response

```json
{
  "limit": 20,
  "offset": 0,
  "count": 2,
  "totalCount": 2,
  "flexDiscounts": [
    {
      "id": "55555555-313b-476c-9d0b-6a610d5b91e0",
      "name": "Black Friday Flexible Discount",
      "description": "Exclusive fixed discount on CC All Apps in US",
      "code": "BLACK_FRIDAY_15",
      "startDate": "2025-06-01T00:00:01Z",
      "endDate": "2025-12-31T23:59:59Z",
      "status": "ACTIVE",
      "qualification": {
        "baseOfferIds": [
          "65322535CA01A12",
          "86322535CA01A12"
        ]
      },
      "outcomes": [
        {
          "type": "FIXED_DISCOUNT",
          "discountValues": [
            {
              "country": "US",
              "currency": "USD",
              "value": 15
            }
          ]
        }
      ]
    },
    {
      "id": "55555555-313b-476c-9d0b-6a610d5dpe567",
      "name": "Christmas Flexible Discount",
      "description": "Exclusive 20% off on CC All Apps in US",
      "code": "CHRISTMAS_2025_20",
      "startDate": "2025-12-01T00:00:01Z",
      "endDate": "2025-12-31T23:59:59Z",
      "status": "ACTIVE",
      "qualification": {
        "baseOfferIds": [
          "65322535CA01A12",
          "86322535CA01A12"
        ]
      },
      "outcomes": [
        {
          "type": "PERCENTAGE_DISCOUNT",
          "discountValues": [
            {
              "value": 20
            }
          ]
        }
      ]
    }
  ],
  "links": {
    "self": {
      "uri": "/v3/flex-discounts?market-segment=COM&country=US&limit=20&offset=0",
      "method": "GET",
      "headers": []
    },
    // next link will be present only if the next resource is present 
    "next": {
      "uri": "/v3/flex-discounts?market-segment=COM&country=US&limit=20&offset=20",
      "method": "GET",
      "headers": []
    },
    // prev link will be present only if a previous resource is present
    "prev": {
      "uri": "/v3/flex-discounts?market-segment=COM&country=US&limit=20&offset=0",
      "method": "GET",
      "headers": []
    }
  }
}
```

### Response parameters

| Parameter                       | Type             | Description                                                                 |
|---------------------------------|------------------|-----------------------------------------------------------------------------|
| limit                            | String           |  Number of items to be included in the current response.                 |
| offset                            | 	String |Offset applied for the current response.                                                 |
| count                            | String           | The count of flexible discount entities included in the current response.                                                       |
| totalCount                            | String           |   Total count of flexible discount entities, if no limit was applied.                                                   |
| flexDiscounts                            | Object           | Provides details of the available flexible discounts.                                                       |

#### flexDiscounts object

| Parameter                       | Type             | Description                                                                 |
|---------------------------------|------------------|-----------------------------------------------------------------------------|
| id                            | String           | A unique identifier for the flexible discount. Used to retrieve or reference a specific flexible discount.                                                       |
| name                            | String           | Name of the flexible discount.                                                       |
| description                     | String           | Description of the flexible discount. It also provides additional details about the eligibility criteria for the flexible discount. For example, "Exclusive 20% off for Teams customers of CC All Apps in US"                                               |
| code                            | String           | The code that needs to be used in the order and will reflect in the invoice. It will be unique across flexible discounts. |
| endDate                         | String (Date)    | Final date when the flexible discount can be used.                                   |
| startDate                       | String (Date)    | First date when the flexible discount can be used                                   |
| status                          | String Enum      | Status of flexible discount. Possible values: ACTIVE, EXPIRED                       |
| qualification                   | Object           |                                                                             |
| qualification.baseOfferIds      | Array of Strings | List of Base Offer IDs of products eligible for flexible discount. Example: ["Offer ID 1", "Offer ID 2"] <br />**Note**: The list of base Offer IDs will be empty if the flexible discount applies to all products. |
| outcomes[]                      | Array of Objects |                                                                             |
| outcomes[] → type               | String           | Type of flexible discount. Possible values are: PERCENTAGE_DISCOUNT, FIXED_DISCOUNT  |
| outcomes[].discountValues[]          | Array of Objects |                                                                             |
| outcomes[].discountValues[] → country| String           | Country Code: ISO 3166-1 alpha-2 code. Example: "US", "IN". Note: Not applicable for PERCENTAGE_DISCOUNT type. |
| outcomes[].discountValues[] → currency| String          | Currency Code: ISO 4217. Example: "USD", "EUR". Note: Not applicable for PERCENTAGE_DISCOUNT type. |
| outcomes[].discountValues[] → value  | Integer          | The discount value. For example, if the value is 15: 15% discount is applicable if the type is PERCENTAGE DISCOUNT. A discount of 15 USD, or any currency provided in the response, is applicable for the FIXED_DISCOUNT discount type. |

### Sample Response (Failure)

On failure, the response includes the appropriate HTTP status code based on the reason or type of failure. For example, if the API key is invalid, the response has HTTP 403 (Forbidden):

```json
{ "code": "4115", "message": "Api Key is invalid or missing" }
```

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | Successfully fetched the flexible discounts |
| 400         | Bad request                                 |
| 401         | Invalid Authorization token                 |
| 403         | Invalid API Key                             |
| 404         | Invalid request                             |

## Create Order and Preview Order

Pass the `flex-discount-code` at the lineItems level in the `Create Order` and `Preview Order` requests.

| Endpoint                               | Method |
|----------------------------------------|--------|
| `/v3/customers/<customer-id>/orders`     | POST   |

### Request Header

See [Headers](../references/api_headers.md) section.

### Request Body

The following sample request shows how to apply a flexible discount code to a Create Order request to get a discounted price:

```json
{ 
   "orderType": "NEW", // NEW or PREVIEW   
   "externalReferenceId": "759", 
   "currencyCode": "USD", 
   "lineItems": [ 
     { 
       "extLineItemNumber": 1, 
       "offerId": "80004567CA01A12", 
       "quantity": 1, 
       "currencyCode": "USD", 
       "flexDiscountCodes": ["SUMMER_SALE_123"] 
     }, 
     { 
       "extLineItemNumber": 2, 
       "offerId": "80004561CA02A12", 
       "quantity": 11, 
       "currencyCode": "USD", 
       "flexDiscountCodes": ["WINTER_SALE_123"] 
     } 
   ] 
 } 
 ```

The `flexDiscountCodes` parameter in the above request indicates the flexible discount codes applied to the Order.

### Response

```json
{ 
   "referenceOrderId": "", 
   "orderType": "NEW", 
   "externalReferenceId": "759", 
   "customerId": "9876543210", 
   "orderId": "5120008001", 
   "currencyCode": "USD", 
   "creationDate": "2019-05-02T22:49:54Z", 
   "status": "1002", 
   "lineItems": [ 
     { 
       "extLineItemNumber": 1, 
       "offerId": "80004567CA01A12", 
       "quantity": 1, 
       "status": "1002", 
       "subscriptionId": "", 
       "currencyCode": "USD", 
       "flexDiscounts": [ 
                  { 
                      "id": "55555555-313b-476c-9d0b-6a610d5b91e0",
                      "code": "SUMMER_SALE_123", 
                      "result": "SUCCESS", 
                   } 
         ] 
     }, 
     { 
       "extLineItemNumber": 2, 
       "offerId": "80004561CA02A12", 
       "quantity": 11, 
       "status": "1002", 
       "subscriptionId": "", 
       "currencyCode": "USD", 
       "flexDiscounts": [ 
                  { 
                      "id": "55522355-313b-476c-9d0b-7a710f4h83s4",
                      "code": "WINTER_SALE_123", 
                      "result": "SUCCESS", 
                   } 
         ] 
     } 
   ], 
   "links": { // As existing response fields } 
 } 
 ```

 The following table provides the flexible discount details included in the response:

| Name               | Type   | Description                                                   |
|--------------------|--------|---------------------------------------------------------------|
| flexDiscounts        | Object | Details of the flexible discount applied to that lineItem             |
| flexDiscounts[].id  | String | A unique identifier for the promotion. Used to retrieve or reference a specific flexible discount.          |
| flexDiscounts[].code  | String | The flexible discount code that was applied to that lineItem          |
| flexDiscount[].result| String | The “SUCCESS" indicates that the flexible discount code applicability was successful. |

### HTTP Status Codes

Same as the standard [Create Order](../order_management/create_order.md) request.

## Get Order

The [GET Order](../order_management/get_order.md) API response also includes the flexible discount applied to the order.

| Endpoint                                        | Method |
|-------------------------------------------------|--------|
| `/v3/customers/<customer-id>/orders/<order-id>` | GET    |

### Request Header

See [Headers](../references/api_headers.md) section.  

### Request Body

None.

### Response

```json
{ 
   "referenceOrderId": "", 
   "orderType": "NEW", 
   "externalReferenceId": "759", 
   "customerId": "9876543210", 
   "orderId": "5120008001", 
   "currencyCode": "USD", 
   "creationDate": "2019-05-02T22:49:54Z", 
   "status": "1000", 

"lineItems": [ 
     { 
       "extLineItemNumber": 1, 
       "offerId": "80004567CA01A12", 
       "quantity": 1, 
       "status": "1000", 
       "subscriptionId": "", 
       "currencyCode": "USD", 
       "flexDiscounts": [ 
                  { 
                      "id": "55555555-313b-476c-9d0b-6a610d5b91e0",
                      "code": "SUMMER_SALE_123", 
                      "result": "SUCCESS", 
                   } 
         ] 
    }, 
     { 
       "extLineItemNumber": 2, 
       "offerId": "80004561CA02A12", 
       "quantity": 11, 
       "status": "1000", 
       "subscriptionId": "", 
       "currencyCode": "USD", 
       "flexDiscounts": [ 
                  { 
                      "id": "55522355-313b-476c-9d0b-7a710f4h83s4",
                      "code": "WINTER_SALE_123", 
                      "result": "SUCCESS", 
                   } 
         ] 
    } 
   ],  "links": { // As existing response fields } 
 },
```

### HTTP Status Codes

The same as the standard Get Order API.

## Get Order History of a Customer

The `Get Order History` API to fetch flexible discounts applicable to a product:

| Endpoint                             | Method |
|--------------------------------------|--------|
| `/v3/customers/<customer-id>/orders` | GET    |

### Request Header  

See [Headers](../references/api_headers.md) section.

### Request Body  

None.

### Response

```json
{ 
   "items": [ 
{ 
   "referenceOrderId": "", 
   "orderType": "NEW", 
   "externalReferenceId": "759", 
   "customerId": "9876543210", 
   "orderId": "5120008001", 
   "currencyCode": "USD", 
   "creationDate": "2019-05-02T22:49:54Z", 
   "status": "1000", 
   "lineItems": [ 
     { 
       "extLineItemNumber": 1, 
       "offerId": "80004567CA01A12", 
       "quantity": 1, 
       "status": "1000", 
       "subscriptionId": "", 
       "currencyCode": "USD", 
       "flexDiscounts": [ 
                  { 
                       "id": "55555555-313b-476c-9d0b-6a610d5b91e0",
                      "code": "SUMMER_SALE_123", 
                      "result": "SUCCESS", 
                   } 
         ] 
    }, 
     { 
       "extLineItemNumber": 2, 
       "offerId": "80004561CA02A12", 
       "quantity": 11, 
       "status": "1000", 
       "subscriptionId": "", 
       "currencyCode": "USD", 
       "flexDiscounts": [ 
                  { 
                       "id": "55522355-313b-476c-9d0b-7a710f4h83s4",
                      "code": "WINTER_SALE_123", 
                      "result": "SUCCESS", 
                   } 
         ] 

    } 
   ], 
   "links": { // As existing response fields } 
 } 
] 
} 
```

### HTTP Status Codes

The same as the standard [Get Order History API](../order_management/get_order.md).
