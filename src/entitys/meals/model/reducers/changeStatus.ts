// reducers/changeStatusReducer.ts
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TFetchStatus } from '../../../../shared/types/TFetchStatus';
import type { IMealSliceInitial } from '../mealSlice';

type ChangeStatusProps = {
  whichStatus: 'categoriesStatus' | 'mealsByCategoryStatus' | 'mealByIdStatus';
  status: TFetchStatus;
};

export const changeStatusReducer= (
  state: IMealSliceInitial,
  action: PayloadAction<ChangeStatusProps>
) => {
  const { whichStatus, status } = action.payload;
  state[whichStatus] = status;
};