import { createReducer } from 'typesafe-actions';
import { dataArray } from 'app-constants';
import { addEntry } from 'store/ducks/entries/actions';
import { Action } from 'typesafe-actions/dist/type-helpers';
import { EntriesState } from 'store/ducks/entries/types';
import produce from 'immer';

const initialState: EntriesState = {
    isSyncing: false,
    data: dataArray,
};

export const entriesReducer = createReducer<EntriesState, Action>(initialState).handleAction(addEntry, (state, action) =>
    produce(state, (draft) => {
        draft.data.push(action.payload);
    }),
);
