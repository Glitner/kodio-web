import { defineField, defineType } from 'sanity';

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preHeading',
      title: 'Pre-heading',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{ type: 'internalLink' }, { type: 'externalLink' }],
      validation: (Rule) => Rule.max(1),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageObj',
    }),
    defineField({
      name: 'preamble',
      title: 'Preamble',
      type: 'string',
    }),
  ],
});
