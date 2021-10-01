export type Snapshot = "book_ui_1_snapshot";
export type Delta = "book_ui_1";

export type XBTUSDProductID = "PI_XBTUSD";
export type ETHUSDProductID = "PI_ETHUSD";

export type Price = number;
export type Size = number;
export type Total = number;

export type Order = [Price, Size];
export type OrderTotal = [Price, Size, Total];
export type Feeds = Delta | Snapshot;
export type ProductIds = XBTUSDProductID | ETHUSDProductID;

export interface Spread {
  spreadNum: number;
  spreadPercent: number;
}

export interface OrderData {
  asks: OrderTotal[];
  bids: OrderTotal[];
  feed: Feeds;
  product_id: ProductIds;
  numLevels: number;
  spread: Spread;
}
