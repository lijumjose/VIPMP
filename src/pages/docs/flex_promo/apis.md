
# Manage Flexible Promotions Using APIs

You can use the following APIs to get details of available promotions and apply them when placing an order:

- [Get Flexible Promotions](#get-promotions)
- [Create Order and Preview Order](#create-order-and-preview-order)
- [Get Order](#get-order)
- [Get Order History](#get-order-history-of-a-customer)

## Get Promotions

Use the `GET Promotions` API to fetch promotions applicable to a product:

| Endpoint       | Method |
|----------------|--------|
| /v3/promotions | GET    |

### Request

Sample Request URL: `GET <ENV>/v3/promotions?market-segment=COM&country=US`

### Query parameters  

**Note:** Request Query parameters such as Market segment and country will be validated against the Partner's contract data. You can also use other query parameters that are listed in the following table:

| Parameter       | Type             | Mandatory | Description                                                                 | Range/Limits                                                                 |
|-----------------|------------------|-----------|-----------------------------------------------------------------------------|------------------------------------------------------------------------------|
| market-segment  | string           | Yes       | Get promotions by market segment. Example: "COM", "EDU".                 |      3 characters                                                                        |
| country         | string           | Yes       | Get promotions by country using the ISO 3166-1 alpha-2 code. Example: "US", "IN". |         2 or 3 characters                                                                     |
| offer-ids       | array of strings | No        | Provide a comma-separated list of Offer IDs to retrieve applicable promotions. Example: 65322535CA04A12, 86322535CA04A12 |   Max: 40 characters                                                                           |
| promo-code      | string           | No        | Filter promotions by promotion code. Example: "DIWALI", "BLACK_FRIDAY"                |      Max: 40 characters                                                                        |
| start-date      | string (date)    | No        | Filter promotions that were available on or after this moment in time. This date can be without timestamp or with timestamp in Zulu time format. For example, “2025-05-02" or "2025-05-02T22:49:54Z" |                                                                              |
| end-date        | string (date)    | No        | Filter promotions that were available on or before this moment in time. This date can be without timestamp or with timestamp in Zulu time format. For example, “2025-05-02" or "2025-05-02T22:49:54Z" |                                                                              |
| limit           | integer          |           | Define the number of items to be returned in the response. Default: 20, Max: 50. |                                                                              |
| offset          | integer          |           | Set the start offset for the result items. Default: 0                        |                                                                              |

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
  "promotions": [
    {
      "name": "Black Friday Promotion",
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
          "discounts": [
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
      "name": "Christmas Promotion",
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
          "discounts": [
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
      "uri": "/v3/promotions?market-segment=COM&country=US&limit=20&offset=0",
      "method": "GET",
      "headers": []
    },
    // next link will be present only if the next resource is present 
    "next": {
      "uri": "/v3/promotions?market-segment=COM&country=US&limit=20&offset=20",
      "method": "GET",
      "headers": []
    },
    // prev link will be present only if a previous resource is present
    "prev": {
      "uri": "/v3/promotions?market-segment=COM&country=US&limit=20&offset=0",
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
| count                            | String           | The count of promotion entities included in the current response.                                                       |
| totalCount                            | String           |   Total count of promotion entities, if no limit was applied.                                                   |
| name                            | String           | Name of the Promotion.                                                       |
| description                     | String           | Description of the Promotion. It also provides additional details about the eligibility criteria for the promotion. For example, "Exclusive 20% off for Teams customers of CC All Apps in US"                                               |
| code                            | String           | The code that needs to be used in the order and will reflect in the invoice. It will be unique across promotions. |
| endDate                         | String (Date)    | Final date when the Promotion can be used                                   |
| startDate                       | String (Date)    | First date when the Promotion can be used                                   |
| status                          | String Enum      | Status of promotion. Possible values: ACTIVE, EXPIRED                       |
| qualification                   | Object           |                                                                             |
| qualification.baseOfferIds      | Array of Strings | List of Base Offer IDs of products eligible for promotion. Example: ["Offer ID 1", "Offer ID 2"] <br />**Note**: The list of base Offer IDs will be empty if the promotion applies to all products. |
| outcomes[]                      | Array of Objects |                                                                             |
| outcomes[] → type               | String           | Type of Promotion. Possible values are: PERCENTAGE_DISCOUNT, FIXED_DISCOUNT  |
| outcomes[].discounts[]          | Array of Objects |                                                                             |
| outcomes[].discounts[] → country| String           | Country Code: ISO 3166-1 alpha-2 code. Example: "US", "IN". Note: Not applicable for PERCENTAGE_DISCOUNT type. |
| outcomes[].discounts[] → currency| String          | Currency Code: ISO 4217. Example: "USD", "EUR". Note: Not applicable for PERCENTAGE_DISCOUNT type. |
| outcomes[].discounts[] → value  | Integer          | The discount value. For example, if the value is 15: 15% discount is applicable if the type is PERCENTAGE DISCOUNT. A discount of 15 USD, or any currency provided in the response, is applicable for the FIXED_DISCOUNT discount type. |

### Sample Response (Failure)

On failure, the response includes the appropriate HTTP status code based on the reason or type of failure. For example, if the API key is invalid, the response has HTTP 403 (Forbidden):

```json
{ "code": "4115", "message": "Api Key is invalid or missing" }
```

| Status Code | Description                         |
|-------------|-------------------------------------|
| 200         | Successfully fetched the promotions |
| 400         | Bad request                         |
| 401         | Invalid Authorization token         |
| 403         | Invalid API Key                     |
| 404         | Invalid request                     |

## Create Order and Preview Order

Pass the promo code at the lineItems level in the `Create Order` and `Preview Order` requests.

| Endpoint                               | Method |
|----------------------------------------|--------|
| `/v3/customers/<customer-id>/orders`     | POST   |

### Request Header

See [Headers](../references/api_headers.md) section.

### Request Body

The following sample request shows how to apply a promotion code to a Create Order request to get a discounted price:

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
       "promotionCodes": ["SUMMER_SALE_123"] 
     }, 
     { 
       "extLineItemNumber": 2, 
       "offerId": "80004561CA02A12", 
       "quantity": 11, 
       "currencyCode": "USD", 
       "promotionCodes": ["WINTER_SALE_123"] 
     } 
   ] 
 } 
 ```

The `promotionCodes` parameter in the above request indicates the promotion codes applied to the Order.

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
       "promotions": [ 
                  { 
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
       "promotions": [ 
                  { 
                      "code": "WINTER_SALE_123", 
                      "result": "SUCCESS", 
                   } 
         ] 
     } 
   ], 
   "links": { // As existing response fields } 
 } 
 ```

 The following table provides the promotion details included in the response:

| Name               | Type   | Description                                                   |
|--------------------|--------|---------------------------------------------------------------|
| promotions         | Object | Details of the promotion applied to that lineItem             |
| promotions[].code  | String | The promotion code that was applied to that lineItem          |
| promotions[].result| String | The “SUCCESS" indicates that the promotion code applicability was successful. |

### HTTP Status Codes

Same as the standard [Create Order](../order_management/create_order.md) request.

## Get Order

The [GET Order](../order_management/get_order.md) API response also includes the promotion applied to the order.

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
       "status": "1002", 
       "subscriptionId": "", 
       "currencyCode": "USD", 
       "promotions": [ 
                  { 
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
       "promotions": [ 
                  { 
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

The `Get Order History` API to fetch promotions applicable to a product:

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
       "status": "1002", 
       "subscriptionId": "", 
       "currencyCode": "USD", 
       "promotions": [ 
                  { 
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
       "promotions": [ 
                  { 
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
