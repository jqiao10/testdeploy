import React,{useState} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

function MainSearchBar(){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return(
        <div>
            
            <Form className="search-bar d-flex flex-nowrap">
  <Form.Group className="flex-grow-1">
    <FormControl type="text" placeholder="Search destinations" className='searchtext mr-2' />
  </Form.Group>
  
  <Form.Group>
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      selectsStart
      endDate={endDate}
      className="searchdate mr-2"
    />
  </Form.Group>
  
  <Form.Group>
    <DatePicker
      selected={endDate}
      onChange={date => setEndDate(date)}
      selectsEnd
      startDate={startDate}
      endDate={endDate}
      minDate={startDate}
      className="searchdate mr-2"
    />
  </Form.Group>

  <Button type="submit" className='searchBtn' href='/'>
    Search
  </Button>
</Form>

        </div>
    )
}
export default MainSearchBar;