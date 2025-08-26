export const Delete = (props) => {
  return (
    <code style={{paddingLeft: 0, paddingTop: 0}}>
      <span style={{marginRight: '0.5em'}}
        class="px-1 py-0.5 rounded-md text-[0.875em] leading-tight bg-red-400/20 dark:bg-red-400/20 text-red-700 dark:text-red-400"
        >
        DEL
      </span>
      {props.children}
    </code>
  )
}
