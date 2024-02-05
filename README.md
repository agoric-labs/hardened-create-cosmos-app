Attempting to use [`ses`](https://github.com/endojs/endo/tree/master/packages/ses) with [`create-cosmos-app`](https://github.com/cosmology-tech/create-cosmos-app).

# Overview:

I created a cosmos app using [`create-cosmos-app`](https://github.com/cosmology-tech/create-cosmos-app) in the initial commit. Then, I tried to install and run `ses` using a top-level import with the pattern described in https://nextjs.org/docs/architecture/supported-browsers#custom-polyfills.

I ran into the following error (screenshot):

<img width="942" alt="Screenshot 2024-02-04 at 10 18 56 PM" src="https://github.com/agoric-labs/hardened-create-cosmos-app/assets/8848650/efe89d93-1c01-4d99-b5ab-685dae50aceb">

Full call-stack from the browser:
```
Object
node_modules/next/dist/pages/_document.js (2:0)
eval
file:///Users/samuelsiegart/hardened-create-cosmos-app/node_modules/ses/src/make-evaluate.js (92:27)
./node_modules/next/dist/pages/_document.js
file:///Users/samuelsiegart/hardened-create-cosmos-app/.next/server/vendor-chunks/next.js (30:1)
__webpack_require__
file:///Users/samuelsiegart/hardened-create-cosmos-app/.next/server/webpack-runtime.js (33:42)
__webpack_exec__
file:///Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/_document.js (52:39)
<unknown>
file:///Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/_document.js (53:83)
__webpack_require__.X
file:///Users/samuelsiegart/hardened-create-cosmos-app/.next/server/webpack-runtime.js (185:21)
<unknown>
file:///Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/_document.js (53:47)
Object.<anonymous>
file:///Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/_document.js (56:3)
```

Logs from the server:
```
% 
yarn dev
yarn run v1.22.21
$ next dev
  ▲ Next.js 13.5.6
  - Local:        http://localhost:3000

 ✓ Ready in 2.4s
 ✓ Compiled / in 1433ms (2269 modules)
 ⨯ [ReferenceError: __webpack_require__ is not defined
  at Object.eval (webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!:1:1)
  at eval (eval at makeEvaluate (file:///Users/samuelsiegart/hardened-create-cosmos-app/node_modules/ses/src/make-evaluate.js:92:27), <anonymous>:12:22)
  at ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! (/Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/index.js:22:1)
  at __webpack_require__ (/Users/samuelsiegart/hardened-create-cosmos-app/.next/server/webpack-runtime.js:33:42)
  at __webpack_exec__ (/Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/index.js:361:39)
  at /Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/index.js:362:114
  at __webpack_require__.X (/Users/samuelsiegart/hardened-create-cosmos-app/.next/server/webpack-runtime.js:185:21)
  at /Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/index.js:362:47
  at Object.<anonymous> (/Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/index.js:365:3)] {
  page: '/'
}
 ✓ Compiled /_error in 1752ms (2271 modules)
[ReferenceError: exports is not defined
  at Object.eval (webpack-internal:///./node_modules/next/dist/pages/_document.js:2:23)
  at eval (eval at makeEvaluate (file:///Users/samuelsiegart/hardened-create-cosmos-app/node_modules/ses/src/make-evaluate.js:92:27), <anonymous>:12:22)
  at ./node_modules/next/dist/pages/_document.js (/Users/samuelsiegart/hardened-create-cosmos-app/.next/server/vendor-chunks/next.js:30:1)
  at __webpack_require__ (/Users/samuelsiegart/hardened-create-cosmos-app/.next/server/webpack-runtime.js:33:42)
  at __webpack_exec__ (/Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/_document.js:52:39)
  at /Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/_document.js:53:83
  at __webpack_require__.X (/Users/samuelsiegart/hardened-create-cosmos-app/.next/server/webpack-runtime.js:185:21)
  at /Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/_document.js:53:47
  at Object.<anonymous> (/Users/samuelsiegart/hardened-create-cosmos-app/.next/server/pages/_document.js:56:3)]
```

I was able to simply `import 'ses'` in the top-level without issue. The above error only occurs when I attempt to invoke `lockdown` as the current changes in the repo reflect.


# Create-cosmos-app docs below:

## Getting Started

First, install the packages and run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More 

### Chain Registry

The npm package for the Official Cosmos chain registry. Get chain and token data for you application.

* https://github.com/cosmology-tech/chain-registry

### Cosmology Videos

Checkout more videos for how to use various frontend tooling in the Cosmos!

* https://cosmology.zone/learn

### Cosmos Kit

A wallet connector for the Cosmos ⚛️

* https://github.com/cosmology-tech/cosmos-kit

### Telescope

A "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs. Telescope is used to generate libraries for Cosmos blockchains. Simply point to your protobuffer files and create developer-friendly Typescript libraries for teams to build on your blockchain.

* https://github.com/cosmology-tech/telescope

🎥 [Checkout the Telescope video playlist](https://www.youtube.com/watch?v=n82MsLe82mk&list=PL-lMkVv7GZwyQaK6bp6kMdOS5mzosxytC) to learn how to use `telescope`!

### CosmWasm TS Codegen

The quickest and easiest way to interact with CosmWasm Contracts. @cosmwasm/ts-codegen converts your CosmWasm smart contracts into dev-friendly TypeScript classes so you can focus on shipping code.

* https://github.com/CosmWasm/ts-codegen

🎥 [Checkout the CosmWasm/ts-codegen video playlist](https://www.youtube.com/watch?v=D_A5V2PfNLA&list=PL-lMkVv7GZwz1KO3jANwr5W4MoziruXwK) to learn how to use `ts-codegen`!


## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Related

Checkout these related projects:

* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
* [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command.
* [interchain-ui](https://github.com/cosmology-tech/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
* [starship](https://github.com/cosmology-tech/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)


## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
