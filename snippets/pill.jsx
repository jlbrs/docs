export const Pill = (props) => {
  const { color, text } = props;
  return (
    <span className={`px-1 py-0.5 rounded-md text-[0.65rem] border border-${color}-500/20 text-${color}-900 bg-${color}-50/50 dark:border-${color}-500/30 dark:bg-${color}-500/10`}>
      {text}
    </span>
  )
}
