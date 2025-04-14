
# Manage Recommendations using APIs

You can use the following APIs to provide in-context recommendations to your customer:

- [Fetch Recommendations](#fetch-recommendations)
- [Preview Order](#preview-order)
- [Preview Order Renewal](#preview-order-renewal)
- [Get Subscriptions](#get-subscription)
- [Get Order](#get-order)

## Fetch Recommendations

Use the `Fetch Recommendations` API call with appropriate query parameters to retrieve the relevant recommendations:

|**Endpoint** | **Method**|
|--- | ---|
|/recommendations | POST|

### Request Header

See [Headers section](../references/api_headers.md).

### Request Body

Here’s the sample request body:

```json
{
  "recommendationContext": "RENEWAL_ORDER_PREVIEW, GENERIC, ORDERS_VIEW",
  "customerId": "<CustomerId>",
  "offers": [
    {
      "offerId": "30005897CA01A12",
      "quantity": 10
    },
    {
      "offerId": "30006566CA14A12",
      "quantity": 5
    }
  ],
  "country": "JP",
  "recommendationType": "PRODUCT",
  "includeBaseOfferId": true
}
```

**Request parameters**

The following table lists the request parameters and their corresponding descriptions:

| **Parameter** | **Type** | **Description** | **Range/Limits** |
|-----|----------|----|------------------------|
| recommendationContext   | String   | The context in which recommendations are being requested. <br /> Values: <br /> - GENERIC: Fetches recommendations without any primary context, using all available information about a customer.<br /> - ORDER_PREVIEW: Fetches recommendations based on the products in the cart.<br /> - RENEWAL_ORDER_PREVIEW:  For AutoRenewal, it fetches recommendations based on Subscription Renewal preference. For ManualRenewal, it fetches the same recommendations as the ORDER_PREVIEW context. <br /> <br />The default value is GENERIC. | Max 40 characters |
| customerId  | String   | Unique identifier for the customer for whom recommendations are being requested. This is a mandatory parameter. |        |
| offers                  | Object   | List of offers for which recommendations are being fetched.   |                        |
| offerId                 | String   | Unique identifier for the offer (Part Number).     |    |
| quantity                | Integer  | Number of units of products in the cart.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                        |
| country                 | String   | Requested country for which recommendations should be fetched. If not provided, the customer's country will be used.                                                                                                                                                                                                                                                                                                                                                                                  |                        |
| recommendationType      | String   | Entity type for which recommendations are being requested. <br /><br /> Note: Currently, only the product recommendations are supported.                                                                                                                                                                                                                                                                                                                                                                   |                        |
| includeBaseOfferId      | String   | Indicates whether the response should include the Base OfferIDs. <br /> Possible values are: <br /> - true <br />- false <br /> The default value is false. <br /> Note: The response will always contain the ProductId, but this parameter will determine whether to include the BaseOfferId. Only clients using PriceList ExcelSheet need this.                                                                       |                        |

## Response

### Response Header

The following response header, added to all responses, provides data to understand how recommendations are working: `x-recommendation-tracker-id: <Some String identifier>`. Adobe can gain more insights and improve future recommendations based on the data collected from the tracker.

### Response Body

```json
{
  "productRecommendations": {
    "upsells": [
      {
        "rank": 0,
        "product": {
          "id": "30006208",
          "baseOfferId": "30006208CA01A12"
        },
        "source": {
          "sourceType": "OFFER",
          "offerIds": [
            "30005702CA01A12"
          ]
        },
      },
      {
        "rank": 1,
        "product": {
          "id": "65304921",
          "baseOfferId": "65304921CA01A12"
        },
        "source": {
          "sourceType": "OFFER",
          "offerIds": [
            "30005702CA01A12"
          ],
          "subscriptionIds": []
        },
      }
    ],
    "crossSells": [
      {
        "rank": 0,
        "product": {
          "id": "30006208",
          "baseOfferId": "30006208CA01A12"
        },
        "source": {
          "sourceType": "OFFER",
          "offerIds": [
            "30005702CA01A12"
          ]
        },
      }
    ],
    "addOns": [
      {
        "rank": 0,
        "product": {
          "id": "65304921",
          "baseOfferId": "65304921CA01A12"
        },
        "source": {
          "sourceType": "OFFER",
          "offerIds": [
            "30005702CA01A12"
          ],
          "subscriptionIds": []
        },
        "benefits": "",
        "tags": []
      }
    ]
  }
}
```

**Response parameters**

| **Parameter**             | **Type**                  | **Description**                                                                                                                                                                                                 | **Range/Limits** |
|---------------------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| productRecommendations    | Object                    | Contains different categories of recommended products.                                                                                                                                                          |                  |
| upsells                   | Array of Recommendations  | List of recommended products that offer more value by providing a higher-tier, premium, or enhanced version of the selected product or offer. Example: Adobe Photoshop to Adobe Creative Cloud All Apps          |                  |
| crossSells                | Array of Recommendations  | List of recommended products that complement the selected product by offering additional functionality or benefits. Example: Adobe Stock to Adobe Photoshop                                                      |                  |
| addOns                    | Array of Recommendations  | List of recommended products to extend or enhance the functionality of a base product. These products are not standalone and must be used in conjunction with the base product. Example: AI Assistant for Adobe Acrobat |                  |
| rank                      | Integer                   | The ranking position of the recommended product within its category.                                                                                                                                             |                  |
| product                   | Object                    | Details about the recommended product.                                                                                                                                                                          |                  |
| id                        | String                    | Unique identifier for the recommended product.                                                                                                                                                                  |                  |
| baseOfferId               | String                    | The base offer ID associated with the product.                                                                                                                                                                  |                  |
| source                    | Object                    | Indicates the source of the recommendation.                                                                                                                                                                     |                  |
| sourceType                | String                    | Specifies the type of the source entity. Currently only OFFER is supported.                                                                                                                                      |                  |
| offerIds                  | String Array              | List of offer IDs that contributed to this recommendation.                                                                                                                                                      |                  |
| subscriptionIds           | String Array              | List of subscription IDs that contributed to this recommendation (if applicable).                                                                |                  |

### HTTP Status Codes

| **Status Code** | **Description**                        |
|-----------------|----------------------------------------|
| 200             | Successfully fetched recommendations   |
| 400             | Bad request                            |
| 401             | Invalid Authorization token            |
| 403             | Invalid API Key                        |
| 429             | Too Many Requests                      |
| 500             | Internal Server Error                  |

## Preview Order

Use the `Preview Order API` to get the recommendations to display while previewing the order.

|**Endpoint** | **Method**|
|--- | ---|
|`/v3/customers/<customerId>/orders` | POST|

### Query parameters

You can use the following query parameters as shown in this request URL: `POST <cpapi-host>/v3/customers/<customerId>/orders?fetch_recommendations=true&recommendation_country=US`

| **Parameter Name**         | **Parameter Value** | **Is it Mandatory?** | **Default Value**       |
|----------------------------|---------------------|----------------------|-------------------------|
| fetch_recommendations      | - true <br /> - false | No                   | false                   |
| recommendation_country     | US, GB, and so on   | No                   | <Customer's country>    |

### Request header

See [Headers section](../references/api_headers.md).

### Request body

No change to the standard request payload. For example:

```json
{
  "externalReferenceId": "{{externalReferenceId}}",
  "orderType": "PREVIEW",
  "currencyCode": "USD",
  "lineItems": [
    {
      "extLineItemNumber": 1,
      "offerId": "65304479CA03A12",
      "quantity": 20,
      "currencyCode": "USD",
      "deploymentId": "12345"
    }
  ]
}
```

### Response

Response header: `x-recommendation-tracker-id: <Some String identifier>`

**Response body:**

```json
{ 
   "externalReferenceId": "9ddd98ba-2361-41c9-ae21-7feb04bf9cd", 
   "orderId": "ABCDORDER1", 
   "customerId": "1005513019", 
   "...": "..." 
   "lineItems":[ 
      { 
         "extLineItemNumber":1, 
         "...": "..." 
      } 
   ], 
   "creationDate":"2025-02-18T13:02:50Z" 
    "recommendations": { 
      "productRecommendations": { 
          "upsells": [...], 
          "crossSells": [...], 
          "addOns": [...] 
      } 
   } 
}
```

#### HTTP Status Code

No change from the standard [Preview Order API](../order_management/order_scenarios.md).

## Preview Order Renewal

Use the `Preview Renewal` API call with appropriate query parameters to fetch relevant recommendations:

|**Endpoint** | **Method**|
|--- | ---|
|`v3/customers/<customerId>/orders` | POST|

### Query Parameters

You can use the following query parameters as shown in this request URL: `POST <cpapi-host>/v3/customers/<customerId>/orders?fetch_recommendations=true&recommendation_country=US`

| **Parameter Name**         | **Parameter Value** | **Is it Mandatory?** | **Default Value**       |
|----------------------------|---------------------|----------------------|-------------------------|
| fetch_recommendations      | - true <br /> - false | No                   | false                   |
| recommendation_country     | US, GB, and so on   | No                   | <Customer's country>    |

### Request header

See [Headers section](../references/api_headers.md).

### Request body

No change to the standard request body. For example:

```json
{
    "externalReferenceId": "{{externalReferenceId}}",
    "referenceOrderId": "{{orderId}}",
    "orderType": "PREVIEW_RENEWAL",
    "currencyCode": "USD"
}
```

### Response

```json
{
    "externalReferenceId": "9ddd98ba-2361-41c9-ae21-7feb04bf9cd",
    "orderId": "",
    "lineItems": [
        {
            "extLineItemNumber": 1,
            "...": "..."
        }
    ],
    "eligibleOffers": [
        {
            "offerId": "65324918CA01V12",
            "discountCode": "CA01V12",
            "quantity": 25,
            "eligibleCustomer": "ALL"
        },
        {
            "": ""
        }
    ],
    "creationDate": "2025-02-18T13:02:50Z",
    "recommendations": {
        "productRecommendations": {
            "upsells": [...],
            "crossSells": [...],
            "addOns": [...]
        }
    }
}
```

### HTTP Status Code

| **Status Code** | **Description**            |
|-----------------|----------------------------|
| 202             | Order accepted             |
| 400             | Bad request                |
| 401             | Invalid Authorization token|
| 403             | Invalid API Key            |
| 404             | Invalid Customer ID        |

## Get Subscription

Use the `GET Subscriptions` API call with appropriate query parameters to fetch relevant recommendations:

|**Endpoint** | **Method**|
|--- | ---|
|`/v3/customers/<customerId>/subscriptions` | GET|

### Query Parameters

You can use the following query parameters as shown in this request URL: `POST <cpapi-host>/v3/customers/<customerId>/subscriptions?fetch_recommendations=true&recommendation_country=US`

| **Parameter Name**         | **Parameter Value** | **Is it Mandatory?** | **Default Value**       |
|----------------------------|---------------------|----------------------|-------------------------|
| fetch_recommendations      | - true <br /> - false | No                   | false                   |
| recommendation_country     | US, GB, and so on   | No                   | <Customer's country>    |

### Request header

See [Headers section](../references/api_headers.md).

### Request body

None.

### Response

```json
{
    "totalCount": 2,
    "items": [
        {
            "subscriptionId": "d76634e0c34cb2bb1057380b998cd2NA",
            "offerId": "65322587CA01A12",
            "currentQuantity": 5009,
            "usedQuantity": 0,
            "autoRenewal": {
                "enabled": true,
                "renewalQuantity": 5009
            },
            "creationDate": "2024-07-17T01:13:09Z",
            "renewalDate": "2025-07-17",
            "status": "1000",
            "currencyCode": "USD",
            "links": {
                "self": {
                    "uri": "/v3/customers/1005513019/subscriptions/d76634e0c34cb2bb1057380b998cd2NA",
                    "method": "GET",
                    "headers": []
                }
            }
        },
        {
            "subscriptionId": "da5410d3114d38b9ab6149fdb1f120NA",
            "offerId": "65304479CA01A12",
            "currentQuantity": 60,
            "usedQuantity": 0,
            "autoRenewal": {
                "enabled": true,
                "renewalQuantity": 60
            },
            "creationDate": "2025-01-07T19:25:46Z",
            "renewalDate": "2025-07-17",
            "status": "1000",
            "currencyCode": "USD",
            "links": {
                "self": {
                    "uri": "/v3/customers/1005513019/subscriptions/da5410d3114d38b9ab6149fdb1f120NA",
                    "method": "GET",
                    "headers": []
                }
            }
        }
    ],
    "links": {
        "self": {
            "uri": "/v3/customers/1005513019/subscriptions",
            "method": "GET",
            "headers": []
        }
    },
    "recommendations": {
        "productRecommendations": {
            "upsells": [...],
            "crossSells": [...],
            "addOns": [...]
        }
    }
}
```

#### HTTP Status Code

Same as the standard GET Subscriptions API.

## Get Order

Use the `GET Order API` call with appropriate query parameters to fetch relevant recommendations:

|**Endpoint** | **Method**|
|--- | ---|
|`/v3/customers/<customerId>/orders` | POST|

### Query Parameters

You can use the following query parameters as shown in this request URL: `POST <cpapi-host>/v3/customers/<customerId>/orders?fetch_recommendations=true&recommendation_country=US`

| **Parameter Name**         | **Parameter Value** | **Is it Mandatory?** | **Default Value**       |
|----------------------------|---------------------|----------------------|-------------------------|
| fetch_recommendations      | - true <br /> - false | No                   | false                   |
| recommendation_country     | US, GB, and so on   | No                   | <Customer's country>    |

#### Request header

See [Headers section](../references/api_headers.md).

#### Request body

None.

### Response

```json
{
   "totalCount":2,
   "count":2,
   "offset":0,
   "limit":25,
   "items":[
      {
         "referenceOrderId":"",
         "externalReferenceId":"240505012402240931",
         "orderId":"9203400470",
         "customerId":"1005513019",
         "currencyCode":"USD",
         "orderType":"NEW",
         "status":"1000",
         "lineItems":[
            {
               "extLineItemNumber":1,
               "offerId":"65322587CA12A12",
               "quantity":5000,
               "subscriptionId":"d76634e0c34cb2bb1057380b998cd2NA",
               "status":"1000"
            },
            {
               "extLineItemNumber":2,
               "offerId":"65322474CATAA12",
               "quantity":5000,
               "subscriptionId":"73d39c59a04e0f8f93fc5449e63721NA",
               "status":"1000"
            }
         ],
         "creationDate":"2024-07-18T12:32:33Z",
         "links":{
            "self":{
               "uri":"/v3/customers/1005513019/orders/9203400470",
               "method":"GET",
               "headers":[
                   
               ]
            }
         }
      },
      {
         "referenceOrderId":"",
         "externalReferenceId":"240717011236827259",
         "orderId":"9203398779",
         "customerId":"1005513019",
         "currencyCode":"USD",
         "orderType":"NEW",
         "status":"1000",
         "lineItems":[
            {
               "extLineItemNumber":1,
               "offerId":"65322651CA01A12",
               "quantity":9,
               "subscriptionId":"023b7bb4774e6fa0f597e25624b7f2NA",
               "status":"1000"
            },
            {
               "extLineItemNumber":2,
               "offerId":"65322587CA01A12",
               "quantity":9,
               "subscriptionId":"d76634e0c34cb2bb1057380b998cd2NA",
               "status":"1000"
            }
         ],
         "creationDate":"2024-07-17T01:12:39Z",
         "links":{
            "self":{
               "uri":"/v3/customers/1005513019/orders/9203398779",
               "method":"GET",
               "headers":[
                   
               ]
            }
         }
      }
   ],
   "links":{
      "self":{
         "uri":"/v3/customers/1005513019/orders?status=1000&start-date=2024-01-01T03%253A43%253A07Z&end-date=2025-01-31T00%253A00%253A00Z&limit=25&offset=0",
         "method":"GET",
         "headers":[
             
         ]
      }
   } 
   "recommendations": {
      "productRecommendations": {
          "upsells": [...],
          "crossSells": [...],
          "addOns": [...]
      }
   }
}
```

### HTTP Status Codes

Same as the standard [GET Order API](../order_management/get_order.md).

## Provide tracking data to Adobe to get improved recommendations

The following response header that is added to all responses provides data to understand how recommendations are working: `x-recommendation-tracker-id: <Some String identifier>`.

Adobe can get more insight and provide better recommendations based on the data collected from the tracker.
