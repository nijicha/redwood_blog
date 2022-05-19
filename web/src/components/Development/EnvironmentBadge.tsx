import { useEffect, useState } from 'react'
import { Environment } from 'types/applcation'

const EnvironmentBadge = () => {
  const [stage, setStage] = useState<Environment>('development')
  const [debugMode, setDebugMode] = useState<boolean>(false)

  const classes = {
    development: { text: 'text-white', bg: 'bg-cyan-500' },
    staging: { text: 'text-white', bg: 'bg-purple-500' },
  }

  useEffect(() => {
    setStage(process.env.NODE_ENV)
    setDebugMode(process.env.DEBUG_MODE === 'true')
  }, [])

  if (stage === 'production' && !debugMode) {
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
