import { FiHome } from 'react-icons/fi';
import { defineField, defineType } from 'sanity';

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing page',
  type: 'document',
  icon: FiHome,
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'header',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'section' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Landing page',
      };
    },
  },
});