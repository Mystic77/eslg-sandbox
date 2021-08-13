import { useState } from 'react';

import { FormControl, Button, Table, InputGroup } from 'react-bootstrap';
import FormContainer from './components/FormContainer';

const feedback = [
  {
    category: 'pronunciation',
    mainText: [
      'text when bad',
      'text when slightly less bad',
      'text when almost passable',
      'text when average',
      'text when good',
      'text when excellent',
    ],
    commonErrors: {
      name: 'th',
      text: 'Please work on your th-sound',
    },
  },
  {
    category: 'fluency',
    mainText: [
      'text when bad',
      'text when slightly less bad',
      'text when almost passable',
      'text when average',
      'text when good',
      'text when excellent',
    ],
    commonErrors: {
      name: 'reading',
      text: 'Stop reading and speak naturally',
    },
  },
  {
    category: 'grammar',
    mainText: [
      'text when bad',
      'text when slightly less bad',
      'text when almost passable',
      'text when average',
      'text when good',
      'text when excellent',
    ],
    commonErrors: {
      name: 'simple present',
      text: 'You have to conjugate your tenses',
    },
  },
];

// user should be able to create new categories
// user should be able to change amount of total points and consequently number of feedback texts = push more texts to array
// user should be able to change specific feedback texts

// want to change feedbackText 2 of fluency
//location is feedback.category.maintext[i] (what if want to change commonErrors with same function?)
// i = grade for that category
// mainText = sub division of different feedback collections for each category
// function changeOneItem(newValue) {

//   return (feedback.fluency.mainText[3] = newValue);
// }

// feedback.position = feedback.newValue

// console.log(feedback);
// console.log(changeOneItem('5'));
// console.log(feedback);

function App() {
  const [feedbackState, setFeedbackState] = useState(feedback);

  function updateHandler() {
    console.log('You clicked update!');
  }

  return (
    <FormContainer>
      {feedbackState.map((feedbackItem) => (
        <Table striped bordered hover>
          <thead>
            <tr>
              <h4>
                <input
                  type="text"
                  placeholder={feedbackItem.category.toUpperCase()}
                  onChange={(e) => {
                    feedbackItem.category = e.target.value;
                    setFeedbackState([...feedbackState]);
                  }}
                ></input>
              </h4>
            </tr>
          </thead>
          <tbody>
            {feedbackItem.mainText.map((mainText, index) => (
              <tr>
                <InputGroup>
                  <InputGroup.Text>{index}/5</InputGroup.Text>
                  <FormControl
                    as="textarea"
                    aria-label=""
                    placeholder={mainText}
                  />
                </InputGroup>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
      <Button size="lg" onClick={updateHandler()}>
        Update
      </Button>
    </FormContainer>
  );
}

export default App;
