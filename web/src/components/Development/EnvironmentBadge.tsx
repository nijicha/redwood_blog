const EnvironmentBadge = () => {
  const stage = process.env.NODE_ENV || 'development'

  const classes = {
    development: { text: 'text-white', bg: 'bg-cyan-500' },
    test: { text: 'text-white', bg: 'bg-purple-500' },
  }

  if (stage === 'production') {
    return null
  }

  return (
    <div className={`relative h-1 w-full ${classes[stage].bg}`}>
      <div
        className={`absolute ml-8 mt-1 rounded-b-sm ${classes[stage].bg} px-1.5 py-0.5 text-xs font-semibold uppercase ${classes[stage].text}`}
      >
        {stage}
      </div>
    </div>
  )
}

export default EnvironmentBadge
