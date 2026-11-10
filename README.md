# Where’s My Grocery?

Responsive Next.js/React grocery-trip comparison demo for Dallas–Fort Worth.

## Development

Node.js 22 recommended. Run `npm ci`, then `npm run dev`. Use `npm test` for calculation checks and `npm run build` for a production build.

## Demo scope

Prices are invented sample prices, not live retailer quotes. Initial totals: Walmart $22.45, Target $24.80, Sprouts $29.10. Cheapest-item split: $15.65, saving $6.80 before time. An extra stop takes an illustrative 25 minutes. The recommendation uses savings minus hourly time value × 25/60, giving a $16.32/hour break-even point. At $20/hour, one stop wins. Taxes, fees, promotions, membership discounts and actual routes are excluded.

Add comma-separated items, adjust quantities, remove items, reset the sample, and download a text list. Only the five catalog products have sample prices. Unmatched items remain on the list and are excluded from priced subtotals; full-cart recommendations are withheld. List state resets on reload. No personal data is sent to a backend. Local grocers are planned.

Retailer exports are explicitly labeled demo placeholders and display a notice. They do not send items to any retailer. No affiliate or live retailer integration is included.

## Vercel

Import `rjph99/wheres-my-grocery`, Next.js preset, root `.`, build `npm run build`, production branch `main`. No environment variables needed. Connect the custom domain in Vercel later.
