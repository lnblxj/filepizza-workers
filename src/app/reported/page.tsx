import { JSX } from 'react'
import Spinner from '../../components/Spinner'
import Wordmark from '../../components/Wordmark'
import TitleText from '../../components/TitleText'
import ReturnHome from '../../components/ReturnHome'

export default function ReportedPage(): JSX.Element {
  return (
    <div className="flex flex-col items-center space-y-5 py-10 max-w-md mx-auto">
      <Spinner direction="down" />
      <Wordmark />

      <TitleText>此传输已被暂停。</TitleText>
      <div className="px-8 py-6 bg-stone-100 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
        <h3 className="text-lg font-medium text-stone-800 dark:text-stone-200 mb-4">
          来自管理团队的消息
        </h3>
        <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
          就像一个配料可疑的披萨一样，由于可能违反了我们的服务条款，我们不得不暂停此次传输。
          我们的质量团队正在进行调查，以确保我们保持高标准。
        </p>
        <div className="text-sm text-stone-500 dark:text-stone-400 italic">
          - FilePizza 团队
        </div>
      </div>

      <ReturnHome />
    </div>
  )
}
