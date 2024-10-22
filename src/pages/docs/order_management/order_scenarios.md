# Order creation scenarios

This topic provides details of the following scenarios related to order creation and management:

- [New order](#new-order)
- [Return or cancellation of order](#return-or-cancellation-of-order)
- [Renewal of order](#renewal-orders)
- [Preview an order](#preview-an-order)
- [Preview renewal orders](#preview-renewal-orders)

## New order

This section lists the sample requests and responses of an order with `orderType` - NEW.

**Notes:**

- The `subscriptionId` may be blank while the order is processing. Once the order is complete (status 1000), then all `subscriptionIds` will be populated and will not change.
- The [Create Order](./create_order.md) call is used to add seats for the current term.
- Order ID is created by this service and returned synchronously.
- Order may fail asynchronously, and status will be updated to reflect the failure.

### Sample request

```json
{
    "orderType": "NEW",
    "externalReferenceId": "759",
    "currencyCode": "USD",
    "lineItems": [
        {
            "extLineItemNumber": 4,
            "offerId": "80004567EA01A12",
            "quantity": 1,
            "currencyCode": "USD",
            "deploymentId": "12345"
        }
    ]
}
```

### Sample response

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
            "extLineItemNumber": 4,
            "offerId": "80004567EA01A12",
            "quantity": 1,
            "status": "1002",
            "subscriptionId": "",
            "currencyCode": "USD",
            "deploymentId": "12345"
        }
    ],
    "links": {...
    }
}
```

## Return or cancellation of order

**Notes:**

- `referenceOrderId` is the order that is being returned.
- `referenceOrderId` must be a valid, returnable order.
  - Either NEW or RENEWAL.
- Line items being returned must match `extLineItemNumber`, `offerId`, and quantity of the original order:
  - Line items can be cancelled independently in the same or different RETURN order.
  - No partial line item cancellations.
- Same 1000 | 1002 | 1004 statuses.
- As line items from an order get cancelled, the line item status on the original order changes from 1000 to 1008.
o When all line items for an order are cancelled, the status changes to 1008 for the original order.

### Sample request

```json
{
    "referenceOrderId": "0123456789",
    "orderType": "RETURN",
    "externalReferenceId": "759",
    "currencyCode": "USD",
    "lineItems": [
        {
            "extLineItemNumber": 4,
            "offerId": "80004567EA01A12",
            "quantity": 1,
            "currencyCode": "USD",
            "deploymentId": "12345"
        }
    ]
}
```

### Sample response

```json
{
    "referenceOrderId": "0123456789",
    "orderType": "RETURN",
    "externalReferenceId": "759",
    "orderId": "911000833",
    "customerId": "9876543210",
    "currencyCode": "USD",
    "creationDate": "2019-05-02T22:49:54Z",
    "status": "1002",
    "lineItems": [
        {
            "extLineItemNumber": 4,
            "offerId": "80004567EA01A12",
            "quantity": 1,
            "subscriptionId": "",
            "status": "1002",
            "currencyCode": "USD",
            "deploymentId": "12345"
        }
    ],
    "links": {...
    }
}
```

## Preview an order

**Notes:**

- No `orderId`, `subscriptionId`, `status`, and `links` in the request.
- Response can be used to place a new order request, if the `orderType` is changed to NEW.
- Returns the best available offer ID for the customer and the order.
  - Input Offer ID can be any level representing the same product.
  - If the Offer IDs in the request provides a better discount than customer is elligible for, then the correct lower-level Offer ID are returned.
    - For a NEW order, the request gets rejected if the customer is not eligible for an Offer ID.
- If NEW order is rejected, then the PREVIEW order gets rejected with the same error.

### Sample request

```json
{
    "orderType": "PREVIEW",
    "externalReferenceId": "759",
    "currencyCode": "USD",
    "lineItems": [
        {
            "extLineItemNumber": 4,
            "offerId": "80004567EA01A12",
            "quantity": 1,
            "currencyCode": "USD",
            "deploymentId": "12345"
        }
    ]
}
```

### Sample response

```json
{
    "referenceOrderId": "",
    "orderType": "PREVIEW",
    "externalReferenceId": "759",
    "orderId": "",
    "customerId": "9876543210",
    "currencyCode": "USD",
    "creationDate": "2019-05-02T22:49:54Z",
    "status": """lineItems": [
        {
            "extLineItemNumber": 4,
            "offerId": "80004567EA01A12",
            "quantity": 1,
            "subscriptionId": "",
            "status": "",
            "currencyCode": "USD",
            "deploymentId": "12345"
        }
    ]
}
```

## Preview renewal orders

**Notes:**

- No `orderId`, `status`, and `links` in the request.
- In case of no `lineItems` in the request, the response indicates what would be in the RENEWAL order based on the auto-renewal preferences (`autoRenewal.enabled` and `autoRenewal.renewalQuantity`) on the customer’s subscriptions.
- In case of `lineItems` in the request, the response indicates the RENEWAL order initiated after anniversary date for the selected line items.
- If the customer does not have any subscriptions with autoRenewal enabled, then an error is  returned.
- Returns the best available offer IDs for the renewal order.

### Sample request

```json
{
    "orderType": "PREVIEW_RENEWAL"
}
```

OR

```json
{
    "orderType": "PREVIEW_RENEWAL""lineItems": [
        {
            "extLineItemNumber": 1,
            "offerId": "80004567EA01A12",
            "subscriptionId": " e0b170437c4e96ac5428364f674dffNA"
        }
    ]
}
```

### Sample response

```json
{
    "referenceOrderId": "",
    "orderType": "PREVIEW_RENEWAL",
    "externalReferenceId": "759",
    "orderId": "",
    "customerId": "9876543210",
    "currencyCode": "USD",
    "creationDate": "2019-05-02T22:49:54Z",
    "status": ""
    "lineItems": [
        {
            "extLineItemNumber": 4,
            "offerId": "80004567EA01A12",
            "quantity": 1,
            "subscriptionId": " e0b170437c4e96ac5428364f674dffNA",
            "status": "",
            "currencyCode": "USD",
            "deploymentId": "12345"
        }
    }
```

## Renewal orders

**Notes:**

- RENEWAL order type is used for late renewals, which are initiated after the anniversary date.
- Subscription ID is required in the request line item.
- The license quantities must be less than or equal to customer’s current subscription current quantities.
- Order ID is created by this service and returned synchronously.
- Partner Marketplaces are expected to check the status of the order for success.
- You can select the expired subscriptions for manual renewal by using the [Get All Subscriptions for a Customer](../subscription_management/get_details_for_customers.md) API. Subscriptions that can be selected for manual renewal are indicated by the `allowedActions`": `["MANUAL_RENEWAL"]` parameter of the Get All Subscriptions of a Customer API response.  

### Sample request

```json
{
    "orderType": "RENEWAL",
    "externalReferenceId": "759",
    "currencyCode": "USD",
    "lineItems": [
        {
            "extLineItemNumber": 1,
            "offerId": "80004567EA01A12",
            "subscriptionId": " e0b170437c4e96ac5428364f674dffNA ",
            "quantity": 1
        }
    ]
}
```

### Sample response

```json
{
    "referenceOrderId": "",
    "orderType": "RENEWAL",
    "externalReferenceId": "759",
    "customerId": "9876543210",
    "orderId": "5120008001",
    "currencyCode": "USD",
    "creationDate": "2019-05-02T22:49:54Z",
    "status": "1002",
    "lineItems": [
        {
            "extLineItemNumber": 1,
            "offerId": "80004567EA01A12",
            "quantity": 1,
            "status": "1002",
            "subscriptionId": " e0b170437c4e96ac5428364f674dffNA ",
        }
    ],
    "links": {...
    }
}
```

## HTTP status codes

| Status code | Description                 |
|-------------|-----------------------------|
| 201         | Deployment created    |
| 400         | Bad request                 |
| 401         | Invalid Authorization token |
| 403         | Invalid API Key             |
| 404         | Invalid customer ID         |

## Assumptions

- Renewals are managed at the subscription level. No new order is expected from the marketplace. If a customer has subscriptions set to auto-renew, Adobe creates a renewal order on the customer's `cotermDate`. The renewal Order ID can be retrieved by parsing the response from the [Get Order History](./get_order.md) API with `orderType` as RENEWAL.
- Offer IDs are defined and communicated in published price lists.
- Each Offer ID is valid only for certain currencies. The currency code sent in the request must match the Offer IDs as well as the currency for which the distributor is configured.
- `externalReferenceId` is used to pass in an ID for financial reconciliation.
  - The `externalReferenceId` does not need to be unique and is an optional field.

**Restrictions:**

- Maximum quantity per line item:
  - 10,000 for Team products
  - 200,000 for Enterprise products
- Maximum line items per order:
  - 499
- Maximum length of `externalReferenceId`:
  - 35 characters
- Maximum `extLineItemNumber`:
  - 999999
