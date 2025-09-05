# Manage mid-term upgrades through APIs

The Adobe Commerce Partner API provides comprehensive support for mid-term upgrade operations. The following functionalities are available:

- **Subscription-level upgrade eligibility**  
  Partners can retrieve eligible upgrade offers across all customer subscriptions.

- **Targeted subscription upgrade offers**  
  Partners can query upgrade eligibility for a specific subscription.

- **Upgrade path discovery by market segment, country, and language**  
  Partners can list all valid upgrade paths, filtered by market segment, country, and language.

- **Automatic user assignment**  
  A dedicated query parameter enables automatic reassignment of users to upgraded products during switch operations.

- **Switch order reversion**  
  Partners can initiate reversal of switch orders to restore the original subscription state.

The following steps are involved in the upgrade process:

- [Discover upgrade paths and preview switch plan](#discover-upgrade-path)
- [Apply Switch plan](#apply-switch-plan)
- [Verify the upgrade](#verify-switch-order)
- [Revert switch order](#revert-switch-order)

## Discover upgrade path

You can use the following APIs to get the available switch plans for customers:

- [Retrieve product recommendations using the Get Subscriptions API](#1-retrieve-product-recommendations-using-the-get-subscriptions-api)
- [Get Product Switch Paths](#3-retrieve-upgrade-path)
- [Preview Switch Order](#4-preview-switch-order)

### 1. Retrieve product recommendations using the Get Subscriptions API

You can use the `/v3/customers/{{customerId}}/subscriptions?fetch-recommendations=true` to get product recommendations.

The response lists the product recommendations and `switchType` parameter, which indicates whether the full quantity or only a portion of the original subscription can be upgraded to the new product.

Response sample:

```json
[...
...
{
   "productRecommendations":{
      "upsells":[
         {
            "rank":0,
            "product":{
               "baseOfferId":"30006208CA01A12"
            },
            "switchType": "FULL_ONLY/PARTIALLY_ALLOWED",
            "source":{
               "sourceType":"SUBSCRIPTION",
               "subscriptionIds":[
                  "AAAABBBB30005702CA01A12XXXX"
               ]
            }
         },
         {
            "rank":1,
            "product":{
               "baseOfferId":"65304921CA01A12"
            },
            "switchType": "FULL_ONLY/PARTIALLY_ALLOWED", 
            "source":{
               "sourceType":"SUBSCRIPTION",
               "subscriptionIds":[
                  "AAAABBBB30005702CA01A12XXXX"
               ]
            }
         }
      ],
      "crossSells":[
         {
            "rank":0,
            "product":{
               "baseOfferId":"30006208CA01A12"
            },
              
            "source":{
               "sourceType":"OFFER",
               "offerIds":[
                  "30005702CA01A12"
               ]
            }
         }
      ],
      "addOns":[
         {
            "rank":0,
            "product":{
               "baseOfferId":"65304921CA01A12"
            },
  
            "source":{
               "sourceType":"OFFER/SUBSCRIPTION",
               "offerIds":[
                  "30005702CA01A12"
               ]
            }
         }
      ]
   }
}
...
...
]
```

For more information on product recommendations, see [Managing product recommendations](../recommendations/index.md).

### 2. Get product recommendations in a specific Subscription

Use the `/v3/customers/{{customerId}}/subscriptions/:subscriptionId?fetch-recommendations=true` API to get subscription details by ID.

The response lists the product recommendations and `switchType` parameter, which indicates whether the full quantity or only a portion of the original subscription can be upgraded to the new product.

Sample response:

```json
{
...
   {
   "productRecommendations":{
      "upsells":[
         {
            "rank":0,
            "product":{
               "baseOfferId":"30006208CA01A12"
            },
            "switchType": "FULL_ONLY/PARTIALLY_ALLOWED", 
            "source":{
               "sourceType":"SUBSCRIPTION",
               "subscriptionIds":[
                  "AAAABBBB30005702CA01A12XXXX"
               ]
            }
         },
         {
            "rank":1,
            "product":{
               "baseOfferId":"65304921CA01A12"
            },
            "switchType": "FULL_ONLY/PARTIALLY_ALLOWED", 
            "source":{
               "sourceType":"SUBSCRIPTION",
               "subscriptionIds":[
                  "AAAABBBB30005702CA01A12XXXX"
               ]
            }
         }
      ],
      "crossSells":[
         {
            "rank":0,
            "product":{
               "baseOfferId":"30006208CA01A12"
            },
              
            "source":{
               "sourceType":"OFFER",
               "offerIds":[
                  "30005702CA01A12"
               ]
            }
         }
      ],
      "addOns":[
         {
            "rank":0,
            "product":{
               "baseOfferId":"65304921CA01A12"
            },
  
            "source":{
               "sourceType":"OFFER/SUBSCRIPTION",
               "offerIds":[
                  "30005702CA01A12"
               ]
            }
         }
      ]
   }
}
...
}
```

### 3. Retrieve Upgrade Path

The `GET Product Switch Paths` API enables Adobe partners to programmatically retrieve valid upgrade paths for customer subscriptions or offers, based on key business filters such as market segment, country, and language.

This API  helps partners enable customers to upgrade their product subscriptions mid-term, rather than waiting until the subscription anniversary. This capability unlocks immediate access to higher-tier products and features, while allowing Adobe and its partners to capture revenue opportunities without delay.

| Path                                                                 | Request Method |
|----------------------------------------------------------------------|----------------|
| `<env root url>/v3/product-switch-paths` | GET            |

#### Request

**Header:**

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

**Query parameters:**

| Parameter      | Required | Description                                                                                            |
|----------------|----------|--------------------------------------------------------------------------------------------------------|
| market-segment | Yes      | The market segment for which the upgrade path is applicable. |
| country        | Yes      | Specifies the country for which the upgrade path is applicable.                                        |
| offer-id       | No       | Fetches all upgrade paths available for the specified offer.                                               |
| language       | Yes      | Language for which they want upgrade paths.                                                            |

**Request body**

None.

**Request URL:** `/v3/product-switch-paths?market-segment=COM&country=US&language=MULT`

#### Response

```json
{
    "productUpgrades":[
        {
            "source": {
               "sourceType":"OFFER",
               "offerIds":[
                  "78342921CA01A12 "
               ],
            },
            "target":{
                "entityType": "OFFER",
                "scope": "PRODUCT_LIST",
                "family": "SIGN",
                "items":[
                            {
                                "sequence": 0,
                                "baseOfferId": "30006208CA01A12",
                                "switchType": "FULL/PARTIALLY_ALLOWED"
                            },
                            {
                                "sequence": 1,
                                "baseOfferId": "8734728CA01A12",
                                "switchType": "FULL/PARTIALLY_ALLOWED"
                            }
                        ]
 
                },
        {
            "source": {
               "sourceType":"OFFER",
               "offerIds":[
                  "783321921CA01A12 "
               ],
            },
            "target":{
                "entityType": "OFFER",
                "scope": "PRODUCT_LIST",
                "family": "SIGN",
                "items":[
                            {
                                "sequence": 0,
                                "baseOfferId": "432106208CA01A12",
                                "switchType": "FULL/PARTIALLY_ALLOWED"
                            },
                            {
                                "sequence": 1,
                                "baseOfferId": "54324728CA01A12",
                                "switchType": "FULL/PARTIALLY_ALLOWED"
                            }
                        ]
 
                }
    ]
}
```

Response parameters:

| Parameter|Required|Type|Description|
|--|--|--|--|
|productUpgrades|No|Object|Contains the list of available upgrade paths.|
|productUpgrades[].source                 | No       | Object             | Defines the source subscription or offer from which the customer can upgrade.                                |
| productUpgrades[].source.sourceType     | Yes      | String (enum)      | Specifies whether the source is a subscription or an offer.                                                     |
| productUpgrades[].source.offerIds       | No       | List<String>       | The offerIds from which customer can upgrade from; can be null if subscription ID is passed in the query. |
| productUpgrades[].target                       | Yes      | List<Target>       | Lists the possible target part numbers to which the customer can upgrade from a given source.|
| productUpgrades[].target.entityType            | Yes      | String (enum)      | Indicates whether the target is a subscription or an offer.                                                     |
| productUpgrades[].target.scope                | Yes      | String (enum)      | Defines the scope of the target items (example: PRODUCT_LIST).                                                     |
| productUpgrades[].target.family                | Yes      | String (enum)      | Specifies the product family of the target offers.                                                     |
| productUpgrades[].target.items                 | Yes         |   Object   |  Contains the list of target offers and their details.           |
| productUpgrades[].target.items[].sequence    |   Yes      | Integer            | Defines the order in which upgrade paths should be presented.          |
| productUpgrades[].target.items[].baseOfferId   | Yes      | String             | The base offerId to which customer can upgrade.                                                           |
| productUpgrades[].target.items[].switchType   |  Yes      | String             | Indicates whether the entire quantity of the original subscription can be upgraded to the new product or only a portion of it.                                                           |
| totalCount                                     |  Yes        |  Integer    |   The total number of items matching the query across all pages. Reflects the full dataset size regardless of pagination.          |
| count                                          |  Yes        |  Integer    |  The number of items included in the current response. Typically equals or is less than the limit          |
| offset                                         |  Yes        |  Integer    |   The zero-based index of the first item in this response within the total result set. Indicates how many items were skipped.          |
| limit                                         |  Yes        |  Integer    |   The maximum number of items requested per response (page size). Defines how many items should be returned per request.          |

### 4. Preview Switch Order

The newly introduced `Preview Switch` option in the `OrderType` parameter of the Create Order API helps partners to generate upgrade quotes prior to placing a switch order.

|Endpoint | Method |
|--|--|
|`<env root url>/v3/customers/{{customerId}}/orders` | POST|

### Request

**Query parameters**

| Parameter | Required | Description |
|---|--|--|
|reassign-users|Optional |Specifies whether to automatically reassign users from the original subscription to the upgraded product. |
|fetch-price|Optional| Specifies whether to fetch pricing details while previewing the mid-term upgrade offers.|

**Sample Request URL:** `POST https://partners-stage.adobe.io/v3/customers/1005944528/orders?reassign-users=true&fetch-price=true`

**Request body**

```json
{
    "orderType" : "PREVIEW_SWITCH",
    "currencyCode" : "USD",
    "lineItems" : [
        {
            "extLineItemNumber" : 1,
            "offerId" : "65322651CA02A12",
            "quantity" : 15,
            "discountCode": "HVD_L17PRE"
        }
    ],
    "cancellingItems":[
        {
            "extLineItemNumber": 1,
            "referenceLineItemNumber": 1,
            "subscriptionId": "abfb5a4cb14561879af7204c7daee1NA",
            "discountCode": "HVD_L17PRE",
            "quantity" : 15,
        }
    ]   
}
```

**Request parameters:**

|Parameter|Required|Data Type|Description|
|--|--|--|--|
|externalReferenceId|Not Required|String|This is used to link the order with partner passed id|
|referenceOrderId|Optional(Required for revert switch)|String|Original order id of switch order, in case of revert |
|orderType|Required|String (Enum)|Indicates the order type customer is trying to place. Possible values corresponding to the mid-term upgrade: PREVIEW_SWITCH or SWITCH|
|currencyCode                      | Required                            | String (Enum)           | Currency code for order, must be supported by the partner.                      |
| lineItems                         | Required                            | List&lt;LineItem&gt;     | Specifies the line items the customer intends to switch.                     |
| lineItems.extLineItemNumber       | Required                            | String                   | Unique index for line item.                                                 |
| lineItems.subscriptionId          | Required                            | String                   | Indicates which subscription customer is trying to switch.                  |
| lineItems.offerId                 | Required                            | String                   | Indicates which product customer is switching to                           |
| lineItems.quantity                | Required                            | String                   | Quantity from subscription to be switched.                                  |
| lineItems.discountCode            | Optional                            | String                   | Discount code applied to the line item                                     |
| cancellingItems                   | Required for Switch type Order      | List&lt;CancellingItem&gt;| List of items the customer intends to cancel as part of the switch.                                |
| cancellingItems.extLineItemNumber | Required                            | String                   | Unique index for cancelling line item                                      |
| cancellingItems.referenceLineItemNumber | Required                     | String                   | Reference line item number being canceled                                 |
| cancellingItems.subscriptionId    | Required                            | String                   | Indicates subscription to cancel                                           |
| cancellingItems.discountCode      | Optional                            | String                   | Discount code applied to cancelling item                                   |

### Response

```json
{
    "referenceOrderId": "",
    "externalReferenceId": "a96ee8fe-c440-4d1c-ae5b-a90e1825aef",
    "orderId": "",
    "customerId": "1005944528",
    "currencyCode": "USD",
    "orderType": "PREVIEW_SWITCH",
    "status": "",
    "pricingSummary": [
    {
        "totalLineItemPrice": 810.00,
        "currencyCode": "USD"
        }
    ],
    "lineItems": [
        {
 
                "extLineItemNumber": 1,
                "offerId": "65304479CA02A12",
                "quantity": 15,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "",
                "proratedDays": 90,
                "pricing": {
                    "partnerPrice": 365.00,
                    "discountedPartnerPrice": 328.50,
                    "netPartnerPrice": 81.00,
                    "lineItemPrice": 810.00
                }
        }
    ],
    "cancellingItems":[
        {
                "offerId": "65322651CA02A12",
                "quantity": 15,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "abfb5a4cb14561879af7204c7daee1NA",
                "pricing": {
                    "partnerPrice": -300.00,
                    "discountedPartnerPrice": 0.00,
                    "netPartnerPrice": -300.00,
                    "lineItemPrice": -300.00
                },
                "referenceLineItemNumber": 1,
        }
    ]
    "creationDate": "2025-03-17T11:42:29Z"
}
```

Response parameters:

The `cancellingItems` object lists the switch plan with corresponding pricing details. The following table lists the parameters in the cancellingItems object. For more details on the entire parameters of the Order source, refer to [Order object](../references/resources.md#order-top-level-resource).

|Parameter|Not Null|Data Type|Description|Included in Response by Default|
|--|--|--|--|--|
| cancellingItems.offerId               | YES      | String                   | Part number of the canceled item                          | Yes                              |
| cancellingItems.quantity              | YES      | Integer                  | Quantity being canceled.                                        | Yes                              |
| cancellingItems.discountCode          | NO       | String                   | Discount code applied to the canceled item.                   | Yes                              |
| cancellingItems.subscriptionId        | YES      | String                   | Subscription ID of the canceled item.                             | Yes                              |
| cancellingItems.pricing.partnerPrice | YES      | Decimal                  | Partner price of the canceled item.                         | Yes                              |
| cancellingItems.pricing.discountedPartnerPrice | YES | Decimal          | Discounted partner price of the canceled  item.                      | Yes                              |
| cancellingItems.pricing.netPartnerPrice | YES    | Decimal                  | Net partner price of the canceled item after discounts.                               | Yes                              |
| cancellingItems.pricing.lineItemPrice | YES      | Decimal                  | Final price of the canceled item.                                | Yes                              |
| cancellingItems.referenceLineItemNumber | YES    | Integer                  | Reference line item number.                                | Yes                              |
| creationDate                          | YES      | DateTime                 | Timestamp of the order creation.                               | Yes                              |

## Apply switch plan

Use the `Create Order` API with `orderType` as SWITCH to switch from the current order to a new one. Creating a switch order is functionally similar to a preview request, but it does not include pricing details in the response. Once placed, the order appears in the order history, and the same logic applies for tracking and managing orders.

This API facilitates upgrade orders with "From" and "To" product details. It also supports automatic user reassignment through the `reassign-users=true` query parameter.

#### Request

Sample request URL: `POST https://partners-stage.adobe.io/v3/customers/1005944528/orders?reassign-users=true`

Request body:

```json
{
    "orderType" : "SWITCH",
    "currencyCode" : "USD",
    "lineItems" : [
        {
            "extLineItemNumber" : 1,
            "offerId" : "65322651CA02A12",
            "quantity" : 15,
            "discountCode": "HVD_L17PRE"
        }
    ],
    "cancellingItems":[
        {
            "extLineItemNumber": 1,
            "referenceLineItemNumber": 1,
            "subscriptionId": "abfb5a4cb14561879af7204c7daee1NA",
            "discountCode": "HVD_L17PRE",
            "quantity" : 15,
        }
    ]
}
```

#### Response

```json
{
    "referenceOrderId": "",
    "externalReferenceId": "a96ee8fe-c440-4d1c-ae5b-a90e1825aef",
    "orderId": "123432123",
    "customerId": "1005944528",
    "currencyCode": "USD",
    "orderType": "SWITCH",
    "status": "",
    "lineItems": [
        {
 
                "extLineItemNumber": 1,
                "offerId": "65304479CA02A12",
                "quantity": 15,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": ""
                 
        }
    ],
    "cancellingItems":[
        {
                "offerId": "65322651CA02A12",
                "quantity": 15,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "abfb5a4cb14561879af7204c7daee1NA",
                "referenceLineItemNumber": 1,
        }
    ]
    "creationDate": "2025-03-17T11:42:29Z"
}
```

## Verify Switch Order

You can use the following APIs to verify the upgrade:

- [Get order history](#get-order-history)
- [Get details of a specific order](#get-details-of-a-specific-order)

### Get Order History

#### Request

Sample request URL: `GET {{HOST}}/v3/customers/{{customerId}}/orders?offset=0&limit=25&order-type=SWITCH`

#### Response

Sample response:

```json
{
    "totalCount": 0,
    "count": 0,
    "offset": 0,
    "limit": 25,
    "items": [
{
    "referenceOrderId": "",
    "externalReferenceId": "a96ee8fe-c440-4d1c-ae5b-a90e1825aef",
    "orderId": "",
    "customerId": "1005944528",
    "currencyCode": "USD",
    "orderType": "SWITCH",
    "status": "1000",
    "lineItems": [
        {
 
                "extLineItemNumber": 1,
                "offerId": "65304479CA02A12",
                "quantity": 15,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "asdfewaw1879af7204c7daee1NA"
        }
    ],
    "cancellingItems":[
        {
                "offerId": "65322651CA02A12",
                "quantity": 15,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "abfb5a4cb14561879af7204c7daee1NA",
                "referenceLineItemNumber": 1,
        }
    ],
    "creationDate": "2025-03-17T11:42:29Z"
}
],
    "links": {
        "self": {
            "uri": "/v3/customers/1005944528/orders?order-type=SWITCH",
            "method": "GET",
            "headers": []
        }
    }
}
```

### Get details of a specific order

#### Request

Sample request URL: `GET {{HOST}}/v3/customers/{{customerId}}/orders/{{orderId}}`

#### Response

Sample response:

```json
{
    "referenceOrderId": "",
    "externalReferenceId": "a96ee8fe-c440-4d1c-ae5b-a90e1825aef",
    "orderId": "",
    "customerId": "1005944528",
    "currencyCode": "USD",
    "orderType": "SWITCH",
    "status": "1000",
    "lineItems": [
        {
 
                "extLineItemNumber": 1,
                "offerId": "65304479CA02A12",
                "quantity": 15,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "drger4cb14561879af7204c7daee1NA"
        }
    ],
    "cancellingItems":[
        {
                "offerId": "65322651CA02A12",
                "quantity": 15,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "abfb5a4cb14561879af7204c7daee1NA"
        }
    ],
    "creationDate": "2025-03-17T11:42:29Z"
}
```

## Revert Switch Order

Partners can perform upgrade reversals within 14 days. It restores original product licenses and de-provisions upgraded ones. Revert logic selects original orders in a first-in, first-out (FIFO) manner.

**Note:** Refunds are calculated based on the current price, discount level, and quantity at the time of revert.

Reverting a switch order involves:

- [Preview Revert Switch](#preview-revert-switch)
- [Revert Switch Order](#revert-switch-order-1)

### Preview Revert Switch

Use `PREVIEW_REVERT_SWITCH` as the `orderType` in the Create Order API to get the required details and to check the validity of the reversal.

#### Request

Sample request URL: POST `https://partners-stage.adobe.io/v3/customers/1005944528/orders?reassign-users=true&fetch-price=true`

Request body:

```json
{
    "orderType" : "PREVIEW_REVERT_SWITCH",
    "currencyCode" : "USD",
    "referenceOrderId": "987654334",
    "lineItems" : [
        {
            "extLineItemNumber" : 1,
            "offerId" : "65322651CA02A12",
            "quantity" : 15,
            "discountCode": "HVD_L17PRE"
        }
    ],
    "cancellingItems":[
        {
            "extLineItemNumber": 1,
            "referenceLineItemNumber": 1,
            "subscriptionId": "abfb5a4cb14561879af7204c7daee1NA",
            "discountCode": "HVD_L17PRE",
            "quantity" : 15,
        }
    ]   
}
```

#### Response

```json
{
    "referenceOrderId": "",
    "externalReferenceId": "a96ee8fe-c440-4d1c-ae5b-a90e1825aef",
    "orderId": "",
    "customerId": "1005944528",
    "currencyCode": "USD",
    "orderType": "PREVIEW_REVERT_SWITCH",
    "referenceOrderId": "987654334",
    "status": "",
    "pricingSummary": [
    {
        "totalLineItemPrice": 810.00,
        "currencyCode": "USD"
        }
    ],
    "lineItems": [
        {
 
                "extLineItemNumber": 1,
                "offerId": "65304479CA02A12",
                "quantity": 15,,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "werb5a4ctrew879af7204c7daee1NA",
                "proratedDays": 90,
                "pricing": {
                    "partnerPrice": 365.00,
                    "discountedPartnerPrice": 328.50,
                    "netPartnerPrice": 81.00,
                    "lineItemPrice": 810.00
                }
        }
    ],
    "cancellingItems":[
        {
                "offerId": "65322651CA02A12",
                "quantity": 15,,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "abfb5a4cb14561879af7204c7daee1NA",
                "pricing": {
                    "partnerPrice": -300.00,
                    "discountedPartnerPrice": 0.00,
                    "netPartnerPrice": -300.00,
                    "lineItemPrice": -300.00
                },
                "referenceLineItemNumber": 1,
        }
    ]
    "creationDate": "2025-03-17T11:42:29Z"
}
```

### Revert Switch Order

Use `REVERT_SWITCH` as the `orderType` in the Create Order API to revert to the plan from which you upgraded.

#### Request

```json
{
    "orderType" : "REVERT_SWITCH",
    "currencyCode" : "USD",
    "referenceOrderId": "987654334",
    "lineItems" : [
        {
            "extLineItemNumber" : 1,
            "offerId" : "65322651CA02A12",
            "quantity" : 15,
            "discountCode": "HVD_L17PRE"
        }
    ],
    "cancellingItems":[
        {
            "extLineItemNumber": 1,
            "referenceLineItemNumber": 1,
            "subscriptionId": "abfb5a4cb14561879af7204c7daee1NA",
            "discountCode": "HVD_L17PRE",
            "quantity" : 15,
        }
    ]   
}
```

#### Response

```json
{
    "referenceOrderId": "",
    "externalReferenceId": "a96ee8fe-c440-4d1c-ae5b-a90e1825aef",
    "orderId": "",
    "customerId": "1005944528",
    "currencyCode": "USD",
    "orderType": "REVERT_SWITCH",
    "referenceOrderId": "987654334",
    "status": "",
    "pricingSummary": [
    {
        "totalLineItemPrice": 810.00,
        "currencyCode": "USD"
        }
    ],
    "lineItems": [
        {
 
                "extLineItemNumber": 1,
                "offerId": "65304479CA02A12",
                "quantity": 15,,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "werb5a4ctrew879af7204c7daee1NA",
                "proratedDays": 90,
                "pricing": {
                    "partnerPrice": 365.00,
                    "discountedPartnerPrice": 328.50,
                    "netPartnerPrice": 81.00,
                    "lineItemPrice": 810.00
                }
        }
    ],
    "cancellingItems":[
        {
                "offerId": "65322651CA02A12",
                "quantity": 15,,
                "discountCode": "HVD_L17PRE"
                "subscriptionId": "abfb5a4cb14561879af7204c7daee1NA",
                "pricing": {
                    "partnerPrice": -300.00,
                    "discountedPartnerPrice": 0.00,
                    "netPartnerPrice": -300.00,
                    "lineItemPrice": -300.00
                },
                "referenceLineItemNumber": 1,
        }
    ]
    "creationDate": "2025-03-17T11:42:29Z"
}
```
