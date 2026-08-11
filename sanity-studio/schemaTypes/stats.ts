import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'stats',
  title: 'Statistics',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Urutan tampilan (1, 2, 3, 4)',
      validation: (Rule) => Rule.required().min(1).max(4),
    }),
    defineField({
      name: 'value',
      title: 'Nilai',
      type: 'string',
      description: 'Contoh: 500+, 50+, 20+',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Contoh: Siswa Aktif, Guru Berpengalaman',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      description: 'Optional: emoji untuk icon',
    }),
    defineField({
      name: 'isActive',
      title: 'Aktif?',
      type: 'boolean',
      description: 'Tampilkan statistik ini?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'value',
      subtitle: 'label',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      return {
        title: `${order}. ${title}`,
        subtitle: subtitle,
      };
    },
  },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
