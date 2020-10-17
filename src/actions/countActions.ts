export const incrementCountAction = () => ({
  type: 'INCREMENT'
});

export const decrementCountAction = () => ({
  type: 'DECREMENT'
});

export interface IIncrementCountAction {
  readonly type: 'INCREMENT';
};

export interface IDecrementCountAction {
  readonly type: 'DECREMENT';
};

export type CountActions =
  | IIncrementCountAction
  | IDecrementCountAction