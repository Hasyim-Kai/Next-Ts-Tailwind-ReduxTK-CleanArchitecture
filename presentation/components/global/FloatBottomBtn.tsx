import { cardHover, pinkGradientBg } from "../../styles/TailwindStyle"

type Props = { children?: JSX.Element | JSX.Element[] | null, text?: string, clickFunc: Function }

export default function FloatBottomBtn({ text = 'Submit', children, clickFunc }: Props) {
  return <button className={`fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center
  gap-2 py-3 px-5 text-lg text-white rounded-xl ${cardHover} ${pinkGradientBg}`}
    onClick={() => clickFunc()}>
    {children} {text}
  </button>
}