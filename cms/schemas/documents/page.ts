import { FiFileText } from 'react-icons/fi';
import { defineField, defineType } from 'sanity';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: FiFileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Used as meta title (name in browser tab) and used in Sanity studio.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: "A URL-friendly string that will appear in the page's URL.",
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metadata',
      title: 'Page metadata',
      description: 'Will override the default metadata for this page',
      type: 'pageMetadata',
      options: { collapsible: true, collapsed: true },
    }),
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
});
