import { IItemList } from '../../types';
import { ItemList } from './ItemList';

interface ListingProps {
  items: IItemList[];
}

export function Listing({ items }: ListingProps) {
  return (
    <>
      {items.map((item: IItemList) => (
        <ItemList key={item.listing_id} item={item} />
      ))}
    </>
  );
}