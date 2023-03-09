import { useRouter } from 'next/router'
import useSWR, { mutate } from 'swr'

const UpdateComponent = () => {
    
const router = useRouter()
const { id } = router.query
  const { data: updatedData, error } = useSWR(`/api/update/${id}`, {
    initialData: [],
  })

  const handleUpdate = async () => {
    const res = await fetch(`/api/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedData),
    })
    const updated = await res.json()

    mutate(`/api/update/${id}`, updated, false)
  }

  return (
    <>
      <input
        type="text"
        value={updatedData.name}
        onChange={(e) =>
          mutate(`/api/update/${id}`, { ...updatedData, name: e.target.value })
        }
      />
      <button onClick={handleUpdate}>Update</button>
      {error && <div>Error updating data</div>}
    </>
  )
}

export default UpdateComponent
