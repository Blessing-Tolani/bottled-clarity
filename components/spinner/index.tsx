const Spinner = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 35 35"
    >
      <circle
        cx="17.5"
        cy="17.5"
        r="12.5"
        fill="none"
        stroke={color ?? 'white'}
        strokeWidth="3"
        strokeDasharray="60"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 17.5 17.5"
          to="360 17.5 17.5"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default Spinner
