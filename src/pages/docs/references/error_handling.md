# Status codes and error handling

|Status Code | Description | Applicable Resources |
|:----|:----|:----|
|1000| **Resource Status:** Green <br />Account - Active <br /> Order - Complete/Filled <br /> Subscription - Active| Reseller Account, Customer Account, Order, Subscription Transfer, Deployment|
|1002 | **Resource Status:** Yellow <br /> Account - Pending <br /> Order - Open <br /> Subscription - Pending | Reseller Account, Customer Account, Order, Subscription Transfer|
|1004| **Resource Status: Red** <br /> Account - Inactive <br /> Order - Failed <br /> | |
|Subscription - Inactive <br /> If there is another status code that describes the status better, that code will be used instead.| Reseller Account, Customer Account, Order, Subscription |Transfer, Deployment|
|1008 | **Order Status:** Cancelled | Order|
|1010| Account Status: Inactive <br /> **Reason:** Invalid Address| Reseller Account, Customer Account|
|1012| **Account Status:** Inactive <br /> Reason: Account is blocked| Reseller Account, Customer Account|
|1014| **Account Status:** Inactive <br /> **Reason:** Customer already exists with the same Company Name and primary admin|Customer Account|
|1020| **Order Status:** Failed |**Reason:** Distributor is inactive|
|1022| **Order Status:** Failed <br /> **Reason:** Reseller is inactive| Order|
|1024| **Order Status:** Failed <br /> Reason: Customer is inactive| Order|
|1026|**Order Status:** Failed <br /> **Reason:** Customer ID is invalid|Order|

## Error handling

Any Commerce Partner API status response with a 4xx or 5xx HTTP status code includes an error message consisting of a code field containing the HTTP response code, and a message field describing the error. Below is an example error response:

### Response body

```json
{
    "code": "1117",
    "message": "Some Fields are Invalid""additionalDetails": [
        "companyProfile.companyName",
        "companyProfile.contacts[0].firstName"
    ]
}
```

Some error responses will include additionalDetails, an array of strings with more information on the specific error. These strings may include the names of fields with errors, line-item numbers, more specific reasoning, or other information.

|Error Code| Message | Applicable API calls| HTTP Status Code|
|---|---|---|--|
|1114 | Invalid Distributor | Create Reseller Account | 400|
|1115 | Invalid Reseller|Create Customer Account, Get Reseller Account, Update Reseller Account, Reseller Change Preview, Reseller Change Commit| 404|
|1116 | Invalid Customer| Get Customer Account, Update Customer Account, Get Order History, Get All Subscriptions |404|
|1117| Some fields are invalid <br /> For debugging purposes, the names of the fields will be included in the invalidFields array in the response body.| Create Reseller, Update Reseller, Create Customer, Update Customer, Create Order, Update Subscription Auto-Renewal|400|
|1118| Invalid Address <br /> **Note:** If address and other fields are invalid, then 1117 will be used. |Create Reseller, Update Reseller, Create Customer, Update Customer |400|
|1119 | Some fields are not editable| Update Customer, Update Reseller, Cancel Order, Update Subscription Auto-Renewal| 400|
|1121| Request contains additional unexpected fields.| All | 400|
|1122 | Request is missing required fields | All (except for GETs) | 400|
|1123 | Duplicate `externalReferenceId` | Deprecated | 400|
|1124| Internal Server Error. Please try again later |All | 500|
|1125| Account cannot be updated while status is pending or blocked| Update Reseller, Update Customer| 400|
|1126| Customer cannot be created because reseller account is inactive| Create Customer | 400|
|1127 | Account already exists | Create Customer | 400|
|1128 | Invalid Reseller Change Code| Reseller Change Preview, Reseller Change Commit |404|
|1129 | Reseller Change Code is expired |Reseller Change Preview, Reseller Change Commit| 404|
|1131 | Reseller Change is already complete |Reseller Change Preview, Reseller Change Commit| 400|
|1132 | Invalid value for search parameter | Get Order History (V3) | 400|
|1133 | Offset out of range | Get Order History (V3) | 400|
|1134| Invalid operation on path [INVALID_RESELLER_ID : Reseller ID in the input is either invalid or same as the current reseller id]| Reseller Change Preview, Reseller Change Commit| 400|
|1139 | Partner is not enabled for global sales| Update Customer, Reseller Change Commit, Create Deployment, Create Order|400|
|1140 | Customer is not enabled for global sales |Update Customer, Reseller Change Commit, Create Deployment, Create order|400|
|1141| Deployment and customer country cannot be the same |Create Deployment | 400|
|1142| Market segment not allowed for global sales| Update Customer, Create Order| 400|
|2115 | Invalid Customer or Order ID |Get Order Details, Cancel Order| 404|
|2116 | Invalid status | Cancel Order | 400|
|2117 | Cancellation window has closed | Cancel Order | 400|
|2118 | Order has already been cancelled | Cancel Order | 400|
|2119 | Too many line items| Preview Order, Create Order |400|
|2120 | Line item quantity out of range| Preview Order, Create Order |400|
|2121 | Duplicate line item numbers| Preview Order, Create Order|400|
|2122 | Line item Offer ID is invalid |Preview Order, Create Order| 400|
|2123 | extLineItemNumber out of range |Preview Order, Create Order| 400|
|2124| Distributor not allowed to sell the program |Preview Order, Create Order| 400|
|2125| Distributor not allowed to sell in the currency for the region |Preview Order, Create Order| 400|
|2126| externalReferenceId exceeds maximum character limit | Create Order, Create Reseller, |Create Customer|
|2128 | Currency is not valid for Offer ID |Preview Order, Create Order| 400|
|2129| Customer is not eligible to purchase Offer ID at line item: #| Create Order | 400|
|2130| Line item Offer ID does not match original order| Create Return Order (V3) | 400|
|2131| extLineItemNumber does not match original order |Create Return Order (V3) | 400|
|2132| Line item quantity does not match original order |Create Return Order (V3) | 400|
|2133 | Line item has already been returned | Create Return Order (V3) | 400|
|2134| |Line item cannot be returned as the order already expired |Create Return Order (V3) |
|2135| Invalid market segment used for customer |Create Reseller, Update Reseller, Create Customer, Update Customer| 400|
|2136| Please review the renewal settings. Auto-renewal needs to be turned on for at least 1 quantity |Create PREVIEW_RENEWAL Order | 400|
|2137 | Currency code not aligned | Create Order | 400|
|2138 | Invalid Deployment | Create Order |404|
|2139| Deployment not allowed for this contract |Create Order | 400|
|2140| Order contains order level currency and line-item level currency |Create Order | 400|
|3115 | Invalid Customer or Subscription ID| Get Subscription Details, Update Subscription Auto-Renewal| 404|
|3116 | renewalQuantity out of range |Update Subscription Auto-Renewal| 400|
|3117 | currentQuantity out of range | | 400|
|3118 | orderQuantity out of range | | 400|
|3119 |Inactive Subscription is not Editable |Update Subscription Auto-Renewal|400|
|3120| Update could not be performed because it would create an invalid renewal order |Update Subscription Auto-Renewal| 400|
|3121 | Subscription is Active |Renewal Order after Anniversary Date| |
|3122 | Not within Renewal Window |Renewal Order attempted 30 days after Anniversary Date| |
|4115 | API key is invalid or missing | All [Adobe I/O] | 403|
|4116 | Authorization token is invalid | All [Adobe I/O] | 401|
|4117 | Authorization token is missing | All [Adobe I/O] | 403|
|4118 | Too many requests | All [Adobe I/O] | 429|
|4119 | Correlation ID is Invalid or Missing | All | 400|
|4120| Duplicate request id, same requestId has already been processed |All | 400|
|4121| You are not allowed to perform that action on this resource| All | 403|
|5115 | Invalid Membership ID |Preview Offers, Transfer Subscriptions| 400|
|5116 | Invalid Membership or Transfer ID | Get Transfer Details | 400|
|5117| Customer is not eligible for transfer (see table below for REASON_CODE list)| Preview Offers, Transfer Subscriptions| 400|
|5118 | Customer has already been transferred |Preview Offers, Transfer Subscriptions| 400|
|5119| Customer cannot be transferred because reseller account is inactive |Transfer Subscriptions | 400|
|5120| Customer cannot be transferred because there are no admin contacts |Preview Offers, Transfer Subscriptions| 400|
|5121| Transfer currently in progress for this customer| Preview Offers, Transfer Subscriptions| 400|

## 2129 Ineligible Purchase REASON_CODE List

These REASON_CODE values are included in the `additionalDetails` array for 2129 errors.

|REASON_CODE | Description | Action Required|
|----| --- | -- |
|INELIGIBLE_SWITCH| The order includes products that are incompatible with each other or with a product the customer already has. |Try removing the incompatible line item and placing the order again |
|INELIGIBLE_ADD_ON| Customer is attempting to purchase an add-on product without the base product.| Try placing the order again with the base product included.|
|INELIGIBLE_CONSUMED| RETURN order only: customer is attempting to return a consumable product that has already been consumed. |Order cannot be returned if the transactions are consumed. |
|INELIGIBLE_MARKET_SEGMENT| The order includes an item that belongs to a market segment that either the reseller or the customer do not belong to.| Ensure the correct offer is used for the customer and reseller’s market segment.|

## 5117 Ineligible Transfer REASON_CODE List

These REASON_CODE values are included in the `additionalDetails` array for 5117 errors.

|REASON_CODE | Description | Action Required|
|:----| ----| ---|
|INVALID_COUNTRY| Customer is not in a valid country for this distributor |Try a distributor in a different region or wait until the distributor supports customer’s country.|
|BAD_MARKET_SEGMENT| Customer’s market segment is either not supported for this distributor or for VIPMP |Try a different distributor that supports customer’s market segment or wait for a VIPMP change to allow the market segment.|
|INACTIVE | VIP Account is inactive| Customer/reseller must reactivate VIP account.|
|EXTENDED_TERM_3YC| Customer’s contract term length is not supported by VIPMP| Wait for terms to be supported by VIPMP or wait until current term ends.|
|OPEN_PURCHASE_AUTH| Customer has open purchase authorization(s)| Open PAs must be cancelled/returned if possible) or converted to order and paid for. <br /> Can also be bypassed with the `expire-open-pas` query parameter|
|CONTRACT_NOT_ACCEPTED| Customer’s VIP contract has not been accepted| Customer must set up an administrator to accept VIP contract.|
|IN_WINDOW_PARTIAL_RENEWAL| Customer is in the renewal window prior to their anniversary date and they have partially renewed.| Customer must either renew all active licenses or wait until their anniversary date.|
|RETURNABLE_PURCHASE| Customer has order(s) still in the return window |Wait until return window has closed (14 days after last order). <br /> It can also be bypassed with `ignore-order-return` query parameter.|
|NO_TARGET_SKU| Customer has product(s) that are not valid VIPMP product(s)| Wait for products to be supported in VIPMP.|
|UNBILLED_ORDER| Customer has unbilled order items| Customer must pay for all orders. If they have not received an invoice, then the customer needs to contact Adobe.|
|UNPAID_INVOICE| Customer has open/unpaid invoice(s) |Customer must pay for open invoice(s).|
|LINK_MEMBERSHIP_CHECK| Customer is part of linked membership |Wait for the Linked Membership transfer capability to be supported|
|HAS_UNPROCESSED_ORDERS| There is some internal issue for the customer |Please reach out to support for assistance|
|NOT_A_FULL_RENEWAL_IN_RENEWAL_WINDOW| The customer is in the renewal window prior to their anniversary date, and they have partially renewed.| Customer must either renew all active licenses or wait until their anniversary date.|
|LICENSE_WITHOUT_SALE_AQO_REFERENCED| There is some internal issue for the customer |Please reach out to support for assistance |
|SRC_DST_OFFER_IDS_HAS_PA_MISMATCH| There is some internal issue for the customer |Please reach out to support for assistance|