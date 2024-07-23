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
            title: 'July 18, 2024',
            description: '',
            path: '/docs/release_notes/07_18_24.md'
          },
          {
            title: 'June 20, 2024',
            description: '',
            path: '/docs/release_notes/06_20_24.md'
          },
        ]
      },
      {
        title: 'Use Cases',
        menu: 
        [
          {
            title: 'Introduction',
            description: '',
            path: '/docs/introduction.md'
          },
          {
            title: 'Enable authentication and access',
            description: '',
            path: '/docs/authentication/index.md'
          },
          {
            title: 'Manage reseller accounts',
            description: '',
            path: '/docs/reseller_account/index.md'
          },
          {
            title: 'Manage customer accounts',
            description: '',
            path: '/docs/customer_account/index.md'
          },
          {
            title: 'Manage deployments',
            description: '',
            path: '/docs/deployment_management/index.md'
          },
          {
            title: 'Reseller change process',
            description: '',
            path: '/docs/reseller_change/index.md'
          },
          {
            title: 'Manager orders',
            description: '',
            path: '/docs/order_management/index.md'
          },
          {
            title: 'Manage subscriptions',
            description: '',
            path: '/docs/subscription_management/index.md'
          },
          {
            title: 'Migrate to VIP Marketplace',
            description: '',
            path: '/docs/migration/eligibility_rules.md'
          },
          {
            title: 'Manage notifications',
            description: '',
            path: 'docs/notification_management/get_details/'
          },
          {
            title: 'References',
            description: '',
            path: 'docs/references/index.md'
          },
          {
            title: 'Support',
            description: '',
            path: 'docs/support.md'
          },
        ]
      },
      {
        title: 'API Reference',
        menu: [
          {
            title: 'Partner APIs',
            description: '',
            path: '/api/index.md'
          }
        ]
      },
      {
        title: 'Sandbox User Guide',
        path: '/technical-assets'
      },
    ],
    subPages: 
    [
      {
        title: 'Introduction',
        path: '/docs/introduction.md'
      },
      {
        title: 'API authentication and access ',
        description: '',
        path: '/docs/authentication',
        pages: [
          {
            title: 'Health check',
            path: '/docs/authentication/health_check.md'
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
        ]
      },
      {
        title: 'Migrate to VIP Marketplace',
        description: '',
        path: '/docs/migration/eligibility_rules.md',
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
          },
        ]
      },
      {
        title: 'Support',
        description: '',
        path: 'docs/support.md'
      },
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
};
