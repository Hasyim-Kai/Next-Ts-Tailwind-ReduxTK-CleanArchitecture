import Image from 'next/image'
import { selectGlobalState, toggleModal } from "../../app/GlobalSlice";
import { useAppDispatch, useAppSelector } from "../../app/store"

type Props = { children: JSX.Element | JSX.Element[] | null, additionalStyle?: string }

export default function ModalLayout({ children, additionalStyle = '' }: Props) {
    const dispatch = useAppDispatch();
    const { isModalOpen } = useAppSelector(selectGlobalState);

    return <section className={`fixed left-0 top-0 w-screen min-h-screen bg-gray-700/70 z-50 flex items-center justify-center ${additionalStyle} ${isModalOpen ? 'block' : 'hidden'}`}>
        <article className="max-w-2xl p-8 rounded-lg bg-white shadow-lg flex flex-col relative">
            <button className="absolute top-3 right-5" onClick={() => dispatch(toggleModal())}>
                <Image src="/icons/x.svg" alt="close" width={30} height={30} />
            </button>
            {children}
        </article>
    </section>
}