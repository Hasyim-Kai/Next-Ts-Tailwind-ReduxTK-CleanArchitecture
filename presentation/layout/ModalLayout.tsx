import { selectGlobalState, toggleModal } from "../../app/GlobalSlice";
import { useAppDispatch, useAppSelector } from "../../app/store"

type Props = { children: JSX.Element | JSX.Element[] | null, additionalStyle: string }

export default function ModalLayout({ children, additionalStyle }: Props) {
    const dispatch = useAppDispatch();
    const { isModalOpen } = useAppSelector(selectGlobalState);

    return <section className={`absolute top-0 w-full min-h-screen bg-gray-500/40 z-50 flex items-center justify-center ${additionalStyle} ${isModalOpen ? 'block' : 'hidden'}`}>
        <article className="max-w-xl p-5 rounded-lg bg-white shadow-md">
            <button className="mb-2" onClick={() => dispatch(toggleModal())}><b>X</b></button>
            {children}
        </article>
    </section>
}