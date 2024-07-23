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
            path: '/docs/release_notes/index.md'
          },
          {
            title: 'August 10, 2024',
            description: '',
            path: '/docs/release_notes/index.md'
          },
        ]
      },
      {
        title: 'Use Cases',
        menu: 
        [
          {
            title: 'Release notes',
            description: '',
            path: '/docs/index.md'
          },
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
        description: 'Embed high-fidelity PDFs in web apps with analytics',
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
        path: 'docs/notification_management/index.md'
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
  plugins: [`@adobe/gatsby-theme-aio`],
};
