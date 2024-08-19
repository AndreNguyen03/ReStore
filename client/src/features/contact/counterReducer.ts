export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DEINCREMENT_COUNTER = "DEINCREMENT_COUNTER";

export interface CounterState {
  data: number;
  title: string;
}

const intitialState: CounterState = {
  data: 42,
  title: "YARC (yet another redux counter)",
};

export default function counterReducer(state = intitialState, action: any) {
  return state;
}
