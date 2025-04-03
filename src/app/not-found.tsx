import { JSX } from 'react'
import Spinner from '../components/Spinner'
import Wordmark from '../components/Wordmark'
import ReturnHome from '../components/ReturnHome'
import TitleText from '../components/TitleText'

export const metadata = {
  title: 'FilePizza - 404: 页面未找到',
  description: '抱歉！这片FilePizza好像不见了。'
}

export default async function NotFound(): Promise<JSX.Element> {
  return (
    <div className="flex flex-col items-center space-y-5 py-10 max-w-2xl mx-auto">
      <Spinner direction="down" />
      <Wordmark />
      <TitleText>404: 看来这片FilePizza已经被吃掉了！</TitleText>
      <ReturnHome />
    </div>
  )
}
