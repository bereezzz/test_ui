import { useState } from 'react'
import { Combobox } from '@headlessui/react'

type People = {
    id: number;
    name: string;
}

const people: People[] = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
  { id: 6, name: 'Durward Reynolds2' },
  { id: 7, name: 'Kenton Towne2' },
  { id: 8, name: 'Therese Wunsch2' },
  { id: 9, name: 'Benedict Kessler2' },
  { id: 10, name: 'Katelyn Rohan2' },
]

export const MyCombobox = () =>  {
  const [selectedPeople, setSelectedPeople] = useState<People[]>([])

  return (
    <Combobox value={selectedPeople} onChange={(e)=>setSelectedPeople(e)} multiple>
      <Combobox.Input
        displayValue={(people: People[]) =>
          people.map((person) => person.name).join(', ')
        }
        style={{width: "300px"}}
      />
      <Combobox.Options style={{backgroundColor: 'black', color: 'white', maxHeight: "100px", overflow:"auto" }}>
        {people.map((person) => (
          <Combobox.Option key={person.id} value={person}> {/*Здесь можно задизеблить */}
            {person.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}