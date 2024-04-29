import React from 'react'

export default function Error() {
  const btnclick = ()=>{{
    window.location.href = "/"
  }}
  return (
    <div>
     <button onClick={btnclick}>
        Back to home
        </button>
    </div>
  )
}
