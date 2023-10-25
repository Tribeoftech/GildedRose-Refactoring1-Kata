class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn--;
      }

      let qualityDelta = item.quality > 0 ? -1 : 1;

      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        qualityDelta += item.sellIn < 11 ? 1 : 0;
        qualityDelta += item.sellIn < 6 ? 1 : 0;
      }

      item.quality = Math.max(0, Math.min(50, item.quality + qualityDelta));

      if (item.sellIn < 0 && item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        item.quality = 0;
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};