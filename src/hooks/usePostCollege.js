



export const myCollage = async (collegeData) => {
    const res = await fetch(`${import.meta.env.VITE_URL}/myCollege`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collegeData),
    })
    const data = await res.json()
    return data
  }
  
export const myReview = async (review) => {
    const res = await fetch(`${import.meta.env.VITE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
    const data = await res.json()
    return data
  }
  
  
  