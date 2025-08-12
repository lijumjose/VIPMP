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
            path: '/docs/release_notes/index.md'
          },
          {
            title: 'Upcoming releases',
            description: '',
            path: '/docs/release_notes/upcoming_releases.md'
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
            path: '/docs/authentication/health_check.md'
          },
          {
            title: 'Generate OAuth credentials',
            path: '/docs/authentication/oauth_credentials.md'
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
              path: '/docs/reseller_account/create_reseller_account.md'
            },
            {
              title: 'Get reseller account details',
              path: '/docs/reseller_account/get_reseller_account.md'
            },
            {
              title: 'Get reseller list',
              path: '/docs/reseller_account/get_reseller_list.md'
            },
            {
              title: 'Update a reseller account',
              path: '/docs/reseller_account/update_reseller_account.md'
            }
          ]
         },
         {
          title: 'Customer accounts',
          description: '',
          path: '/docs/customer_account/index.md',
          header: true,
          pages: [
            {
              title: 'Market segments',
              description: '',
              path: '/docs/market_segments/index.md',
            },
            {
              title: 'Create customer account',
              path: '/docs/customer_account/create_customer_account.md'
            },
            {
              title: 'Get customer account details',
              path: '/docs/customer_account/get_customer_account.md'
            },
            {
              title: 'Get customer list',
              path: '/docs/customer_account/get_customer_list.md'
            },
            {
              title: 'Update customer account',
              path: '/docs/customer_account/update_customer_account.md'
            },
            {
              title: 'Get licenses pending partner order',
              path: '/docs/customer_account/get_licenses.md'
            }
          ]
         },
         {
          title: 'Deployments',
          description: '',
          path: '/docs/deployment_management/index.md',
          header: true,
          pages: [
            {
              title: 'Create deployment',
              path: '/docs/deployment_management/create_deployment.md'
            },
            {
              title: 'Get deployment details',
              path: '/docs/deployment_management/get_deployment.md'
            },
            {
              title: 'Update a deployment of a customer',
              path: '/docs/deployment_management/update_deployment.md'
            }
          ]
         },
         {
          title: 'Orders',
          description: '',
          path: '/docs/order_management/index.md',
          header: true,
          pages: [
            {
              title: 'Create order',
              path: '/docs/order_management/create_order.md'
            },
            {
              title: 'Order creation scenarios',
              path: '/docs/order_management/order_scenarios.md'
            },
            {
              title: 'Get order details',
              path: '/docs/order_management/get_order.md'
            },
            {
              title: ' Update order',
              path: '/docs/order_management/update_order.md'
            }
          ]
         },
         {
          title: 'Subscriptions',
          description: 'Embed high-fidelity PDFs in web apps with analytics',
          path: '/docs/subscription_management/index.md',
          header: true,
          pages: [
            {
              title: 'Create subscription',
              path: '/docs/subscription_management/create_subscription.md'
            },
            {
              title: 'Get details of a specific subscription',
              path: '/docs/subscription_management/get_details.md'
            },
            {
              title: 'Get details of all subscriptions of a customer',
              path: '/docs/subscription_management/get_details_for_customers.md'
            },
            {
              title: 'Update subscription',
              path: '/docs/subscription_management/update_subscription.md'
            }
          ]
         },
         {
          title: 'Price Lists',
          description: '',
          path: '/docs/manage_pricing/index.md',
          header: true,
         },
         {
          title: 'Notifications',
          description: '',
          path: 'docs/notification_management/index.md',
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
            path: '/docs/customer_account/three_year_commit.md'
          },
          {
            title: 'Linked Memberships',
            path: '/docs/customer_account/linked_membership.md'
          },
          {
            title: 'High Growth Offers',
            path: '/docs/customer_account/high_growth.md',
            pages: [
              {
                title: 'High Growth Offer scenarios',
                path: '/docs/customer_account/high_growth_scenarios.md'
              },
              {
                title: 'Manage High Growth Offers through APIs',
                path: '/docs/customer_account/high_growth_apis.md'
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
                path: '/docs/recommendations/error_codes.md'
              },
            ]
           },
           {
            title: 'Flexible Discounts',
            description: '',
            path: '/docs/flex_discounts/index.md',
            header: true,
            pages: [
              {
                title: 'Manage Flexible Discounts using APIs',
                path: '/docs/flex_discounts/apis.md'
              },
              {
                title: 'Error codes specific to Flexible Discounts',
                path: '/docs/flex_discounts/error_codes.md'
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
            path: '/docs/reseller_change/index.md',
            header: true,
            pages: [
              {
                title: 'Preview a reseller transfer',
                path: '/docs/reseller_change/preview_transfer.md'
              },
              {
                title: 'Commit a reseller transfer',
                path: '/docs/reseller_change/commit_transfer.md'
              },
              {
                title: 'Get reseller transfer details',
                path: '/docs/reseller_change/get_transfer.md'
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
                path: '/docs/migration/preview_offers.md'
              },
              {
                title: 'Transfer subscriptions',
                path: '/docs/migration/transfer_subscription.md'
              },
              {
                title: 'Get transfer details',
                path: '/docs/migration/get_transfer_details.md'
              },
              {
                title: 'Migrate High Volume Discount customers from VIP to VIP Marketplace',
                path: '/docs/migration/migrate_hvd.md'
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
            path: 'docs/references/api_headers.md'
          },
          {
            title: 'Idempotency – Correlation ID Header',
            path: 'docs/references/idempotency.md'
          },
          {
            title: 'HTTP status codes',
            path: 'docs/references/status_codes.md'
          },
          {
            title: 'Status codes and error handling',
            path: 'docs/references/error_handling.md'
          },
          {
            title: 'Supported Countries and Locales',
            path: 'docs/references/supported_locales.md'
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
            path: 'sandbox/api_collection.md'
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
                  path: 'sandbox/sandbox_portal/reseller_management/create_reseller.md'
                  },
                  {
                  title: 'View reseller information',
                  path: 'sandbox/sandbox_portal/reseller_management/view_reseller_info.md'
                  },
                  {
                   title: 'Edit reseller status',
                   path: 'sandbox/sandbox_portal/reseller_management/view_reseller_info.md'
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
                  path: 'sandbox/sandbox_portal/customer_management/create_customer.md'
                  },
                  {
                  title: 'Create Product Arrangements for a customer',
                  path: 'sandbox/sandbox_portal/customer_management/create_pa_for_customer.md'
                  },
                  {
                   title: 'View customer details',
                   path: 'sandbox/sandbox_portal/customer_management/get_customer_details.md'
                  },
                  {
                    title: 'Update customer details',
                    path: 'sandbox/sandbox_portal/customer_management/update_customer.md'
                   },
                   {
                    title: 'Update reseller details of a customer',
                    path: 'sandbox/sandbox_portal/customer_management/update_reseller.md'
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
                  path: 'sandbox/sandbox_portal/order_management/create_order.md'
                  },
                  {
                  title: 'Search and view order details',
                  path: 'sandbox/sandbox_portal/order_management/view_order_details.md'
                  },
                  {
                   title: 'Edit the order status and creation date',
                   path: 'sandbox/sandbox_portal/order_management/edit_order_status.md'
                  },
                  {
                    title: 'Cancel an order',
                    path: 'sandbox/sandbox_portal/order_management/cancel_order.md'
                  },
                  {
                    title: 'Place manual renewal order',
                    path: 'sandbox/sandbox_portal/order_management/manual_renewal.md'
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
                  path: 'sandbox/sandbox_portal/subscription_management/view_subscription.md'
                  },
                  {
                  title: 'Update auto-renewal configuration',
                  path: 'sandbox/sandbox_portal/subscription_management/Update_auto_renwal.md'
                  },
                  {
                    title: 'Expire an active subscription',
                    path: 'sandbox/sandbox_portal/subscription_management/expire_subscription.md'
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
            path: 'sandbox/sandbox_portal/operations.md',
            header: true,
            pages: [
              {
                title: 'Three-Year Commits (3YC)',
                path: 'sandbox/sandbox_portal/3yc_management',
                header: true,
                pages: [
                  {
                  title: 'View 3YC benefits status',
                  path: 'sandbox/sandbox_portal/3yc_management/view_3yc_status.md'
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
                  path: 'sandbox/sandbox_portal/linked_memberships/enroll.md'
                  },
                  {
                  title: 'View Linked Membership details',
                  path: 'sandbox/sandbox_portal/linked_memberships/view_details.md'
                  },
                  ]
              },
              {
                title: 'High Growth Offers for customers',
                path: 'sandbox/sandbox_portal/high_growth_offer/high_growth.md',
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
              path: 'sandbox/sandbox_portal/transfer_memberships/create_memberships.md'
              },
              {
              title: 'View memberships',
              path: 'sandbox/sandbox_portal/transfer_memberships/list_memberships.md'
              },
              {
                title: 'Migrate HVD customers to VIP Marketplace',
                path: 'sandbox/sandbox_portal/migrate_hvd_customers/migrate_hvd_customers.md'
              },
              {
                title: 'View renewal status of memberships ',
                path: 'sandbox/sandbox_portal/transfer_memberships/view_renewal_status.md'
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
            path: 'sandbox/error_codes.md',
            header: true,
          },
          {
            title: 'Sandbox support',
            path: 'sandbox/sandbox_support.md',
            header: true,
          }
          ]
       }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
};
