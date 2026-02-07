# Identity management and authentication

The Commerce Partner APIs use Adobe’s standard OAuth Authentication method.

All API calls for a distributor originate from that distributor’s IMS Organization. After a direct partner signs the contract and provides the necessary onboarding information, Adobe creates an IMS Organization for that partner with admins that the partner specified. Admins can manage users and other admins using the Adobe Admin Console. Once the organization is created, production credentials can be generated self-service though the Adobe Developer Console. System admins and developers of the organization will have access to the Adobe Developer Console.

All API calls, with the exception of `/ping`, requires a valid IMS access token. To obtain a valid access token, you must use the credentials obtained from the Developer Console to generate a JWT and exchange the JWT for an access token using the IMS exchange API. Refer to the following documentation for more information on creating a project in the Developer Console and retrieving an access token:

- [Developer Console Overview](https://developer.adobe.com/developer-console/docs/guides/)
- [Authentication Guide](https://developer.adobe.com/developer-console/docs/guides/authentication/)

Adobe provides credentials to users for accessing the Sandbox environment. The authentication flow is the same in the sandbox environment (generating JWT, exchanging JWT for access token), with the difference being in the Partner API URL and the IMS URL.

|                          | Sandbox                                 | Production                       |
|--------------------------|-----------------------------------------|----------------------------------|
| **Partner API Base URL** | [https://partnersandbox-stage.adobe.io](https://partnersandbox-stage.adobe.io) | [https://partners.adobe.io](https://partners.adobe.io)      |
| **IMS Base URL**         | [https://ims-na1-stg1.adobelogin.com](https://ims-na1-stg1.adobelogin.com)   | [https://ims-na1.adobelogin.com](https://ims-na1.adobelogin.com) |
| **Metascope**            | ent_partners_sdk                        | ent_partners_sdk                 |
