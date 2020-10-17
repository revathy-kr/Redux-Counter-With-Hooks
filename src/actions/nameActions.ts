export const setNameAction = (name: string) => ({
  type: 'SET_NAME',
  payload: name
});

export interface ISetNameAction {
  readonly type: 'SET_NAME';
  payload: string;
};

export type NameActions =
  | ISetNameAction