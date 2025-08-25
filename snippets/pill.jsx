export const Pill = (props) => {
  const { color, text } = props;
  return (
    <span class="px-1 py-0.5 rounded-md text-[0.65rem] font-bold border border-blue-500/20 text-blue-700 bg-blue-400/20 dark:border-blue-500/30 dark:bg-blue-500/10">
      {text}
    </span>
  )
}
