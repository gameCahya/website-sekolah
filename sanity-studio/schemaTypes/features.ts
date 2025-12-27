import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'features',
  title: 'Keunggulan/Features',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Urutan',
      type: 'number',
      description: 'Urutan tampilan (1-6)',
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      description: 'Contoh: Kurikulum Bilingual',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      description: 'Penjelasan singkat tentang keunggulan',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      description: 'Pilih emoji yang sesuai. Contoh: 📚, 🕌, 🏠',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'borderColor',
      title: 'Warna Border',
      type: 'string',
      description: 'Pilih warna untuk border card',
      options: {
        list: [
          { title: 'Primary (Teal)', value: 'border-primary-500' },
          { title: 'Secondary (Yellow)', value: 'border-secondary-400' },
          { title: 'Tertiary (Green)', value: 'border-tertiary-500' },
        ],
      },
      initialValue: 'border-primary-500',
    }),
    defineField({
      name: 'gradientFrom',
      title: 'Gradient From',
      type: 'string',
      description: 'Warna gradient awal',
      options: {
        list: [
          { title: 'Primary', value: 'from-primary-500' },
          { title: 'Secondary', value: 'from-secondary-400' },
          { title: 'Tertiary', value: 'from-tertiary-500' },
        ],
      },
      initialValue: 'from-primary-500',
    }),
    defineField({
      name: 'gradientTo',
      title: 'Gradient To',
      type: 'string',
      description: 'Warna gradient akhir',
      options: {
        list: [
          { title: 'Primary', value: 'to-primary-600' },
          { title: 'Secondary', value: 'to-secondary-500' },
          { title: 'Tertiary', value: 'to-tertiary-600' },
        ],
      },
      initialValue: 'to-primary-600',
    }),
    defineField({
      name: 'isActive',
      title: 'Aktif?',
      type: 'boolean',
      description: 'Tampilkan feature ini?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      order: 'order',
      icon: 'icon',
    },
    prepare({ title, subtitle, order, icon }) {
      return {
        title: `${order}. ${icon} ${title}`,
        subtitle: subtitle,
      };
    },
  },
  orderings: [
    {
      title: 'Urutan',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});