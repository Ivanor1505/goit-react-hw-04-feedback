import React from 'react';
import { FeedbackBox } from './FeedbackOpt.styled';

export function Feedback({ options, onFeedback }) {
  return (
    <FeedbackBox>
      {options.map(option => (
        <button key={option} onClick={() => onFeedback(option)}>
          {option}
        </button>
      ))}
    </FeedbackBox>
  );
}
