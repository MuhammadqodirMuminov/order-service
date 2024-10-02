import { RootState } from '@/store';
import { TypedUseSelectorHook, useSelector as UseTypedSelector } from 'react-redux';

export const useSelector: TypedUseSelectorHook<RootState> = UseTypedSelector;
