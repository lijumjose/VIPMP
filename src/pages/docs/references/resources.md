# Resources and fields

Please see the Validations/Regular Expressions section for any regular expressions for specific
fields.

## Reseller (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|externalReferenceId | string <br /> Optional| Marketplace’s ID for reseller. ID does not need to be unique.| Max: 35 characters|
|distributorId | string | Adobe-generated unique ID for distributor tied to this reseller| Max: 40 characters|
|resellerId (read only)| string | Unique ID for reseller created upon account creation |Max: 40 characters|
|companyProfile | CompanyProfile resource| Information about the reseller| |
|creationDate (read only)| String (datetime)| Date and time of account creation in UTC| |
|status (read only)| string | Status code for the reseller account  |4 characters |
|links (read only)| Links resource | Deep links to get customer account details| |

## Customer (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|externalReferenceId | string <br />Optional| Marketplace’s ID for customer. ID does not need to be unique.| Max: 35 characters|
|customerId (read only)| string | Unique ID for customer created upon account creation| Max: 40 characters|
|resellerId | string | ID of reseller tied to customer | Max: 40 characters|
|companyProfile | `CompanyProfile` resource| Information about the customer | |
|cotermDate (read only)| String (date) | Date that renewal order is to be placed. Should be one year after the first order is provisioned (if a 1-yr term) and gets updated upon each renewal order.| 10 characters|
|creationDate (read only)| String (datetime)| Date and time of account creation in UTC| |
|status (read only)| string | Status code of customer account | 4 characters|
|links (read only)| **Links** resource | Deep links to get customer account details| |

## Deployment (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|deploymentId |String | Unique ID for the deployment generated upon deployment creation| Max: 40 characters|
|companyProfile | `CompanyProfile` resource| Information about the customer| |
|creationDate (read only)| String (datetime)| Date and time of account creation in UTC| |
|status | string | Status code of customer account | 4 characters|
|links (read only)| `Links` resource | Deep links to get customer account details| |

## CompanyProfile

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|companyName | string | Name of company| Min: 4 characters <br /> Max: 80 characters|
|preferredLanguage | string | Preferred language for company (IETF hyphenated language tag)| Max: 40 characters|
|address | `Address` resource| Address of company | |
|contacts | Array of `Contact` resources| Points of contact for admin console | Min: One contact <br /> No limit|

## Address

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|country | string | Country of address  (ISO 3166 standard) | 2 or 3 characters|
|region | string | State/region of the address (ISO 3166-2 <br /> standard – only send code after hyphen). <br /> Example: US-CA → CA| Max: 255 characters|
|city | string | City | Max: 40 characters|
|addressLine1 | string | Line 1 of the address | Max: 60 characters|
|addressLine2 | string | Optional. Line 2 of the address | Max: 60 characters|
|postalCode | string | Zip code/postal code of address. Must match city/region/country.| Max: 40 characters|
|phoneNumber | string | Optional. Phone number associated with this address| Max: 40 characters|

## Contact

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|email | string | Email address of the contact | Max: 240 characters|
|firstName | string | First name of the contact | Max: 35 characters|
|lastName | string | Last name of the contact | Max: 35 characters|
|phoneNumber | string | Optional. Phone number of the contact | Max: 40 characters|

## Order (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|externalReferenceId | string <br />Optional |Reconciliation ID for this order (Example: PO Number, Order ID, and so on). <br />ID does not need to be unique.| Max: 35 characters|
|orderId <br /> (read only)| string | Unique identifier for order that is created upon order creation| Max: 40 characters|
|customerId <br /> (read only)| string | ID of the customer that placed this order | Max: 40 characters|
|referenceOrderId | string <br /> required for RETURN orders| The ID of the order being returned in a RETURN order.| Max: 40 characters|
|orderType | String <br /> (enum)| Type of the order. Valid values: NEW, PREVIEW, RETURN, TRANSFER, RENEWAL| |
|lineItems | Array of LineItem resources| Itemized list of the offers and their quantity for this order| Min: 1 item <br />Max: 499 items|
|currencyCode | string | Currency used for placing the order (ISO 4217 format).| 3 characters|
|creationDate <br /> (read only)| String (datetime)| Date and time the order was created in UTC| |
|status (read only, except for canceling)| string | Status code of the order | 4 characters|
|links (read only)| `Links` resource | Deep links to get order details| |

## LineItem

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|extLineItemNumber| integer | Marketplace’s unique index for item in order| Min: 0 <br /> Max: 999999 <br /> Must be unique|
|offerId | string | The ID of the offer being purchased| |
|quantity | integer | Quantity of this offer purchased in this order| Min: 1 <br /> Max: 10,000 for Team / 599,000 for Enterprise|
|subscriptionId (read only)| string | ID of the Subscription resource associated with this line item.| Max: 40 characters|
|status (read only)| string | Status code of the line item | 4 characters|

## Subscription (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|subscriptionId (read only)| string | Unique identifier of the subscription resource | Max: 40 characters|
|currentQuantity (read only)| integer | Total quantity of the subscription that a customer has |Max: 10,000 for Team <br /> 599,000 for Enterprise|
|usedQuantity | integer | Total used quantity for the license or the consumable| |
|offerId | string | The base discount level offer id. <br /> **Note:** This attribute is included for developers to identify the offer and NOT the discount level. Partners need to use “Get customer Account” and “Get Order history” APIs to see discount level information.| |
|autoRenewal | `AutoRenewal` object| Resource to manage auto-renewal flag and quantity| |
|creationDate (read only)| String (datetime)| Date and time of subscription creation in UTC| |
|status (read only)| string | Current status code of the subscription | 4 characters|
|links (read only)| `Links` resource | Deep links to get subscription details| |

## Notification (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|limit | integer | Maximum number of notification items response can contain |0 to INTEGER_MAX|
|offset | integer | Number of notification items to skip before picking up the items| 0 to INTEGER_MAX|
|totalCount | integer | Total number of items present for a notification |0 to INTEGER_MAX|
|count | integer | Actual number of notification item response contains |0 to INTEGER_MAX|
|items | Array of `NotificationItem` resources| Itemized list of notifications| 0 to INTEGER_MAX|
|links(read only)| `Links` resource | Deep links to get notification details | |

## NotificationItem

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|customerId | string | Customer id for the account where partner order is pending| Max: 40 characters|
|resellerId | string | Reseller account id for the account whose partner order is still pending| Max: 40 characters|
|notificationType | string | Type of notification response| Max: 40 characters|
|links | `Links` resource | Deep links to get notification item details| |

## AutoRenewal

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|enabled | boolean | Boolean flag denoting whether or not autoRenewal is enabled| true or false|
|renewalQuantity | integer | Optional. Total quantity to be renewed at the end of the contract period (can be higher than the current subscription quantity)| Min: 1 <br /> Max: 10,000 for Team / 599,000 for Enterprise|

## Links

|Property | Type | Description |
|:----|:----|:----|
|self | `Link` object | Link to get data about this resource |
|next | `Link` object | Link to get data about the next resource |
|prev | `Link` object | Link to get data about the previous resource |
|uri |string |The URI to access this link|
|method |string |The method used for the URI |
|headers|Array of Key:Value pairs |The headers for the link. <br /> **Note:** Any headers in this are in addition to the required headers specified in the Headers section above. |
