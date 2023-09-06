import React from 'react';
import { SectionBox } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionBox>
      <h2>{title}</h2>
      {children}
    </SectionBox>
  );
}
