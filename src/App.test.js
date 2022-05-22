import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';
import Slot from './components/Slot';
import EventModal from './components/EventModal';
import Sidebar from './components/Sidebar';
import fakeIndexedDB from 'fake-indexeddb/build/fakeIndexedDB';



 
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// jest.mock('dexie', () => {
//   return class Dexie {
//       open = () => Promise.resolve()
      
//       version() {
//           return {
//               stores: jest.fn()
//           };
//       }
//   };
// });
const Dexie = require("dexie");
require("fake-indexeddb/auto");

const db = new Dexie("ReactDexie");
  //create the database store
  db.version(1).stores({
      slots: "id, title, location, Category, dayid, slotid",
      user: "id, name"
  })

test('Hello World', () => {
  
  expect(1).toEqual(1);
});
test('testing the form', async () => {
  render(<App />)
  
  const taskButton = screen.getByRole("button", { id: /task/i});
  // clicked the Task_Button
  fireEvent.click(taskButton);
 const getInputElement = screen.getByTestId('taskName');
  
  expect(screen.getByTestId('taskName')).toBeInTheDocument();
});

test('selectDay', async () => {
  render(<App />)
  
  const taskButton = screen.getByRole("button", { id: /task/i});
  // clicked the Task_Button
  fireEvent.click(taskButton);
  const getSelectedDay = screen.getByTestId('taskSelectDay');
  fireEvent.change(getSelectedDay, { target: { value: "1"} });

  expect(getSelectedDay).toHaveValue("1");
});
/* 
test('add a task', () =>  {
  render(<App />)
  
  const taskButton = screen.getByRole("button", { id: /task/i});
  // clicked the Task_Button
  fireEvent.click(taskButton);
  //const getFormElement = screen.getByTestId('taskForm')
 const getInputElement = screen.getByTestId('taskName');
  const submitButton = screen.getByTestId("taskSubmitButton");
  const getSelectedDay = screen.getByTestId('taskSelectDay');
  const getSelectedSlot = screen.getByTestId('taskSelectSlot');
  fireEvent.change(getInputElement, { target: { value: "das ist ein Test"} });
  
  fireEvent.change(getSelectedDay, { target: { value: "1"} });
  fireEvent.change(getSelectedSlot, { target: { value: "1"} });
  fireEvent.click(submitButton);
  const getclose = screen.getByTestId('taskclose')
  fireEvent.click(getclose);
  window.location = { reload: jest.fn() }                   
  //const divElement = screen.getByText(/das ist ein Test/i);
                     
  screen.debug();
  expect(getSelectedDay).toHaveValue("1");
});
*/ 


// describe("App", () => {
//   test("test slots"), async () => {
//       render(<App />)
//       const getEventmodel = screen.getByTestId('Apptest')
//       const form = getEventmodel.getByPlaceholderText(/Add ttt/i);
//       expect(1).toEqual(1);
//       //const buttonElement = screen.getByRole("button", { name: /Add/i} );
//       //const inputElementName = screen.getAllByPlaceholderText(/Add title/i)
//   }
// })
