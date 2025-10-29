# Upcoming releases

The following features are scheduled for release:

## Display source of the Order in Create Order and Get Order APIs

- Added the `source` parameter in the responses of [Create Order](../order_management/create_order.md) and [Get Order](../order_management/get_order.md) APIs, indicating the origin of the Order. Possible values are: `API`, `Bridge`, and `System`.

  With the upcoming Bridge UI, partners will have the ability to place orders both APIs and directly through the Bridge UI. This new field ensures transparency and help partners distinguish the origin of their orders.

## Changes to Get Customer List and Get Reseller List APIs

- Added the `companyProfile.companyName` parameter to [Get Customer List](../customer_account/get_customer_list.md) and [Get Reseller List](../reseller_account/get_reseller_list.md) API responses to display the customer name and reseller name, respectively.

## Display deploymentID and currencyCode in Reseller Transfer API responses

- Added `deploymentId` and `currencyCode` parameters to the responses of [Preview Reseller Transfer](../reseller_change/preview_transfer.md), [Commit Transfer](../reseller_change/commit_transfer.md), and [Get Reseller Transfer](../reseller_change/get_transfer.md) APIs.

## Base part number in the GET Open Acquisitions API response

- Introduced the `baseOfferId` parameter in the response payload of the GET Open Acquisitions (aka GET Licenses Pending Partner Order) API. This parameter in the API response allows partners to match the correct part number using product name details from notification emails and proceed with order placement.

  Read more about [Get licenses pending partner order API](../customer_account/get_licenses.md).

## Mid-term upgrades

The **VIP Marketplace – Mid-Term Upgrades** capability introduces a comprehensive set of APIs that allow Adobe partners to upgrade customer subscriptions **during the active term**, without waiting for the renewal date.

**New capabilities**

- **Upgrade path discovery**  
  Partners can retrieve valid upgrade paths using the new [GET Product Switch Paths](../mid_term/apis.md#discover-upgrade-path) API, filtered by market segment, country, and language.

- **Preview switch order**  
  A new `orderType` value, **`PREVIEW_SWITCH`**, has been added to the **Create Order API**. This allows partners to generate upgrade quotes before placing a switch order.

- **Switch order execution**  
  Partners can place upgrade orders using the `SWITCH` order type, specifying both the "From" and "To" product details. The API supports automatic user reassignment via the `reassign-users=true` query parameter.

- **Upgrade reversion**  
  Partners can revert a switch order within 14 days using the new `REVERT_SWITCH` and `PREVIEW_REVERT_SWITCH` order types. This restores the original subscription and de-provisions the upgraded product.

- **Partial and full upgrades**  
  The system supports both full and partial upgrades, including seat expansions and product transitions (example: Acrobat Standard to Acrobat Pro).

Read more about [Mid-term upgrades](../mid_term/index.md).
