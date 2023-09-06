import React, { useState } from 'react';
import { Feedback } from './FeedbackOptons/FeedbackOpt';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';



export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  

  const handleFeedback = type => {
    setFeedback(prevState => ({...prevState, [type]: prevState[type] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercent = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const { good, neutral, bad } = feedback;

      return (
      <div>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(feedback)}
            onFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercent()}
          />
        </Section>
      </div>
    );
  }

