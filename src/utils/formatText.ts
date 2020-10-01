import { AllHtmlEntities } from 'html-entities';

const entities = new AllHtmlEntities();

export const formatText = (text: string) => {
  return entities.decode(text);
};
