export const Get = (props) => {
  return (
    <code style={{paddingLeft: 0, paddingTop: 0}}>
      <span style={{marginRight: '0.5em'}}
        class="px-1 py-0.5 rounded-md text-[0.875em] leading-tight bg-green-400/20 dark:bg-green-400/20 text-green-700 dark:text-green-400"
        >
        GET
      </span>
      {props.children}
    </code>
  )
}
