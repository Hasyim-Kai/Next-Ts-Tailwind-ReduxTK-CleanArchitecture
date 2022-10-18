import { useEffect } from "react";
import { selectGlobalState, toggleAlert } from "../../../app/GlobalSlice";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { tailwindTransition } from "../../styles/tailwind/Transition";

type Props = { text: string }

export default function Alert({ text }: Props) {
  const dispatch = useAppDispatch();
  const { isAlertOpen } = useAppSelector(selectGlobalState);

  useEffect(() => {
    if (isAlertOpen) {
      const timer = setTimeout(() => {
        dispatch(toggleAlert());
      }, 4000);
      return () => { clearTimeout(timer) };
    }
  }, [isAlertOpen]);

  return <div className={`absolute left-0 right-0 p-4 text-white shadow-xl rounded-lg w-7/12 mx-auto
     flex justify-between bg-violet-400 ${isAlertOpen ? 'top-7' : '-top-16'} ${tailwindTransition}`} role='alert'>
    {text}
  </div>
}