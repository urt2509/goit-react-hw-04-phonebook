import PropTypes from 'prop-types';
import { SectionContainer, Title } from './Sections.styled';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <Title>{title}</Title>}
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export { Section };
