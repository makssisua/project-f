import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getMe } from "../../store/slices/authSlice";

type Props = {
  children: JSX.Element
};

export default function PrivateRoute({ children }: Props){
  const { user } = useAppSelector((state: GlobalState) => state.auth);
  const dispatch = useAppDispatch();

  const token = user?.token || '';

  dispatch(getMe(token));


  if (!user) {
    return <Navigate to='/login' />
  }
  
  return children;
};