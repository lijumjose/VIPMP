# Health check

Use the following two APIs to see whether you have the required access to run the VIP  Marketplace APIs:

- [Ping](#ping)
- [Authenticated ping](#authenticated-ping)

## Ping

Use the `GET /ping` endpoint to verify whether the resources are accessible.

Sample request:

```http
GET /ping
X-Api-Key: <your-api-key>
```

This API returns with `pong` to confirm the ping.

## Authenticated Ping

You can use the `Authenticated Ping` endpoint to verify that the service is available and your API Key and Authorization Token are valid.

```http
GET https://partners.adobe.io/partnerservice/ping
X-Api-Key: <your-api-key>
Authorization: <access_token>
```

The API responds with  `pong` to confirm the authenticated access.
