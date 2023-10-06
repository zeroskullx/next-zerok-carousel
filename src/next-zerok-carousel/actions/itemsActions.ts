import { NEXT_ITEM, PREV_ITEM } from "./consts";

export interface ItemAction {
  type: string;
  limit: number;
  itemsToScroll: number;
}

export const nextItemAction = (limit: number, itemsToScroll: number) => ({
  type: NEXT_ITEM,
  limit,
  itemsToScroll
});

export const prevItemAction = (limit: number, itemsToScroll: number) => ({
  type: PREV_ITEM,
  limit,
  itemsToScroll
});
