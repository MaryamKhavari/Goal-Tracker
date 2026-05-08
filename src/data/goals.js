export const sampleGoals = [
    {
      id: crypto.randomUUID(),
  
      title: "Workout",
      category: "Health",
  
      type: "daily",
  
      target: 30,
      progress: 12,
  
      status: "active",
  
      color: "#4CAF50",
  
      notes: "",
  
      startDate: "2026-05-01",
      endDate: "2026-06-01",
  
      logs: [
        {
          date: "2026-05-02",
          amount: 1
        }
      ],
  
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
  ]