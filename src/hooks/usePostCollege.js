



export const myCollage = async (collegeData) => {
    const res = await fetch(`http://localhost:5000/myCollege`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collegeData),
    })
    const data = await res.json()
    return data
  }
  
  
  