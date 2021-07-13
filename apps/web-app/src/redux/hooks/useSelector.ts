import {
  TypedUseSelectorHook,
  useSelector as useSelectorOriginal,
} from 'react-redux';
import { RootState } from '../confgureStore';

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorOriginal;
