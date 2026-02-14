type Option = {
  text: string
  percentage?: number
}

type Props = {
  options?: Option[]
}

export function TweetPoll({ options = [] }: Props) {
  return (
    <ul>
      {options.map((option) => (
        <li key={option.text}>{option.text}</li>
      ))}
    </ul>
  )
}
