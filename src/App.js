
import './App.css';
import {useState} from "react";
import Tooltip from "./tooltip";
function App() {

    const [ steps, setSteps] = useState([
            {
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                locale: { skip: <strong aria-label="skip">Skip</strong> },
                placement: 'center',
                title: 'Starting Tour',
                target: 'body',
            },
            {
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                placement: 'right',
                target: '.step1',
                title: 'Starting Amount',
                spotlightPadding: 0,
            },
            {
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                placement: 'right',
                target: '.step2',
                title: 'Starting Amount',
                spotlightPadding: 0,
            },
            {
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                placement: 'right',
                target: '.step3',
                title: 'Starting Amount',
                spotlightPadding: 0,
            }
        ],
    );

  return (
    <div className="App">
        <Tooltip steps={steps} />
        <div className='form-group'>
            <label>Starting Amount</label><br />
            <input className='form-control step1' value='1000'/><br />
        </div>
        <div className='form-group'>
            <label>Starting Amount</label><br />
            <input className='form-control step2' value='1000'/><br />
        </div>
        <div className='form-group'>
            <label>Starting Amount</label><br />
            <input className='form-control step3' value='1000'/>
        </div>
    </div>
  );
}

export default App;
