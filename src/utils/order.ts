import { IOrder } from 'interfaces/order';

const getLocalOrders = (): IOrder[] => {
  const orders: IOrder[] = [];

  const deserializedOrders = localStorage.getItem('orders');
  if (!deserializedOrders) {
    return orders;
  }
  const serializedOrders: IOrder[] = JSON.parse(deserializedOrders);
  return serializedOrders;
};

const writeOrders = (orders: IOrder[]): void => {
  localStorage.setItem('orders', JSON.stringify(orders));
};

export { getLocalOrders, writeOrders };
