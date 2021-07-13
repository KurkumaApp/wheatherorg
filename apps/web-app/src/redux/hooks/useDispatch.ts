import { useDispatch as useDispatchOriginal } from 'react-redux';
import { AppDispatch } from '../confgureStore';

export const useDispatch = () => useDispatchOriginal<AppDispatch>();
