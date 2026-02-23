interface Option {
  id: string;
  name: string;
  percentage: string;
  winner?: boolean;
}

interface Props {
  options: Option[];
  votes: string;
}

export function TweetPoll({ options, votes }: Props) {
  return (
    <span className="flex flex-col gap-1 p-0">
      {options.map(({ id, name, percentage, winner = false }) => (
        <span
          key={id}
          className="relative min-h-8 flex items-center justify-between"
        >
          <progress
            max={100}
            value={Number.parseFloat(percentage)}
            className={`absolute inset-0 h-8 w-full appearance-none overflow-hidden rounded-[4px] border-none bg-transparent [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:rounded-[4px] [&::-webkit-progress-value]:bg-[var(--color-twitter-poll-bg)] [&::-moz-progress-bar]:rounded-[4px] [&::-moz-progress-bar]:bg-[var(--color-twitter-poll-bg)] ${
              winner
                ? "[&::-webkit-progress-value]:bg-[var(--color-twitter-poll-bg-winner)] [&::-moz-progress-bar]:bg-[var(--color-twitter-poll-bg-winner)]"
                : ""
            }`}
          />
          <span className="z-10 shrink px-3">
            {winner ? <b>{name}</b> : name}
          </span>
          <span className="z-10">{percentage}</span>
        </span>
      ))}
      <span className="text-xs md:text-base text-faded">
        {votes} votes · Final results
      </span>
    </span>
  );
}
