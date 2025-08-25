export const Post = (props) => {
  return (
    <code style={{paddingLeft: 0, paddingTop: 0}}>
      <span style={{marginRight: '0.5em'}}
        class="px-1 py-0.5 rounded-md text-[0.875em] leading-tight bg-blue-400/20 dark:bg-blue-400/20 text-blue-700 dark:text-blue-400"
        >
        POST
      </span>
      {props.children}
    </code>
  )
}
