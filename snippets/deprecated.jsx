export const Deprecated = (props) => {
  return (
    <>
    {!props.nopill && 
    <span class="px-1 py-0.5 rounded-md text-[0.65rem] border border-amber-500/20 text-amber-900 bg-amber-50/50 dark:border-amber-500/30 dark:bg-amber-500/10">
      Deprecated
    </span>} 
    <span class="deprecated text-gray-400">
      {props.children}
    </span>
    </>
  )
}
