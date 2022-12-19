import { pinkGradientBg, tailwindTransition } from "../../styles/TailwindStyle"

type Props = { children?: JSX.Element | JSX.Element[] | null, text?: string, clickFunc?: Function, isCenter?: boolean }

export default function VioletButton({ text = 'Submit', children, clickFunc = () => { }, isCenter = false }: Props) {
  return <button className={`flex gap-3 px-3 py-2 text-white rounded-lg text-lg shadow-lg hover:scale-110
  hover:shadow-xl ${pinkGradientBg} ${tailwindTransition} ${isCenter ? 'mx-auto' : ''}`}
    onClick={() => clickFunc()}>
    {children} {text}
  </button>
}