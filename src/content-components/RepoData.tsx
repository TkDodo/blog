interface Props {
  name?: string;
}

export default function RepoData({ name }: Props) {
  return <code>{name ?? "repo"}</code>;
}
