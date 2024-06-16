import { IItemList } from '../../../types';
import { currencyCode, quantityLevel, truncateString } from '../../../helpers';

interface ItemListProps {
  item: IItemList;
}

export function ItemList({ item }: ItemListProps) {
  const { url, title, price, quantity, currency_code, MainImage } = item;

  return (
    <div className="item-list">
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img
              src={MainImage?.url_570xN}
              alt={String(MainImage?.listing_id)}
            />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{truncateString(title)}</p>
          <p className="item-price">{currencyCode(currency_code, price)}</p>
          <p className={`item-quantity ${quantityLevel(quantity)}`}>
            {quantity}
          </p>
        </div>
      </div>
    </div>
  );
}