export const Put = (props) => {
  return (
    <code style={{paddingLeft: 0, paddingTop: 0}}>
      <span style={{marginRight: '0.5em'}}
        class="px-1 py-0.5 rounded-md text-[0.875em] leading-tight bg-yellow-400/20 dark:bg-yellow-400/20 text-yellow-700 dark:text-yellow-400"
        >
        PUT
      </span>
      {props.children}
    </code>
  )
}
