import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$24',
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '$32',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$48',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import 'twin.macro'
/** @jsxImportSource @emotion/react */

export default function Example() {
  return (
      <div tw="bg-white py-24 sm:py-32">
        <div tw="mx-auto max-w-7xl px-6 lg:px-8">
          <div tw="mx-auto max-w-4xl text-center">
            <h2 tw="text-base font-semibold leading-7 text-indigo-600">REMOTE 2 Component</h2>
            <p tw="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Pricing plans for teams of&nbsp;all&nbsp;sizes
            </p>
          </div>
          <p tw="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
            Explicabo id ut laborum.
          </p>
          <div tw="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
                <div
                    key={tier.id}
                    className={classNames(
                        tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                        tierIdx === 0 ? 'lg:rounded-r-none' : '',
                        tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                        'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
                    )}
                >
                  <div>
                    <div tw="flex items-center justify-between gap-x-4">
                      <h3
                          id={tier.id}
                          className={classNames(
                              tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                              'text-lg font-semibold leading-8'
                          )}
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular ? (
                          <p tw="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                            Most popular
                          </p>
                      ) : null}
                    </div>
                    <p tw="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                    <p tw="mt-6 flex items-baseline gap-x-1">
                      <span tw="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                      <span tw="text-sm font-semibold leading-6 text-gray-600">/month</span>
                    </p>
                    <ul role="list" tw="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                      {tier.features.map((feature) => (
                          <li key={feature} tw="flex gap-x-3">
                            <CheckIcon tw="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            {feature}
                          </li>
                      ))}
                    </ul>
                  </div>
                  <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={classNames(
                          tier.mostPopular
                              ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                              : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                          'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      )}
                  >
                    Buy plan
                  </a>
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}
