# Managing membership transfers

Processing Subscription transfers involves actions from the Portal and an API call. The preliminary work, which will result in creatiing a Membership ID, is done in the Portal. Subscription transfer is done through an API call, which requires the Membership ID previously created in the Portal.

It is worth noting that, in production, these Membership IDs come from existing customers that are already VIP and transitioning to the VIP Marketplace whereas in the Sandbox these test Membership IDs are created in the Portal.

There are two ways of creating a Membership ID in the Portal:

- Quick Create – This method will create a Membership ID that is always eligible for transfer.
- Custom Create – This method will result in creating a Membership ID that may or may not be eligible.
