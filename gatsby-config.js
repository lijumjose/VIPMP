/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/vipmp/',
  siteMetadata: 
  {
    pages: 
    [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Release Notes',
        menu: 
        [
          {
            title: 'Recent releases',
            description: '',
            path: '/docs/release-notes/index.md'
          },
          {
            title: 'Upcoming releases',
            description: '',
            path: '/docs/release-notes/upcoming-releases.md'
          },
        ]
      },
      {
        title: 'Use Cases',
        path: '/docs/index.md',
      },
      {
        title: 'Sandbox User Guide',
        path: 'sandbox/index.md'
      },
    ],
    subPages: 
    [
      {
        title: 'Introduction',
        path: '/docs/index.md'
      },
      {
        title: 'API authentication and access', 
        path: '/docs/authentication',
        pages: [
          {
            title: 'Health check',
            path: '/docs/authentication/health-check.md'
          },
          {
            title: 'Generate OAuth credentials',
            path: '/docs/authentication/oauth-credentials.md'
          }
        ]
      },
      {
        title: 'Manage resources',
        path: '/docs/resources',
        pages: [
          {
          title: 'Reseller accounts',
          description: '',
          path: '/docs/reseller_account',
          pages: [
            {
              title: 'Create a reseller account',
              path: '/docs/reseller-account/create-reseller-account.md'
            },
            {
              title: 'Get reseller account details',
              path: '/docs/reseller-account/get-reseller-account.md'
            },
            {
              title: 'Get reseller list',
              path: '/docs/reseller-account/get-reseller-list.md'
            },
            {
              title: 'Update a reseller account',
              path: '/docs/reseller-account/update-reseller-account.md'
            }
          ]
         },
         {
          title: 'Customer accounts',
          description: '',
          path: '/docs/customer-account/index.md',
          header: true,
          pages: [
            {
              title: 'Market segments',
              description: '',
              path: '/docs/market-segments/index.md',
            },
            {
              title: 'Create customer account',
              path: '/docs/customer-account/create-customer-account.md'
            },
            {
              title: 'Get customer account details',
              path: '/docs/customer-account/get-customer-account.md'
            },
            {
              title: 'Get customer list',
              path: '/docs/customer-account/get-customer-list.md'
            },
            {
              title: 'Update customer account',
              path: '/docs/customer-account/update-customer-account.md'
            },
            {
              title: 'Get licenses pending partner order',
              path: '/docs/customer-account/get-licenses.md'
            }
          ]
         },
         {
          title: 'Deployments',
          description: '',
          path: '/docs/deployment-management/index.md',
          header: true,
          pages: [
            {
              title: 'Create deployment',
              path: '/docs/deployment-management/create-deployment.md'
            },
            {
              title: 'Get deployment details',
              path: '/docs/deployment-management/get-deployment.md'
            },
            {
              title: 'Update a deployment of a customer',
              path: '/docs/deployment-management/update-deployment.md'
            }
          ]
         },
         {
          title: 'Orders',
          description: '',
          path: '/docs/order-management/index.md',
          header: true,
          pages: [
            {
              title: 'Create order',
              path: '/docs/order-management/create-order.md'
            },
            {
              title: 'Order creation scenarios',
              path: '/docs/order-management/order-scenarios.md'
            },
            {
              title: 'Get order details',
              path: '/docs/order-management/get-order.md'
            },
            {
              title: ' Update order',
              path: '/docs/order-management/update-order.md'
            }
          ]
         },
         {
          title: 'Subscriptions',
          description: 'Embed high-fidelity PDFs in web apps with analytics',
          path: '/docs/subscription-management/index.md',
          header: true,
          pages: [
            {
              title: 'Create subscription',
              path: '/docs/subscription-management/create-subscription.md'
            },
            {
              title: 'Get details of a specific subscription',
              path: '/docs/subscription-management/get-details.md'
            },
            {
              title: 'Get details of all subscriptions of a customer',
              path: '/docs/subscription-management/get-details-for-customers.md'
            },
            {
              title: 'Update subscription',
              path: '/docs/subscription-management/update-subscription.md'
            }
          ]
         },
         {
          title: 'Price Lists',
          description: '',
          path: '/docs/manage-pricing/index.md',
          header: true,
         },
         {
          title: 'Notifications',
          description: '',
          path: 'docs/notification-management/index.md',
          header: true,
         },
       ]
      },
      {
        title: 'Manage operational workflows',
        path: '/docs/resources/workflows.md',
        pages: [
          {
            title: 'Three-Year Commits',
            path: '/docs/customer-account/three-year-commit.md'
          },
          {
            title: 'Linked Memberships',
            path: '/docs/customer-account/linked-membership.md'
          },
          {
            title: 'High Growth Offers',
            path: '/docs/customer-account/high-growth.md',
            pages: [
              {
                title: 'High Growth Offer scenarios',
                path: '/docs/customer-account/high-growth-scenarios.md'
              },
              {
                title: 'Manage High Growth Offers through APIs',
                path: '/docs/customer-account/high-growth-apis.md'
              }
            ]
          },
          {
            title: 'Recommendations',
            description: '',
            path: '/docs/recommendations/index.md',
            header: true,
            pages: [
              {
                title: 'Manage Recommendations using APIs',
                path: '/docs/recommendations/apis.md'
              },
              {
                title: 'Error codes specific to Recommendations',
                path: '/docs/recommendations/error-codes.md'
              },
            ]
           },
           {
            title: 'Flexible Discounts',
            description: '',
            path: '/docs/flex-discounts/index.md',
            header: true,
            pages: [
              {
                title: 'Manage Flexible Discounts using APIs',
                path: '/docs/flex-discounts/apis.md'
              },
              {
                title: 'Error codes specific to Flexible Discounts',
                path: '/docs/flex-discounts/error-codes.md'
              },
            ]
           },
           {
            title: 'Mid-term upgrades',
            description: '',
            path: '/docs/mid-term/index.md',
            header: true,
            pages: [
              {
                title: 'Overview of mid-term upgrades',
                path: '/docs/mid-term/index.md'
              },
              {
                title: 'Manage mid-term upgrades through APIs',
                path: '/docs/mid-term/apis.md'
              },
              {
                title: 'Error codes specific to mid-term upgrades',
                path: '/docs/mid-term/error-codes.md'
              },
              {
                title: 'Frequently asked questions',
                path: '/docs/mid-term/faq.md'
              },
            ]
           },
        ]
      },
      {
          title: 'Manage business processes',
          path: '/docs/resources/processes.md',
          pages: [
            {
            title: 'Reseller change process',
            description: '',
            path: '/docs/reseller-change/index.md',
            header: true,
            pages: [
              {
                title: 'Preview a reseller transfer',
                path: '/docs/reseller-change/preview-transfer.md'
              },
              {
                title: 'Commit a reseller transfer',
                path: '/docs/reseller-change/commit-transfer.md'
              },
              {
                title: 'Get reseller transfer details',
                path: '/docs/reseller-change/get-transfer.md'
              }
           ]
          },
          {
            title: 'Migrate to VIP Marketplace',
            description: '',
            path: '/docs/migration/index.md',
            header: true,
            pages: [
              {
                title: 'Preview offers',
                path: '/docs/migration/preview-offers.md'
              },
              {
                title: 'Transfer subscriptions',
                path: '/docs/migration/transfer-subscription.md'
              },
              {
                title: 'Get transfer details',
                path: '/docs/migration/get-transfer-details.md'
              },
              {
                title: 'Migrate High Volume Discount customers from VIP to VIP Marketplace',
                path: '/docs/migration/migrate-hvd.md'
              }
            ]
          }
        ]
      },
      {
        title: 'References',
        description: '',
        path: 'docs/references/index.md',
        pages: [
          {
            title: 'API request header',
            path: 'docs/references/api-headers.md'
          },
          {
            title: 'Idempotency – Correlation ID Header',
            path: 'docs/references/idempotency.md'
          },
          {
            title: 'HTTP status codes',
            path: 'docs/references/status-codes.md'
          },
          {
            title: 'Status codes and error handling',
            path: 'docs/references/error-handling.md'
          },
          {
            title: 'Supported Countries and Locales',
            path: 'docs/references/supported-locales.md'
          },
          {
            title: 'Resources and fields',
            path: 'docs/references/resources.md'
          },
          {
            title: 'Validations and regular expressions',
            path: 'docs/references/validations.md'
          }
        ]
      },
      {
        title: 'Support',
        description: '',
        path: 'docs/support.md',
      },
      {
        title: 'Sandbox User Guide',
        description: '',
        path: 'sandbox',
        pages: [
          {
            title: 'API collection and interaction basics',
            path: 'sandbox/api-collection.md'
          },
          {
            title: 'Manage resources',
            path: 'sandbox/sandbox_portal',
            header: true,
            pages: [
              {
                title: 'Distributors',
                path: 'sandbox/distributor_management'
              },
              {
                title: 'Resellers',
                path: 'sandbox/sandbox_portal/reseller_management',
                header: true,
                pages: [
                  {
                  title: 'Create a reseller',
                  path: 'sandbox/sandbox-portal/reseller-management/create-reseller.md'
                  },
                  {
                  title: 'View reseller information',
                  path: 'sandbox/sandbox-portal/reseller-management/view-reseller-info.md'
                  },
                  {
                   title: 'Edit reseller status',
                   path: 'sandbox/sandbox-portal/reseller-management/view-reseller-info.md'
                  },
                  ]
              },
              {
                title: 'Customers',
                path: 'sandbox/sandbox_portal/customer_management',
                header: true,
                pages: [
                  {
                  title: 'Create a customer',
                  path: 'sandbox/sandbox-portal/customer-management/create-customer.md'
                  },
                  {
                  title: 'Create Purchase Authorizations for a customer',
                  path: 'sandbox/sandbox-portal/customer-management/create-pa-for-customer.md'
                  },
                  {
                   title: 'View customer details',
                   path: 'sandbox/sandbox-portal/customer-management/get-customer-details.md'
                  },
                  {
                    title: 'Update customer details',
                    path: 'sandbox/sandbox-portal/customer-management/update-customer.md'
                   },
                   {
                    title: 'Update reseller details of a customer',
                    path: 'sandbox/sandbox-portal/customer-management/update-reseller.md'
                   },
                  ]
              },
              {
                title: 'Deployments',
                path: 'sandbox/sandbox_portal/deployment_management',
                header: true,
              },
              {
                title: 'Orders',
                path: 'sandbox/sandbox_portal/order_management',
                header: true,
                pages: [
                  {
                  title: 'Create order',
                  path: 'sandbox/sandbox-portal/order-management/create-order.md'
                  },
                  {
                  title: 'Search and view order details',
                  path: 'sandbox/sandbox-portal/order-management/view-order-details.md'
                  },
                  {
                   title: 'Edit the order status and creation date',
                   path: 'sandbox/sandbox-portal/order-management/edit-order-status.md'
                  },
                  {
                    title: 'Cancel an order',
                    path: 'sandbox/sandbox-portal/order-management/cancel-order.md'
                  },
                  {
                    title: 'Place manual renewal order',
                    path: 'sandbox/sandbox-portal/order-management/manual-renewal.md'
                  },
                  ]
              },
              {
                title: 'Subscriptions',
                path: 'sandbox/sandbox_portal/subscription_management',
                header: true,
                pages: [
                  {
                  title: 'View subscription details',
                  path: 'sandbox/sandbox-portal/subscription-management/view-subscription.md'
                  },
                  {
                  title: 'Update auto-renewal configuration',
                  path: 'sandbox/sandbox-portal/subscription-management/update-auto-renwal.md'
                  },
                  {
                    title: 'Expire an active subscription',
                    path: 'sandbox/sandbox-portal/subscription-management/expire-subscription.md'
                  },
                  ]
              },
              {
                title: 'Large Government Agencies',
                path: 'sandbox/sandbox_portal/lga',
                header: true,
              },
            ],
          },
          {
            title: 'Test operational workflows',
            path: 'sandbox/sandbox-portal/operations.md',
            header: true,
            pages: [
              {
                title: 'Three-Year Commits (3YC)',
                path: 'sandbox/sandbox_portal/3yc_management',
                header: true,
                pages: [
                  {
                  title: 'View 3YC benefits status',
                  path: 'sandbox/sandbox-portal/3yc-management/view-3yc-status.md'
                  },
                  ]
              },
              {
                title: 'Linked Memberships',
                path: 'sandbox/sandbox_portal/linked_memberships',
                header: true,
                pages: [
                  {
                  title: 'Enroll in a Linked Membership',
                  path: 'sandbox/sandbox-portal/linked-memberships/enroll.md'
                  },
                  {
                  title: 'View Linked Membership details',
                  path: 'sandbox/sandbox-portal/linked-memberships/view-details.md'
                  },
                  ]
              },
              {
                title: 'High Growth Offers for customers',
                path: 'sandbox/sandbox-portal/high-growth-offer/high-growth.md',
                header: true,
              },
              
              {
                title: 'Recommendations',
                path: 'sandbox/sandbox_portal/recommendations',
                header: true,
              },
              {
                title: 'Flexible Discounts',
                path: 'sandbox/sandbox_portal/flex_discounts',
                header: true,
              },
            ],
          },
          {
            title: 'Manage membership transfers',
            path: 'sandbox/sandbox_portal/transfer_memberships',
            header: true,
            pages: [
              {
              title: 'Create memberships',
              path: 'sandbox/sandbox-portal/transfer-memberships/create-memberships.md'
              },
              {
              title: 'View memberships',
              path: 'sandbox/sandbox-portal/transfer-memberships/list-memberships.md'
              },
              {
                title: 'Migrate HVD customers to VIP Marketplace',
                path: 'sandbox/sandbox-portal/migrate-hvd-customers/migrate-hvd-customers.md'
              },
              {
                title: 'View renewal status of memberships ',
                path: 'sandbox/sandbox-portal/transfer-memberships/view-renewal-status.md'
              },
              ]
          },
          {
            title: 'Portal resources',
            path: 'sandbox/sandbox_portal/portal_resources',
            header: true,
          },
          {
            title: 'Other API tools',
            path: 'sandbox/sandbox_portal/other_apis',
            header: true,
          },
          {
            title: 'Error codes',
            path: 'sandbox/error-codes.md',
            header: true,
          },
          {
            title: 'Sandbox support',
            path: 'sandbox/sandbox-support.md',
            header: true,
          }
          ]
       }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
};
