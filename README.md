# Martech Engineer

## 🎯 Goals

- **Implement the Meta Pixel**
  - Implement three standard events for the Meta pixel using GTM: `PageView`, `ViewContent` and `AddToCart`. The ViewContent and AddToCart events must include the item id, quantity and value. This can all be recovered from the DOM. The ViewContent event should be triggered when the Product Detail Page loads. The PageView event should be triggered on any page load. The AddToCart event should be triggered on the Add to Cart button click.

**NOTE**: This site is running as an example on https://moby-bot.github.io/mobybots-martech, if you decide to fork the repo to make the changes, please provide the new url for review.

---

## 📦 How to deliver

- **GTM**: to install GTM in this website, fork the repository and upload a new version with the necessary changes.
- **Meta Pixel**: you will need to create your own Meta pixel for testing and debugging, you can do this with your own personal Meta account.
- **Tag types**: use Custom HTML tags in GTM to trigger the Meta events, not the standard Facebook Pixel tag type.

---

## [Optional] Bonus track

- **Implement the Pinterest Pixel**
  - In the same way that you installed the Meta pixel, you should implement the same three standard Pinterest events using GTM: `PageVisit`, `ViewContent` and `AddToCart`. Create a Pinterest ad account and create a new pixel to send these events.
