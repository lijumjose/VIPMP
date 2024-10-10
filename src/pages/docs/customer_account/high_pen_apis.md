# Manage high penetration offers through APIs

You can manage the following operations through APIs:

- [Preview renewl offers](#preview-renewal-offers)
- [Update subscription](#update-subscription)
- [Create subscription](#create-subscription)
- [Get subscription](#get-subscription)
- [Create order](#create-order)

## Preview renewal offers

Use the `PreviewRenwal` API to get the preview of renewal order for the customer. This is the same `POST v3/customers/{customer-id}/orders` with `orderType` as _PREVIEW_RENEWAL_.

**Assumptions:**

Preview Renewal can be called anytime during the current term and recommendations be received.

### Request header

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

### Request body

```json
 { "orderType": "PREVIEW_RENEWAL" }
 ```

### Response body

```json
{
  "referenceOrderId": "",
  "orderId": "",
  "customerId": "1005388836",
  "currencyCode": "USD",
  "orderType": "PREVIEW_RENEWAL",
  "status": "",
  "lineItems":
    [
      {
        "extLineItemNumber": 1,
        "offerId": "65324918CA02A12",
        "quantity": 10,
        "subscriptionId": "a5ea3c7a764545a711d2a153678f02NA",
        "status": "",
      },
    ],
  "eligibleOffers":
    [
      {
        "offerId": "65324918CA01X12",
        "discountCode": "MOQ_X",
        "eligibility":
          {
            "minQuantity": 100,
            "eligibleCustomer": ["THREE_YEAR_COMMIT"],
            "deploymentId": "1450043516",
          },
      },
      {
        "offerId": "65324918CA01Y12",
        "discountCode": "MOQ_Y",
        "eligibility":
          {
            "minQuantity": 250,
            "eligibleCustomer": ["THREE_YEAR_COMMIT"],
            "deploymentId": "1450043516",
          },
      },
      {
        "offerId": "65324918CA01Z12",
        "discountCode": "MOQ_Z",
        "eligibility":
          { "minQuantity": 500, "eligibleCustomer": ["THREE_YEAR_COMMIT"] },
      },
    ],
  "creationDate": "2024-04-01T07:26:05Z",
}
```

Success Response if customer has already opted for 100MOQX:

```json
{

  "referenceOrderId": "",
  "orderId": "",
  "customerId": "1005388836",
  "currencyCode": "USD",
  "orderType": "PREVIEW_RENEWAL",
  "status": "",
  "lineItems": [
    {
      "extLineItemNumber": 1,
      "offerId": "65324918CA01X12",
      "quantity": 100,
      "subscriptionId": "a5ea3c7a764545a711d2a153678f02NA",
      "status": ""
    }
  ],
  "eligibleOffers": [
    {
      "offerId": "65324918CA01X12",
      "discountCode": "MOQ_X",
      "eligibility": {
        "minQuantity": 100,
        "eligibleCustomer": [
          "THREE_YEAR_COMMIT"
        ],
        "deploymentId": "1450043516"
      }
    },
    {
      "offerId": "65324918CA01Y12",
      "discountCode": "MOQ_Y",
      "eligibility": {
        "minQuantity": 250,
        "eligibleCustomer": [
          "THREE_YEAR_COMMIT"
        ],
        "deploymentId": "1450043516"
      }
    },
    {
      "offerId": "65324918CA01Z12",
      "discountCode": "MOQ_Z",
      "eligibility": {
        "minQuantity": 500,
        "eligibleCustomer": [
          "THREE_YEAR_COMMIT"
        ]
      }
    }
  ],
  "creationDate": "2024-04-01T07:26:05Z"
}
```

### HTTP status codes

| Status code | Description                     |
|-------------|---------------------------------|
| 200         | Order Preview Successful        |
| 400         | Bad request                     |
| 401         | Invalid Authorization token     |
| 403         | Invalid API Key                 |
| 404         | Invalid customer ID or Order ID |

#### Sample response in case of failure

Upon failure, the response the appropriate HTTP status code based on the reason/type of failure will be sent.

Failure response:

```json
{ "code": "4115", "message": "Api Key is invalid or missing" }
```

## Update subscription

Use the `PATCH /v3/customers/{customer-id}/subscriptions/{sub-id}reset-discount-code=false` API to update the renewal preferences for the customer's subscription with the MOQ offer details.

You can use the optional query param `reset-discount-code` in the request to remove the discountCode after it has been opted by customer. Possible values are:

- `true`
- `false`

The default value is `false`. For more information, see [sample request and response with query parameter.](#sample-request-and-response-with-query-parameter)

### Request header

Same as the [request header given in the previous endpoint](#request-header).

### Request body

```json
{
    "autoRenewal": {
        "enabled": true,
        "renewalQuantity": 100,
        "discountCode": "MOQ_X"
    }
}
```

### Request response

```json
{
    "subscriptionId": "a028303a454a168d6b824b6c0dfcc5NA",
    "offerId": "65324918CA01A12",
    "currentQuantity": 10,
    "usedQuantity": 0,
    "autoRenewal": {
        "enabled": true,
        "renewalQuantity": 100,
        "discountCode": "MOQ_X"
    },
    "creationDate": "2023-09-22T08:38:27Z",
    "renewalDate": "2024-09-22",
    "status": "1000",
    "deployToId": "",
    "currencyCode": "USD",
    "links": {
        "self": {
            "uri": "/v3/customers/1005388836/subscriptions/a028303a454a168d6b824b6c0dfcc5NA",
            "method": "GET",
            "headers": []
        }
    }
}
```

### HTTP status codes

| Status code | Description                     |
|-------------|---------------------------------|
| 200         | Order Preview Successful        |
| 400         | Bad request                     |
| 401         | Invalid Authorization token     |
| 403         | Invalid API Key                 |
| 404         | Invalid customer ID or Order ID |

#### Sample failure response

On failure, the response the appropriate HTTP status code based on the reason/type of failure will be sent. For example, if the API key is invalid , the response has status HTTP 403 and the failure response as:

```json
{ "code": "4115", "message": "Api Key is invalid or missing" }
```

#### Sample request and response with query parameter

Use the `/v3/customers/{customer-id}/subscriptions/{sub-id}?reset-discount-code=true`

Request body:

```json
{
    "autoRenewal" :{
        "enabled" : true,
        "renewalQuantity" : 25
    }
}
```

Response:

```json
{
    "subscriptionId": "a028303a454a168d6b824b6c0dfcc5NA",
    "offerId": "65324918CA02A12",
    "currentQuantity": 10,
    "usedQuantity": 0,
    "autoRenewal": {
        "enabled": true,
        "renewalQuantity": 25
    },
    "creationDate": "2023-09-22T08:38:27Z",
    "renewalDate": "2024-09-22",
    "status": "1000",
    "deployToId": "",
    "currencyCode": "USD",
    "links": {
        "self": {
            "uri": "/v3/customers/1005388836/subscriptions/a028303a454a168d6b824b6c0dfcc5NA",
            "method": "GET",
            "headers": []
        }
    }
}
```

## Create subscription

Use the `POST v3/customers/{{customerId}}/subscriptions` API to create a subscription for the specific customer.

A subscription is created for every unique product (SKU) of a customer and any subsequent purchase of the same product is added to the same subscription. For every new purchase of another product, the customer creates a new subscription. All these subscriptions at renewal (AD) form a Renewal Order and get fulfilled through the Ordering sub-system. For example, if the customer has only Acro Standard product and not Acrobat Pro, they can use Create Subscription API to create a scheduled subscription for the MOQ.

**Assumptions:**

- The `Create Subscription` endpint now also supports `discountCode` to be given by partner in request for opting for a MOQ.
- If the customer accepts to renew with Acrobat Pro MoQ SKU while the customer currently has Acrobat Standard SKU, the Distributor executes create subscription API that allows a scheduled subscription to be created to be activated at the anniversary date.
- For global customers, the following parameters are required:
  - `currencyCode`: required (For Global Customer)
  - `deployTo`: **NEED DESCRIPTION**.
  
  These are part of `getsubscription` API as swell

### Request header

Same as the [request header given in the previous endpoint](#request-header).

### Request body

```json
{
    "offerId": "65322450CA01X12",
    "discountCode": "MOQ_X",
    "autoRenewal": {
        "renewalQuantity": 100
    }
}
```

### Request response

```json
{
    "subscriptionId": "e0b170437c4e96ac5428364f674dffNA",
    "offerId": "65322450CA01X12",
    "currentQuantity": 0,
    "usedQuantity": 0,
    "autoRenewal": {
        "enabled": true,
        "renewalQuantity": 100,
        "discountCode": "MOQ_X"
    },
    "creationDate": "2023-07-18T05:20:19Z",
    "renewalDate": "2024-07-18",
    "status": "1009", // Scheduled
    "currencyCode": "USD",
    "links": {
        "self": {
            "uri": "/v3/customers/1005331016/subscriptions/e0b170437c4e96ac5428364f674dffNA",
            "method": "GET",
            "headers": []
        }
    }
}
```

### HTTP status codes

| Status code | Description                        |
|-------------|------------------------------------|
| 200         | Created subscription successfully  |
| 400         | Bad request                        |
| 401         | Invalid Authorization token        |
| 403         | Invalid API Key                    |
| 404         | Invalid customer ID or Order ID    |

## Get subscription

Use the `GET /v3/customers/{{customerId}}/subscriptions` API to get the subscription details. Along with ther details, it displays the `discountCode` in the autoRenewal preferences if the customer has opted for it for the next term.

### Request header

Same as the [request header given in the previous endpoint](#request-header).

### Request body

None.

### Request response

```json
{
    "subscriptionId": "e01756010447808cd0463411464d87NA",
    "offerId": "65324918CA01A12",
    "currentQuantity": 2,
    "usedQuantity": 0,
    "autoRenewal": {
        "enabled": true,
        "renewalQuantity": 100,
        "discountCode": "MOQ_X"
    },
    "creationDate": "2024-06-18T09:49:10Z",
    "renewalDate": "2025-06-18",
    "status": "1000",
    "deploymentId": "",
    "currencyCode": "USD",
    "links": {
        "self": {
            "uri": "/v3/customers/1005481955/subscriptions/e01756010447808cd0463411464d87NA",
            "method": "GET",
            "headers": []
        }
    }
}
```

### HTTP status codes

| Status code | Description                     |
|-------------|---------------------------------|
| 200         | Successful                      |
| 400         | Bad request                     |
| 401         | Invalid Authorization token     |
| 403         | Invalid API Key                 |
| 404         | Invalid customer ID or Order ID |

## Create order

No change in the API request or response. Read more about [how to create order through API](../order_management/create_order.md). Customer can send `offerId` corresponding to MOQ, for example 65322450CA01X12, to create mid term purchase order of MOQ.
