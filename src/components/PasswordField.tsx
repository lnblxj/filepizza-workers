import React, { JSX, useCallback } from 'react'
import InputLabel from './InputLabel'

export default function PasswordField({
  value,
  onChange,
  isRequired = false,
  isInvalid = false,
}: {
  value: string
  onChange: (v: string) => void
  isRequired?: boolean
  isInvalid?: boolean
}): JSX.Element {
  const handleChange = useCallback(
    function (e: React.ChangeEvent<HTMLInputElement>): void {
      onChange(e.target.value)
    },
    [onChange],
  )

  return (
    <div className="flex flex-col w-full">
      <InputLabel
        hasError={isInvalid}
        tooltip="下载者必须提供此密码才能开始下载文件。如果您不在此处指定密码，任何拥有链接的下载者都可以下载该文件。由于WebRTC的DTLS已经执行了加密，因此此密码不用于加密文件。"
      >
        {isRequired ? '密码' : '密码（可选）'}
      </InputLabel>
      <input
        autoFocus
        type="password"
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${
          isInvalid
            ? 'border-red-500 dark:border-red-400'
            : 'border-stone-300 dark:border-stone-600'
        } bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100`}
        placeholder="为这片FilePizza输入一个密码..."
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
