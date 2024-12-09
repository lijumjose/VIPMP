# Manage high growth offers through APIs

<style>
table, th, table td {
  border: 1px solid black;
        }
</style>

As explained in the [High growth offer use cases](./high_volume_discounts.md#high-growth-offer-use-cases) section, a reseller and a customer need to perform various steps to provide MOQ offers to customers. This section identifies the APIs necessary to achieve this objective:

- [Preview renewal offers](#preview-renewal-offers)
- [Update subscription](#update-subscription)
- [Create subscription](#create-subscription)
- [Get subscription](#get-subscription)
- [Create order](#create-order)

## Preview renewal offers

Use the `PreviewRenwal` API to preview the renewal order for the customer. This is the same `POST v3/customers/{customer-id}/orders` API with `orderType` as _PREVIEW_RENEWAL_.

**Assumptions:**

- You can run the `PreviewRenewal` API anytime during the current term to get the recommendations.
- The recommendations in the `PreviewRenewal` will be shown only to the customers who hold Acrobat Pro or Standard subscriptions. Also, the recommendation doesn’t consider the minimum commit quantity of 3YC.
- Recommendations shown are the same for 3YC and non-3YC Acrobat customers.


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

In addition to the standard response of the Order API, the response of the Preview Renewal provides a list of MOQ offers that the customers can avail, under the eligibleOffers section.

**Note:** The following code sample includes only the newly added parameters specific to High Growth Offers. For the complete response set, refer to the [Create Order API](../order_management/create_order.md).


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
        "offerId": "65324918CA14X12",
        "renewalCode": "MOQ_100",
        "eligibilityCriteria":
          {
            "minQuantity": 100,
            "additionalCriteria": ["THREE_YEAR_COMMIT"],
            "deploymentId": "1450043516",
          },
      },
      {
        "offerId": "65324918CA14Y12",
        "renewalCode": "MOQ_250",
        "eligibilityCriteria":
          {
            "minQuantity": 250,
            "additionalCriteria": ["THREE_YEAR_COMMIT"],
            "deploymentId": "1450043516",
          },
      },
      {
        "offerId": "65324918CA14Z12",
        "renewalCode": "MOQ_500",
        "eligibilityCriteria":
          { 
            "minQuantity": 500, 
            "additionalCriteria": ["THREE_YEAR_COMMIT"]
          },
      },
    ],
  "creationDate": "2024-04-01T07:26:05Z",
}

```

Success response if the customer has already opted for 100 MOQ offer:

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
      "offerId": "65324918CA14X12",
      "quantity": 100,
      "subscriptionId": "a5ea3c7a764545a711d2a153678f02NA",
      "status": ""
    }
  ],
  "eligibleOffers": [
    {
      "offerId": "65324918CA14X12",
      "renewalCode": "MOQ_100",
      "eligibilityCriteria": {
        "minQuantity": 100,
        "additionalCriteria": [
          "THREE_YEAR_COMMIT"
        ],
        "deploymentId": "1450043516"
      }
    },
    {
      "offerId": "65324918CA14Y12",
      "renewalCode": "MOQ_250",
      "eligibilityCriteria": {
        "minQuantity": 250,
        "additionalCriteria": [
          "THREE_YEAR_COMMIT"
        ],
        "deploymentId": "1450043516"
      }
    },
    {
      "offerId": "65324918CA14Z12",
      "renewalCode": "MOQ_500",
      "eligibilityCriteria": {
        "minQuantity": 500,
        "additionalCriteria": [
          "THREE_YEAR_COMMIT"
        ]
      }
    }
  ],
  "creationDate": "2024-04-01T07:26:05Z"
}

```

#### Response parameter details specific to eligible MOQ offers

The full set of parameters of Order API are available in the [Order resource fields](../references/resources.md#order-top-level-resource) section. The following table lists the parameters specific to High Growth Offers:

**Eligible offers**

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|offerId |string  |The unique ID of the offer |Max: 40 characters  |
|renewalCode |string  |Unique identifier of the Minimum Order Quantity Offer. Available values are: <br />- MOQ_100 <br />- MOQ_250 <br />- MOQ_500 |Max: 30 characters  |
|eligibilityCriteria |Array |The eligibility criteria for availing the MOQ offer. | |
|minQuantity |Integer |The minimum quantity for which this offer is applicable, also the minimum quantity that the customer needs to commit for a 3YC term to be eligible for this offer. Supported values are: 100, 250, and 500.|Min: 0 <br /> Max: 999999 |
|additionalCriteria |string  |The additional criteria list for availing the high growth offer. Currently, `THREE_YEAR_COMMIT` is the only supported value, indicating that 3YC is required to avail the high growth offers.  |Min: 1 item <br /> Max: 499 items |
|deploymentId |string  |Unique ID for the deployment. | Max: 40 characters |

### HTTP status codes

| Status code | Description                     |
|-------------|---------------------------------|
| 200         | Preview Successful        |
| 400         | Bad request                     |
| 401         | Invalid Authorization token     |
| 403         | Invalid API Key                 |
| 404         | Invalid customer ID or Order ID |

#### Sample response in case of failure

Upon failure, the appropriate HTTP status code based on the reason/type of failure will be sent.

Failure response:

```json
{ "code": "4115", "message": "Api Key is invalid or missing" }
```

## Update subscription

Use the `PATCH /v3/customers/{customer-id}/subscriptions/{sub-id}?reset-renewal-code=false` API to update the renewal preferences for the customer's subscription with the MOQ offer details.

You can use the optional query param `reset-renewal-code` in the request to remove the `renewalCode` after it has been opted by the customer. Possible values are:

- `true`
- `false`

The default value is `false`. For more information, see [sample request and response with query parameter.](#sample-request-and-response-with-query-parameter)

### Request header

Same as the [request header given in the previous endpoint](#request-header).

### Request body

You need to include the `renewalCode` parameter in the auto renewal configuration, as shown in the following code sample:

```json
{
    "autoRenewal": {
        "enabled": true,
        "renewalQuantity": 100,
        "renewalCode": "MOQ_100"
    }
}
```

The `renewalCode` parameter is the renewal commitment code used for renewal.

### Response

The response shows the `renewalCode` with the selected MOQ offer.

```json
{
   "subscriptionId": "a028303a454a168d6b824b6c0dfcc5NA",
   "offerId": "65324918CA14A12",
   "currentQuantity": 10,
   "usedQuantity": 0,
   "autoRenewal": {
       "enabled": true,
       "renewalQuantity": 100,
       "renewalCode": "MOQ_100"
   },
   "creationDate": "2023-09-22T08:38:27Z",
   "renewalDate": "2024-09-22",
   "status": "1000",
   "deployToId": "",
   "currencyCode": "USD",
   "links": {
       "self": {
           "uri":                        "/v3/customers/1005388836/subscriptions/a028303a454a168d6b824b6c0dfcc5NA",
           "method": "GET",
           "headers": []
       }
   }
}
```

### HTTP status codes

| Status code | Description                     |
|-------------|---------------------------------|
| 200         | Preview Successful        |
| 400         | Bad request                     |
| 401         | Invalid Authorization token     |
| 403         | Invalid API Key                 |
| 404         | Invalid customer ID or Order ID |

#### Sample failure response

On failure, the appropriate HTTP status code based on the reason/type of failure will be sent. For example, if the API key is invalid, the response has status HTTP 403 and the failure response as:

```json
{ "code": "4115", "message": "Api Key is invalid or missing" }
```

#### Sample request and response with query parameter

Use the `/v3/customers/{customer-id}/subscriptions/{sub-id}?reset-renewal-code=true`

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

Use the `POST v3/customers/{{customerId}}/subscriptions` API to create a scheduled subscription for the specific customer.

For example, if the customer has only Acrobat Standard product and not Acrobat Pro, they can use Create Subscription API to create a scheduled subscription for the MOQ.

**Assumptions:**

- The `Create Subscription` endpoint now also supports `renewalCode` to be given by a partner in a request for opting for a MOQ.
- If the customer accepts to renew with Acrobat Pro MoQ SKU while the customer currently has Acrobat Standard SKU, the Distributor executes create subscription API that allows a scheduled subscription to be created to be activated at the anniversary date.

- For global customers, the following parameters are required:

  - `currencyCode`
  - `deploymentId`
  
  These are part of the [Get Subscription API](../subscription_management/get_details_for_customers.md) as well.

### Request header

Same as the [request header given in the previous endpoint](#request-header).

### Request body

```json
{
    "offerId": "65322450CA14X12",
    "autoRenewal": {
        "renewalQuantity": 100,
        "renewalCode": "MOQ_100"
    }
}
```

### Response

```json
{
    "subscriptionId": "e0b170437c4e96ac5428364f674dffNA",
    "offerId": "65322450CA14X12",
    "currentQuantity": 0,
    "usedQuantity": 0,
    "autoRenewal": {
        "enabled": true,
        "renewalQuantity": 100,
        "renewalCode": "MOQ_100"
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

Use the `GET /v3/customers/{{customerId}}/subscriptions` API to get details of all subscriptions of a customer. Along with their details, it displays the `renewalCode` in the autoRenewal preferences if the customer will receive it in the next term.

### Request header

Same as the [request header given in the previous endpoint](#request-header).

### Request body

None.

### Response

```json
{
    "totalCount": 1,
    "items": [
        {
            "subscriptionId": "43b889db7b4e7aa2d42b54b9813eebNA",
            "offerId": "65322651CA14X12",
            "currentQuantity": 10,
            "usedQuantity": 4,
            "autoRenewal": {
                "enabled": true,
                "renewalQuantity": 10,
                "renewalCode": "MOQ_100"
            },
            "creationDate": "2024-10-23T10:23:11Z",
            "renewalDate": "2025-10-23",
            "status": "1000",
            "currencyCode": "USD",
            "links": {
                "self": {
                    "uri": "/v3/customers/D1005038400/subscriptions/43b889db7b4e7aa2d42b54b9813eebNA",
                    "method": "GET",
                    "headers": []
                }
            }
        }
    ],
    "links": {
        "self": {
            "uri": "/v3/customers/D1005038400/subscriptions",
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

No change in the API request or response. Read more about [how to create order through API](../order_management/create_order.md). Customers can send an `offerId` corresponding to MOQ, for example, 65322450CA14X12, to create a mid-term purchase order of MOQ.
