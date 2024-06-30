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
  siteMetadata: {
    versions: [
      {
        title: 'v0.0',
        selected: true
      }
    ],
    pages: [
      {
        title: 'Adobe VIP MarketPlace',
        path: '/'
      },
      {
        title: 'Documentation',
        menu: [
          {
            title: 'Introduction',
            description: 'Overview',
            path: '/docs/introduction.md'
          },
          {
            title: 'API authentication and access ',
            description: 'Authentication method to use APIs',
            path: '/docs/authenitcation/overview.md'
          },
          {
            title: 'Manage reseller accounts',
            description: '',
            path: '/docs/reseller_account/use_cases.md'
          },
          {
            title: 'Manage customer accounts',
            description: '',
            path: '/docs/customer_account/use_cases.md'
          },
          {
            title: 'Manage deployments',
            description: '',
            path: '/docs/deployment_management/use_cases.md'
          },
          {
            title: 'Reseller change process',
            description: '',
            path: '/docs/reseller_change/use_cases.md'
          },
          {
            title: 'Manager orders',
            description: '',
            path: '/docs/order_management/use_cases.md'
          },
          {
            title: 'Manage subscriptions',
            description: 'Embed high-fidelity PDFs in web apps with analytics',
            path: '/docs/subscription_management/use_cases.md'
          },
          {
            title: 'Migrate to VIP Marketplace',
            description: 'Embed high-fidelity PDFs in web apps with analytics',
            path: '/docs/migration/eligibility_rules.md'
          },
          {
            title: 'Manage notifications',
            description: 'Integrate e-signatures into your platform or application',
            path: 'docs/notification_management/get_details/'
          },
          {
            title: 'References',
            description: 'Build workflows on Microsoft Power Platform easily',
            path: 'docs/microsoft-pa-integration/'
          },
          {
            title: 'Support',
            description: 'Build workflows on Microsoft Power Platform easily',
            path: 'docs/support.md'
          },
        ]
      },
      {
        title: 'API Reference',
        menu: [
          {
            title: 'VIPMP',
            description: 'APIs for Adobe VIP MarketPlace',
            path: '/api/index.md'
          }
        ]
      },
      {
        title: 'Sandbox user guide',
        path: '/technical-assets'
      },
    ],
    subPages: [
      {
        title: 'Introduction',
        path: '/docs/introduction.md'
      },
      {
        title: 'Use Cases',
        path: 'guides/admin/index.md',
        pages: [
          {
            title: 'Introduction',
            description: 'Overview',
            path: '/docs/introduction.md'
          },
          {
            title: 'API authentication and access ',
            description: 'Authentication method to use APIs',
            path: '/docs/authenitcation/overview.md'
          },
          {
            title: 'Manage reseller accounts',
            description: '',
            path: '/docs/reseller_account/use_cases.md'
          },
          {
            title: 'Manage customer accounts',
            description: '',
            path: '/docs/customer_account/use_cases.md'
          },
          {
            title: 'Manage deployments',
            description: '',
            path: '/docs/deployment_management/use_cases.md'
          },
          {
            title: 'Reseller change process',
            description: '',
            path: '/docs/reseller_change/use_cases.md'
          },
          {
            title: 'Manager orders',
            description: '',
            path: '/docs/order_management/use_cases.md'
          },
          {
            title: 'Manage subscriptions',
            description: 'Embed high-fidelity PDFs in web apps with analytics',
            path: '/docs/subscription_management/use_cases.md'
          },
          {
            title: 'Migrate to VIP Marketplace',
            description: 'Embed high-fidelity PDFs in web apps with analytics',
            path: '/docs/migration/eligibility_rules.md'
          },
          {
            title: 'Manage notifications',
            description: 'Integrate e-signatures into your platform or application',
            path: 'docs/notification_management/get_details/'
          },
          {
            title: 'References',
            description: 'Build workflows on Microsoft Power Platform easily',
            path: 'docs/microsoft-pa-integration/'
          },
          {
            title: 'Support',
            description: 'Build workflows on Microsoft Power Platform easily',
            path: 'docs/support.md'
          },
        ]
      },
      {
        title: 'Calculated metrics API',
        path: 'guides/calculated-metrics.md'
      },
      {
        title: 'Classifications API',
        path: 'guides/classifications/index.md',
        pages: [
          {
            title: 'Data types',
            path: 'guides/classifications/data-types.md'
          }
        ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};
