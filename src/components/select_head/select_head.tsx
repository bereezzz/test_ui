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
      <Combobox.Options style={{backgroundColor: 'red', color: 'green'}}>
        {people.map((person) => (
          <Combobox.Option key={person.id} value={person}> {/*Здесь можно задизеблить */}
            {person.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}