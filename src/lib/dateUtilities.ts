export const remainingMinutes = (endTime: string) => {
  const currentTime = Date.now()
  const remainingTime = new Date(endTime).getTime() - currentTime

  return Math.floor(remainingTime / (60 * 1000))
}

// const isPollFinished = Date.now() >= new Date(endsAt).getMilliseconds()
