goals.filter(goal =>
    goal.title
      .toLowerCase()
      .includes(search.toLowerCase())
  )