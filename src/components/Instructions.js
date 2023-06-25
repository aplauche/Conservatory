
function Instructions({position, children}) {
  return (
    <div className={`${position}-6 pointer-events-none absolute bg-white rounded-full py-4 px-8 left-1/2 -translate-x-1/2`}>
      {children}
    </div>
  )
}

export default Instructions
