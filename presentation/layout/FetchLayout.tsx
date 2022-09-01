import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectGlobalState } from "../../app/GlobalSlice";
import { AppDispatch, RootState, useAppDispatch, useAppSelector } from "../../app/store";

type Props = {
  children: JSX.Element | JSX.Element[],
  stateDispatcher: AppDispatch,
  stateSelector: any
}

export default function FetchLayout({ children, stateDispatcher, stateSelector }: Props) {
  const dispatch = useAppDispatch();
  const { isLoading, isError, errorMessage } = useAppSelector(selectGlobalState);
  const data = useAppSelector(stateSelector);

  useEffect(() => { dispatch(stateDispatcher) }, [])

  return <><p></p>
    {isLoading && <p>Loading ...</p>}
    {isError && <p>{errorMessage}</p>}
    {data && children}
  </>
}