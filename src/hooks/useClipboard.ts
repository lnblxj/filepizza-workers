import { useState, useCallback, useEffect } from 'react'

export default function useClipboard(
  text: string,
  delay = 1000,
): {
  hasCopied: boolean
  onCopy: () => void
} {
  const [hasCopied, setHasCopied] = useState(false)

  const onCopy = useCallback(() => {
    if (!navigator?.clipboard) {
      try {
        // 创建一个临时文本区域
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-9999px'
        textArea.style.top = '0'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setHasCopied(true)
      } catch (err) {
        console.error('复制失败:', err)
      }
      return
    }

    navigator.clipboard.writeText(text)
      .then(() => {
        setHasCopied(true)
      })
      .catch((err) => {
        console.error('复制失败:', err)
      })
  }, [text])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (hasCopied) {
      timeoutId = setTimeout(() => {
        setHasCopied(false)
      }, delay)
    }
    return () => {
      clearTimeout(timeoutId)
    }
  }, [hasCopied, delay])

  return { hasCopied, onCopy }
}
