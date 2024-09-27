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
            title: '2024 releases',
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
        path: 'sandbox/introduction/index.md'
      },
    ],
    subPages: 
    [
      {
        title: 'Introduction',
        path: '/docs/index.md'
      },
      {
        title: 'API authentication and access ',
        description: '',
        path: '/docs/authentication',
        pages: [
          {
            title: 'Health check',
            path: '/docs/authentication/health_check.md'
          }
        ]
      },
      {
        title: 'Manage reseller accounts',
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
            title: 'Update a reseller account',
            path: '/docs/reseller_account/update_reseller_account.md'
          }
        ]
      },
      {
        title: 'Manage customer accounts',
        description: '',
        path: '/docs/customer_account/index.md',
        pages: [
          {
            title: 'Manage market segments',
            path: '/docs/customer_account/market_segment.md'
          },
          {
            title: 'Manage Three-Year Commits',
            path: '/docs/customer_account/three_year_commit.md'
          },
          {
            title: 'Manage linked memberships',
            path: '/docs/customer_account/linked_membership.md'
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
        title: 'Manage deployments',
        description: '',
        path: '/docs/deployment_management/index.md',
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
        title: 'Reseller change process',
        description: '',
        path: '/docs/reseller_change/index.md',
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
        title: 'Manager orders',
        description: '',
        path: '/docs/order_management/index.md',
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
        title: 'Manage subscriptions',
        description: 'Embed high-fidelity PDFs in web apps with analytics',
        path: '/docs/subscription_management/index.md',
        pages: [
          {
            title: 'Get details of a specific subscription',
            path: '/docs/subscription_management/get_details.md'
          },
          {
            title: 'Get details of all subscriptions of a customer',
            path: '/docs/subscription_management/get_details_for_customers.md'
          },
          {
            title: 'Update auto-renewal configuration of a subscription',
            path: '/docs/subscription_management/update_auto_renewal.md'
          }
        ]
      },
      {
        title: 'Migrate to VIP Marketplace',
        description: '',
        path: '/docs/migration/index.md',
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
          }
        ]
      },
      {
        title: 'Manage notifications',
        description: '',
        path: 'docs/notification_management/index.md'
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
        path: 'docs/support.md'
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
            title: 'Manage distributors',
            path: 'sandbox/distributor_management'
          },
          {
            title: 'Sandbox Use Cases',
            path: 'sandbox/sandbox_portal',
            header: true,
          },
          {
            title: 'Manage resellers',
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
            title: 'Manage customers',
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
            title: 'Manage three-year commits (3YC)',
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
            title: 'Manage linked memberships',
            path: 'sandbox/sandbox_portal/linked_memberships',
            header: true,
            pages: [
              {
              title: 'Enroll in a linked membership',
              path: 'sandbox/sandbox_portal/linked_memberships/enroll.md'
              },
              {
              title: 'View linked membership details',
              path: 'sandbox/sandbox_portal/linked_memberships/view_details.md'
              },
              ]
          },
          {
            title: 'Management deployments',
            path: 'sandbox/sandbox_portal/deployment_management',
            header: true,
          },
          {
            title: 'Manage orders',
            path: 'sandbox_portal/order_management',
            header: true,
            pages: [
              {
              title: 'Create order',
              path: 'sandbox_portal/order_management/create_order.md'
              },
              {
              title: 'Search and view order details',
              path: 'sandbox_portal/order_management/view_order_details.md'
              },
              {
               title: 'Edit the order status and creation date',
               path: 'sandbox_portal/order_management/edit_order_status.md'
              },
              {
                title: 'Cancel an order',
                path: 'sandbox_portal/order_management/.md'
              },
              ]
          },
          {
            title: 'Manage subscriptions',
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
              ]
          },
          {
            title: 'Managing membership transfers',
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
