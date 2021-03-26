const sortByDate = (a: { date: string | null }, b: { date: string | null }) =>
  new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()

export default sortByDate
