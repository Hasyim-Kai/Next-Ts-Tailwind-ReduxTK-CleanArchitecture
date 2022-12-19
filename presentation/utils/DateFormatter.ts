const milSecInDay: number = 86400000
export const getCurrentDate = () => new Date(Date.now()).toDateString()
export const getTomorrowDate = () => new Date(Date.now() + milSecInDay).toDateString()
export const formatDate = (data: any) => new Date(Number(data)).toDateString()