# tw-starter

A tailwind css starter using webpack and postcss

This is a boilerplate for using webpack, tailwind css, sass/scss and es6 with babel in your shopify theme. There is no need to make any changes in this structure itself.

## Workflow

A short description of this workflow:

- Clone your Shopify theme to the `shopify` directory
- Edit theme locally using the Shopify CLI, Tailwind and Webpack
- Commit changes to the feature branch
- Merge feature branch with main branch once development is done

This template acts as a wrapper for Shopify theme. The `shopify` directory holds the Shopify theme files along with your source files, which makes it compatible with Shopify / GitHub integrtion. Source files are located within `shopify\src` directory and it is ignored by Shopify when pushing to the store.

## Getting started

### Prerequisites

- [Shopify CLI](https://shopify.dev/themes/getting-started/create#step-1-install-shopify-cli)
- [Node.js](https://nodejs.org/)

### Installation

1. Run the following commands:

  ```bash
  git clone https://github.com/devsmitin/tw-shopify.git
  cd tw-shopify
  npm install
  rm -rf .git
  ```

2. Make sure the output file (`shopify/assets/bundle.css`) is included in the `head` of your `shopify/layout/theme.liquid` file.

    ```liquid
    {{ 'bundle.css' | asset_url | stylesheet_tag }}
    ```
    
    The same holds for all `bundle.js` file created by Webpack. Ideally, it is best practice to include this file just before the end of `body` tag in your `shopify/layout/theme.liquid` file, but you may put this anywhere as per requirement. You can do this with the following line of code:

    ```liquid
    <script src="{{ 'bundle.js' | asset_url }}" defer="defer"></script>
    ```

3. In our first step, we have removed git from this template using last command. There is no need to make any changes to this perticular template. See the usage below.


## Usage

### Development

You will need single terminal window:

1. Build your code and serve your Shopify theme
    - First, log in to your store if you was not logged in already.
      ```bash
      shopify login --store your-store-name.myshopify.com
      ```
    - Build your code in development mode and serve your theme to your development store
      ```bash
      npm run start
      ```

2. Once done with development, push your code with production build to your desired theme
    ```bash
    npm run publish
    ```

3. You can find and update additional commands in `package.json` file to match your workflow.


## Final notes

### Further reading

- [shopify.dev](https://shopify.dev)
- [Tools for building Shopify themes](https://shopify.dev/themes/tools)
- [Version control for Shopify themes best practices](https://shopify.dev/themes/best-practices/version-control)

### Suggestions

If you have any suggestions to improve this template / repository, please open an issue. I would be happy to hear from you.
