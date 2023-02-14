export const remainingMinutes = (endTime: string) => {
  const currentTime = Date.now()
  const remainingTime = new Date(endTime).getTime() - currentTime

  return Math.floor(remainingTime / (60 * 1000))
}

export const isPollFinished = (endTime: string) => {
  return Date.now() >= new Date(endTime).getTime()
}
