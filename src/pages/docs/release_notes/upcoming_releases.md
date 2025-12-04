# Upcoming releases

The following features are scheduled for release:

## Mid-term upgrades

The **VIP Marketplace – Mid-Term Upgrades** capability introduces a comprehensive set of APIs that allow Adobe partners to upgrade customer subscriptions during the active term, without waiting for the renewal date.

**New capabilities**

- [Upgrade path discovery](../mid_term/apis.md#discover-upgrade-path) 
  Partners can retrieve valid upgrade paths using the new [GET Offer Switch Paths](../mid_term/apis.md#discover-upgrade-path) API, filtered by market segment, country, and language.

- [Preview switch order](../mid_term/apis.md#2-preview-switch-order)
  A new `orderType` value, **`PREVIEW_SWITCH`**, has been added to the **Create Order API**. This allows partners to generate upgrade quotes before placing a switch order.

- [Switch order execution](../mid_term/apis.md#apply-switch-plan) 
  Partners can place upgrade orders using the `SWITCH` order type, specifying both the "From" and "To" product details. The API supports automatic user reassignment via the `reassign-users=true` query parameter.

- [Upgrade reversion](../mid_term/apis.md#revert-switch-order)
  Partners can revert a switch order within 14 days using the new `REVERT_SWITCH` and `PREVIEW_REVERT_SWITCH` order types. This restores the original subscription and de-provisions the upgraded product.

- [Partial and full upgrades](../mid_term/apis.md#discover-upgrade-path) 
  The system supports both full and partial upgrades, including seat expansions and product transitions (example: Acrobat Standard to Acrobat Pro).

- [Enhanced Error Handling](../mid_term/error_codes.md)

  Several new error codes have been introduced to provide clear feedback for mid-term upgrade scenarios, including:

  - 2149: Quantity mismatch
  - 2150: Switch path validity check failed
  - 2151: Quantity exceeded
  - 2152: Multiple line items not supported
  - 2153: Line item and cancelling line item mismatch
  - 2154: Upgrade not supported
  - 3115: Invalid subscription

Read more about [Mid-term upgrades](../mid_term/index.md).
