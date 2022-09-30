import { footerConfig, footerConfigSection } from './documents/footerConfig';
import { landingPage } from './documents/landingPage';
import { menuConfig } from './documents/menuConfig';
import { page } from './documents/page';
import { accordion, accordionItem } from './objects/accordion';
import { article } from './objects/article';
import { blockContent } from './objects/blockContent';
import { color } from './objects/color';
import { externalLink } from './objects/externalLink';
import { header } from './objects/header';
import { imageObj } from './objects/imageObj';
import { internalLink } from './objects/internalLink';
import { section } from './objects/section';

export const schemaTypes = [
  /* documents */
  footerConfig,
  footerConfigSection,
  landingPage,
  menuConfig,
  page,

  /* objects */
  accordion,
  accordionItem,
  article,
  blockContent,
  color,
  externalLink,
  header,
  imageObj,
  internalLink,
  section,
];
