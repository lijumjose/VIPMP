# The Bridge UI

The Bridge is a partner-facing marketplace UI built directly on top of the VIP Marketplace Commerce Partner APIs (CPAPI). It gives distributors and resellers a direct, browser-based interface to VIP Marketplace capabilities, including purchasing, renewals, upgrades, account management, and pricing discovery, without requiring them to build or maintain their own API integration.

Everything the Bridge does is powered by the same Commerce Partner APIs described elsewhere in this documentation. If you have already built your own integration with these APIs, the Bridge is not intended to replace it. It is a complementary, ready-to-use UI that:

- Gives your team immediate access to new VIP Marketplace capabilities when they are released, without waiting for your own development cycle.
- Serves as a fail-safe for revenue continuity, helping you continue transactions if your own platform integration is temporarily unavailable.
- Provides a standardized reference implementation for the API-driven workflows described in this documentation.

Watch Bridge Overview video:

**Watch video [Sample video for testing]:**

<Embed slots="video" />

[Trial video](../assets/localize_content.mp4)

## Who can use the Bridge

The Bridge is provisioned only for allowlisted distributor and Platinum partner organizations. Adobe enables access at the organization level. Individual users within your organization are then assigned by your own Admin Console administrators. See [Getting started](./getting-started.md) for the full access process.

## Where to sign in

Use the following production URL to access the Bridge:

| Environment | URL                                                                            |
|-------------|--------------------------------------------------------------------------------|
| Production  | [https://bridge.marketplace.adobe.com/](https://bridge.marketplace.adobe.com/) |

Sign-in uses your normal Adobe ID, or IMS, credentials, which are the same credentials used elsewhere in the VIP Marketplace ecosystem.

## What you can do in the Bridge

The Bridge covers a growing subset of the workflows available through the Commerce Partner APIs, including reseller and customer management, catalog browsing, cart and checkout, Three-Year Commit, or 3YC, enrollment, mid-term changes, and flexible promotions. Some capabilities are currently API-only and are not yet exposed in the Bridge UI. See [Supported features](./supported-features.md) for the current breakdown, including the UI path for each supported feature.

## Next steps

Use the following resources to continue:

- [Getting started](./getting-started.md): Learn how your organization and users get access, and how to sign in.
- [Supported features](./supported-features.md): Review what you can do in the Bridge today, and what still requires direct API integration.
