import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const Answer = ({
//   answer, 
//   handleAnswersChange,
// }) => {
//   const handleCorrectChange = (correctedAnswer) => {
//     handleAnswersChange((prevAnswers) => {
//       const newAnswers = prevAnswers.map((element) => {
//         if (element !== answer) {
//           return element;
//         }
        
//         return {
//           ...element,
//           correctedAnswer,
//         }
//       });

//       return newAnswers;
//     })
//   };

//   const handleValueChange = (value) => {
//     handleAnswersChange((prevAnswers) => prevAnswers.map((element) => {
//       if (element !== answer) {
//         return element;
//       }
      
//       return {
//         // 解构赋值
//         ...element,
//         // correctedAnswer: element.correctedAnswer,
//         // value: element.value,
//         value,
//       }
//     }))
//   };

//   const handleDelete = () => {
//     handleAnswersChange((prevAnswers) => prevAnswers.filter((element) => element !== answer));
//   }
  
//   return (
//     <p>
//       <input 
//         type="checkbox" 
//         checked={answer.correctedAnswer} 
//         onChange={(event) => handleCorrectChange(event.target.checked)} 
//       />
//       <input 
//         placeholder='answer' 
//         value={answer.value} 
//         onChange={(event) => handleValueChange(event.target.value)}
//       />
//       <button 
//         onClick={(event) => {
//           event.preventDefault();
//           handleDelete();
//         }}
//       >
//         Delete
//       </button>
//     </p>
//   );
// };

// const App = () => {
//   const [answers, setAnswers] = useState([{
//     correctedAnswer: false,
//     value: '',
//   }, {
//     correctedAnswer: false,
//     value: '',
//   }]);

//   const [question, setQuestion] = useState('');

//   return (
//     <form>
//       <p>
//         <input 
//           placeholder="question" 
//           value={question} 
//           onChange={(event) => setQuestion(event.target.value)} 
//         />
//       </p>
//       {answers.map((answer, index) => (<Answer key={index} answer={answer} handleAnswersChange={setAnswers} />))}
//       <p>
//         <button 
//           onClick={(event) => {
//             event.preventDefault();
//             setAnswers((prevAnswers) => [...prevAnswers, {
//               correctedAnswer: false,
//               value: '',
//             }]);
//           }}
//         >
//           Add answer
//         </button>
//       </p>
//       <p>
//         <button 
//           type="submit"
//           onClick={(event) => {
//             event.preventDefault();
//             console.log({
//               question,
//               answers,
//             })
//           }}
//         >
//           Submit
//         </button>
//       </p>
//     </form>
//   )
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
