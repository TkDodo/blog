type Option = {
  id: string;
  name: string;
  percentage: string;
  winner?: boolean;
};

type Props = {
  options: Option[];
  votes: string;
};

export function TweetPoll({ options, votes }: Props) {
  return (
    <span className="tweet-poll flex flex-col gap-1 p-0">
      {options.map(({ id, name, percentage, winner = false }) => (
        <span key={id} className="relative min-h-8 flex items-center justify-between">
          <progress
            max={100}
            value={Number.parseFloat(percentage)}
            className={`tweet-poll-progress absolute inset-0 h-8 w-full ${winner ? "is-winner" : ""}`}
          />
          <span className="z-10 shrink px-3">
            {winner ? <b>{name}</b> : name}
          </span>
          <span className="z-10 pr-3">{percentage}</span>
        </span>
      ))}
      <span className="text-[0.85rem] text-faded">
        {votes} votes · Final results
      </span>
    </span>
  );
}
